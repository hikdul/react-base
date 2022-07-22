import { Formik, Field, Form, ErrorMessage } from "formik";
import { formikBasicProps, formikCompleteProps } from "../interfaces/RegisterPageProps";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikCompounents = () => {

  const initialValues: formikCompleteProps = {
    email: '',
    firstName: '',
    jobType: '',
    lastName: '',
    terms: false,
  };

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
      <h1>Formik Compounents</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firsName">Ingrese Nombre</label>
            <Field name='firstName' type='text' />
            <ErrorMessage name='firstName' component='span'/>

            <label htmlFor="lastName">Ingrese Apellido</label>
            <Field name='lastName' type='text' />
            <ErrorMessage name='lastName' component='span'/>

            <label htmlFor="email">Ingrese Email</label>
            <Field name='email' type='text' />
            <ErrorMessage name='email' component='span'/>

            <label htmlFor="jobType">Job Type</label>
            <Field name='jobType' as='select'>
                <option value=''> Select 1 option</option>
                <option value='Dev'> Developer </option>
                <option value='IT'> IT </option>
                <option value='Dx'> Designed </option>
                <option value='Ao'> administrative </option>
                <option value='na'> Na select this </option>
            </Field>
            <ErrorMessage name='jobType' component='span'/>

            <label >
                Acept Term and conditions?
                <Field name='terms' type='checkbox' />
            </label>
            <ErrorMessage name='terms' component='span'/>

            <button type="submit">Submit</button>
          </Form>
        )}

      </Formik>
    </div>
  );
};
