import * as yup from "yup"

export const validationSchema = yup.object({
    firstName: yup.string().required("First Name is required!"),
    gender: yup.string().required("Gender is required!"),
    region: yup.string().required("Choose Region"),
    agreePolicy: yup.boolean().oneOf([true],"Agree Our Policy"),
})
