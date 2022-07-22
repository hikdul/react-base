import { ErrorMessage, useField } from "formik"


export const MyTextInput = ({label, ...props }: myTextInputProps) =>
{
    const [field] = useField(props)

    return (
        <>
            {label && ( <label htmlFor={props.id || props.name}>{label}</label>)}
            <input className="text-input" {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />
        </>
    )
}

interface myTextInputProps 
{
    name: string
    label?: string
    type?: 'text' | 'email' | 'password'
    placeholder?: string
    [x: string] : any
}
