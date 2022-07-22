import { useFormik } from 'formik'
import { formikBasicProps } from '../interfaces/RegisterPageProps'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormiYupPages = () => {
    
    const initialValues: formikBasicProps = {
        firstName: '',
        lastName: '',
        email: ''
    }
     
    const validationSchema =  Yup.object({
        firstName: Yup.string().required('required').max(25,'maximo 25 Caracteres'),
        lastName: Yup.string().required('required').max(25, 'maximo 25 caracteres'),
        email: Yup.string().required('required').email('no es un email valido')
    })
    
    const { handleSubmit, errors, touched, getFieldProps } = useFormik<formikBasicProps>({
        initialValues,
        onSubmit: formDatas => console.log(formDatas),
        validationSchema
    })

    return (
        <div>
            <h1>Basic Tutorial Formik whit use Yup</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor='firsName'>Ingrese Nombre</label>
                <input 
                    type='text'
                    {...getFieldProps('firstName')}/>
                { touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        
                <label htmlFor='lastName'>Ingrese Apellido</label>
                <input 
                    type='text' 
                    {...getFieldProps('lastName')}/>
                { touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
                
                <label htmlFor='email'>Ingrese Email</label>
                <input 
                    type='email' 
                    {...getFieldProps('email')} />
                { touched.email && errors.email && <span>{errors.email}</span>}
        
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}