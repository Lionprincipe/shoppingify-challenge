import { useCallback } from 'react'
import { ValidationSchemaType } from '../helpers/input-validation'

export const useYupValidationResolver = (
  validationSchema: ValidationSchemaType
) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        })

        return {
          values,
          errors: {},
        }
      } catch (errors) {
        return {
          values: {},
          errors: errors,
        }
      }
    },
    [validationSchema]
  )
