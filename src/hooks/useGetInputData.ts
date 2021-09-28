import { useState } from 'react'
import { addItemFormSchema } from '../helpers/input-validation'
import { CategoryItemsType, InputFieldsTypes } from '../types'

import { InputTypes, InputFiledNamesTypes } from '../types'
import { useCategoriesItems } from './useCategoriesItems'

const INITIAL_INPUT_STATE = { name: '', note: '', imageUrl: '', category: '' }

interface InputInfoType {
  type: InputTypes
  label: string
  name: InputFiledNamesTypes
  placeholder: string
  optional?: true
  options?: { label: string; value: string }[]
}

const INPUT_INFOS: InputInfoType[] = [
  {
    type: InputTypes.Text,
    label: 'Name',
    name: 'name',
    placeholder: 'Enter a name',
  },
  {
    type: InputTypes.TextArea,
    label: 'Note',
    name: 'note',
    placeholder: 'Enter a note',
    optional: true,
  },
  {
    type: InputTypes.Text,
    label: 'Image',
    name: 'imageUrl',
    placeholder: 'Enter a url',
    optional: true,
  },
]

const CATEGORIES_INPUT_INFOS: InputInfoType = {
  type: InputTypes.Select,
  label: 'Category',
  name: 'category',
  options: [],
  placeholder: 'Enter a category',
}
export const addItemHeading = 'Add a new item'

export const optionalMarker = '(optional)'

export const useGetInputData = () => {
  const { categoriesItems } = useCategoriesItems()
  const [inputValues, setInputValues] =
    useState<InputFieldsTypes>(INITIAL_INPUT_STATE)
  const [errors, setErrors] = useState(inputValues)
  const requiredInputs = INPUT_INFOS.filter((el) => !el.optional)

  const { addItem } = useCategoriesItems()

  const hasAllRequiredFieldsCorrectValues = requiredInputs.every(
    ({ name }) => !!inputValues[name] && !errors[name]
  )

  const checkForError =
    (name: InputFiledNamesTypes) => async (value: string) => {
      try {
        setErrors({ ...errors, [name]: '' })
        await addItemFormSchema.validateAt(name, { [name]: value })
      } catch ({ message = '' }) {
        setErrors({ ...errors, [name]: message })
      }
    }

  const onsubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const isValid = await addItemFormSchema.validate(inputValues)
      if (isValid) {
        addItem(inputValues)
        setInputValues(INITIAL_INPUT_STATE)
      }
    } catch (err) {
      console.log('invalid inputs')
    }
  }

  const getInputValue = (name: InputFiledNamesTypes) =>
    `${
      inputValues && typeof inputValues[name] === 'string'
        ? inputValues[name]
        : ''
    }`

  return {
    data: [
      ...INPUT_INFOS,
      {
        ...CATEGORIES_INPUT_INFOS,
        options: getCategoriesNames(categoriesItems),
      },
    ],
    heading: addItemHeading,

    errors,
    cancelDetails: {
      onCancel: (callBackFn: () => void) => () => {
        setInputValues(INITIAL_INPUT_STATE)
        callBackFn()
      },
      btn: { label: 'cancel' },
    },
    submitDetails: {
      onsubmit,
      btn: { label: 'save', disable: !hasAllRequiredFieldsCorrectValues },
    },
    addMarkAsOptional,
    onChangeHandler: (name: InputFiledNamesTypes) => (value: string) =>
      setInputValues({ ...inputValues, [name]: value }),

    errorHandler: checkForError,
    getInputValue,
  }
}

function addMarkAsOptional(label: string | number, isOptional: boolean) {
  return `${label}${isOptional ? ' ' + optionalMarker : ''} `
}

function getCategoriesNames(list: CategoryItemsType[]) {
  return list.map(({ title }) => ({ label: title, value: title }))
}
