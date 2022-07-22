import { ErrorMessage, useField } from "formik"


export const MyCheckbox = ({label, ...props }: myTextInputProps) =>
{
    const [field] = useField({...props, type:'checkbox'})

    return (
        <>
            <label>
              {!!label && label}
                  <input type='checkbox' className="input-checkbox" {...field} {...props} />
            </label>
            <ErrorMessage name={props.name} component="span" />
        </>
    )
}

interface myTextInputProps 
{
    name: string
    label?: string
    [x: string] : any
}
