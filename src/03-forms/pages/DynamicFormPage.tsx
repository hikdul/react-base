    
import {Formik, Form} from 'formik'
import { MySelect, MyTextInput } from '../components'
import dataJson from '../data/custom-form.json'
import * as yup from 'yup'

const initialValues:{[key: string]: any} = {}
const FieldToValidate:{[key: string]: any} = {}

for (const input of dataJson) {
   initialValues[input.name] = input.value 
    
   let schema = yup.string()
   if(!input.validations) continue
        for (const rule of input.validations) 
        {
            if(rule.type === 'required')
            {
                const messege = 'this field is required'
                schema = schema.required(messege)
            }    

        }

    FieldToValidate[input.name] = schema
}

const VALIDATIONSCHEMA = yup.object({ ...FieldToValidate })

export const DynamicFormPage = () => 
{
    return(
        <div>
            <h1>Dynamic Form</h1>
            
            <Formik 
                initialValues={initialValues}
                onSubmit={values => console.log(values)}
                validationSchema={VALIDATIONSCHEMA}>
                {(formikProps)=>(
                    <Form>
                       {dataJson.map(({type, name, placeHolder,label,options}) =>
                       {
                            if(type==='input' || type ==='password' || type ==='email')
                            return(
                                <MyTextInput 
                                    key={name}
                                    type={(type as any)} 
                                    name={name} 
                                    label={label}
                                    placeHolder={placeHolder}/>
                            )
                            else if(type === 'select')
                            return(
                                <MySelect 
                                    key={name}
                                    label={label}
                                    name={name}>
                                        <option value=''>Select a option</option>
                                        {options?.map( ({value,text}) =>( <option key={value} value={value}>{text}</option>))}
                                    </MySelect>
                            )

                            throw new Error(`Type: ${type}, no soported`)
                       })}
                       <button type='submit' >Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}