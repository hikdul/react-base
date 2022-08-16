import * as yup from 'yup'

export const VALIDATIONSCHEMA = () => yup.object({
    Name: yup.string().required('el nombre es obligatorio').min(2,'minimo 2 caracteres para un nombre').max(20, 'maximo 20 caracteres para un nombre'),
    Email: yup.string().email().required('le Email es necesario'),
    Password: yup.string().required('la contasena es obligatoria'),
    Password2: yup.string().required('la confirmacion de contraseña es obligatoria').oneOf([yup.ref('Password'), null], 'las contrasenas deben de ser iguales')
  })
