import { useState } from "react"

export const useProduc = () => 
{
    const MAXVALUE = 10
    const [counter, setCounter] = useState<number>(0)

    const AddBy = (value: number ) => 
    {
        counter < MAXVALUE ?
            setCounter( prev => Math.max(prev + value , 0))
        :
            setCounter( prev => Math.min(prev + value , MAXVALUE))
    }

    return { counter, AddBy }
}