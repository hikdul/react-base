import { FormikErrors, useFormik } from 'formik'
import { formikBasicProps } from '../interfaces/RegisterPageProps'
import '../styles/styles.css'

export const FormiBasicPages = () =>{
    //{ validateOnChange, validateOnBlur, validateOnMount, isInitialValid, enableReinitialize, onSubmit, ...rest }: FormikConfig<FormikValues>): {
    //initialValues: FormikValues;
    //initialErrors: FormikErrors<unknown>;
    //... 35 more ...;
    //submitCount: number;
    //}
    
    const initialValues: formikBasicProps = {
        firstName: '',
        lastName: '',
        email: ''
    }
    
    const validate = ({firstName, lastName, email}:formikBasicProps) => {
        const errors: FormikErrors<formikBasicProps> = {}

        if(!firstName.trim())
            errors.firstName = 'Required'
        else if(firstName?.length > 25)
            errors.firstName = 'Must Be 25 character or less'

        if(!lastName.trim())
            errors.lastName = 'Required'
        else if(lastName?.length > 25)
            errors.lastName = 'Must Be 25 character or less'

        if (!email) 
            errors.email = 'Required'
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) 
            errors.email = 'Invalid email address';

        return errors
    } 
    
    const {handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik<formikBasicProps>({
        initialValues,
        onSubmit: formDatas => console.log(formDatas),
        validate
    })

    return(
        <div>
            <h1>Basic Tutarial Formik</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor='firsName'>Ingrese Nombre</label>
                <input 
                    type='text'
                    name='firstName' 
                    placeholder='nombre'
                    onBlur={handleBlur}
                    value={values.firstName}
                    onChange={handleChange}/>
                { touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        
                <label htmlFor='lastName'>Ingrese Apellido</label>
                <input 
                    type='text' 
                    name='lastName' 
                    value={values.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder='Apellido'/>
                { touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
                
                <label htmlFor='email'>Ingrese Email</label>
                <input 
                    type='email' 
                    name='email'
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder='ingrese@email.example'/>
                { touched.email && errors.email && <span>{errors.email}</span>}
        
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}