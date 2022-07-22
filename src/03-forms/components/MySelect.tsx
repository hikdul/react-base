
import { useField } from "formik"


export const MySelect = ({label, ...props }: myTextInputProps) =>
{
    const [field, meta] = useField(props)

    return (
        <>
            {label && ( <label htmlFor={props.id || props.name}>{label}</label>)}
            <select className="select-input" {...field} {...props} />
            {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            }
        </>
    )
}
// en este componente dejo los metas por si son utiles, pero en las otras clases esta mejor explicado.
interface myTextInputProps 
{
    name: string
    label?: string
    [x: string] : any
}