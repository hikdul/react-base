 import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import { RegisterDataProps } from '../interfaces/RegisterPageProps'
 import '../styles/styles.css' 

 export const RegisterPage = () =>
 {
    
    const {Name, Email, Password, Password2, onChange, onResetForm,isValidEmail, isValueRequired, areEqual} = useForm<RegisterDataProps>({Name:'', Email:'', Password:'', Password2:''})

    const onSubmit = (event: FormEvent<HTMLDivElement>) => {
        
        event.preventDefault()
        console.log(event)
    }
    
        
    return (
        <div className="form" onSubmit={onSubmit}>
            <h1>Register Page</h1>
            <form noValidate>

                <input
                    type='text'
                    placeholder='Name'
                    name='Name'
                    className={ isValueRequired(Name) ? `has-error` : ''}
                    value={Name}
                    onChange={e => onChange(e)}/>
                    { isValueRequired(Name) &&  <span>este campo es necesarie</span>}
                <input
                    type='email'
                    placeholder='Email'
                    className={ !isValidEmail(Email) ? `has-error` : ''}
                    name='Email'
                    value={Email}
                    onChange={e => onChange(e)}/>
                    { !isValidEmail(Email) &&  <span>El Email no es correcto</span>}
                
                <input
                    type='password'
                    name='Password'
                    placeholder='Password'
                    className={ !isValueRequired(Password) ? `has-error` : ''}
                    value={Password}
                    onChange={e => onChange(e)}/>
                    { isValueRequired(Password) &&  <span>La Contraseña es obligatoria</span>}
                <input
                    type='password'
                    name='Password2'
                    className={ !areEqual(Password,Password2) ? `has-error` : ''}
                    placeholder='Repeat Password'
                    value={Password2}
                    onChange={e => onChange(e)}/>
                    { isValueRequired(Password2) &&  <span>La Contraseña es obligatoria</span>}
                    { !areEqual(Password, Password2) &&  <span>las contraseñas no coinciden</span>}

            <button type='submit'>Register</button>
            <button onClick={onResetForm}>Reset</button>
            </form>
        </div>
    )
 }