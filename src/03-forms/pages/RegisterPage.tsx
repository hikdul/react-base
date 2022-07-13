 
 import '../styles/styles.css' 

 export const RegisterPage = () =>
 {
    
    return(
        <div className="form">
            <h1>Register Page</h1>
            <form>
                <input
                    type='text'
                    placeholder='Name'/>
                <input
                    type='email'
                    placeholder='Email'/>
                <input
                    type='password'
                    placeholder='Password'/>
                <input
                    type='password'
                    placeholder='Repeat Password'/>
            
            <button type='submit'>Create</button>
            </form>

        </div>
    )
 }