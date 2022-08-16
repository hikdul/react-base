import { Form, Formik } from 'formik'
import { MyTextInput } from '../components'
import { VALIDATIONSCHEMA } from '../constants/validationSchema'
import { formikCompleteProps, RegisterDataProps } from '../interfaces/RegisterPageProps'
import '../styles/styles.css' 


 export const RegisterPageFormikMode = () =>
 {
    
  const initialValues: RegisterDataProps = {
    Email: '',
    Name: '',
    Password: '',
    Password2: ''
  }

  
  const onSubmit = (values: RegisterDataProps) => console.log(values)
  
  return (
    <div>
      <h1>Formik Abstract</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={VALIDATIONSCHEMA}
        onSubmit={onSubmit}
      >
        {({handleReset}) => (
          <Form>
            <MyTextInput label="Ingrese Nombre" name="Name" />
            <MyTextInput label="Ingrese Email" name="Email" type="email" placeholder="correo@example.ve"/>
            <MyTextInput label="you psw here" name="Password" />
            <MyTextInput label="Repeat psw" name="Password2" />
            <button type="submit">Send Data</button>
            <button onClick={handleReset}>Reset</button>
          </Form>
        )}

      </Formik>
    </div>
    )
 }