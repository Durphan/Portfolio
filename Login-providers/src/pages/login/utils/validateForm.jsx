import * as Yup from "yup"


export const ValidateForm = Yup.object({
    name: Yup.string().required(),
    adress:Yup.string().required(),
    username:Yup.string().required(),
    key:Yup.string().required(),
})