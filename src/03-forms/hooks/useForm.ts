import { ChangeEvent, useState } from "react"

export const useForm = <T>(initState: T) =>
{

    const [formData, setFormData] = useState<T>(initState)   

    const onResetForm = () => setFormData({ ...initState })

    const isValidEmail = ( email: string ):boolean => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    const areEqual = (value1: string , value2: string): boolean => value1 === value2

    const isValueRequired = (value: string): boolean => value.length  <= 0
    
    const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    {

        const value =  event.target.value
        const name = event.target.name

        setFormData( pv => ({
            ...pv,
            [name]: value
        }))
    }
    
    return { ...formData, formData, onChange, onResetForm, isValidEmail, isValueRequired, areEqual}
}

// los tres puntos(operador spreat) antes de la declaracion es para que se envie el dato desectructurado