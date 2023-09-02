import * as Yup from "yup"


export const ValidateForm = Yup.object({
    name: Yup.string().required("Este campo es requerido"),
    lastname:Yup.string().required("Este campo es requerido"),
    email:Yup.string().required("Este campo es requerido").matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Coloque un correo electronico correcto"),
    key:Yup.string().required("Este campo es requerido").min(7, "La clave debe de tener un minimo de 7 caracteres"),
})