export interface RegisterDataProps
{
    Email: string
    Name: string
    Password: string
    Password2: string
}

export interface formikBasicProps
{
    email: string
    firstName: string
    lastName: string
}


export interface formikCompleteProps
{
    email: string
    firstName: string
    lastName: string
    terms: boolean
    jobType: string
}