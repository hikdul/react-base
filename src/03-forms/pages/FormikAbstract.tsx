import { Formik, Form } from "formik";
import { formikBasicProps, formikCompleteProps } from "../interfaces/RegisterPageProps";
import * as Yup from "yup";
import "../styles/styles.css";
import {MyTextInput, MySelect, MyCheckbox} from '../components'

export const FormikAbtract = () => {

  const initialValues: formikCompleteProps = {
    email: '',
    firstName: '',
    jobType: '',
    lastName: '',
    terms: false,
  }

  const validationSchema = Yup.object({
    email: Yup.string().required("required").email("no es un email valido"),
    firstName: Yup.string()
      .required("required")
      .max(25, "maximo 25 Caracteres"),
    lastName: Yup.string().required("required").max(25, "maximo 25 caracteres"),
    terms: Yup.boolean().oneOf([true],'ocept the terms'),
    jobType: Yup.string().required('is required').notOneOf(['na'], 'this option is not valid now, plese choise otrer option.')
  })
  
  const onSubmit = (values: formikBasicProps) => console.log(values)
  
  return (
    <div>
      <h1>Formik Abstract</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>

            <MyTextInput label="Ingrese Nombre" name="firstName" />

            <MyTextInput label="Ingrese Apellido"name="lastName" />

            <MyTextInput label="Ingrese Email" name="email" type="email" placeholder="correo@example.ve"/>

            <MySelect name="jobType" label="Seleccione un tipo de trabajo">
                <option value=''> Select 1 option</option>
                <option value='Dev'> Developer </option>
                <option value='IT'> IT </option>
                <option value='Dx'> Designed </option>
                <option value='Ao'> administrative </option>
                <option value='na'> No select this </option>
            </MySelect>
            
            <MyCheckbox name='terms' label="Acept Term and conditions?"/>

            <button type="submit">Submit</button>
          </Form>
        )}

      </Formik>
    </div>
  )
}
