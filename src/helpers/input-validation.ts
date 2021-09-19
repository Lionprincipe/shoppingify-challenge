import * as yup from 'yup'

export const addItemFormSchema = yup.object().shape({
  note: yup.string().notRequired(),
  name: yup.string().required('the name cannot be empty'),
  category: yup.string().required('the category cannot be empty'),
  imageUrl: yup.string().url('this url seems not valid').notRequired(),
})

export type ValidationSchemaType = typeof addItemFormSchema
