interface Data {
  [k: string]: string | number
}
interface DataFormDataEntryValue {
  [k: string]: FormDataEntryValue
}

const normalizeObjFormData = (
  formData: DataFormDataEntryValue,
  defaultValues: Data
) => {
  let data = defaultValues

  Object.keys(defaultValues).forEach((key: string) => {
    if (typeof defaultValues[key] === 'string') {
      data = { ...data, ...{ [key]: formData[key] as string } }
    } else {
      data = { ...data, ...{ [key]: +formData[key] as number } }
    }
  })

  return data
}

export default normalizeObjFormData
