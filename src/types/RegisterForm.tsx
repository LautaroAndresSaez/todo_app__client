export interface RegisterFormData{
    email: string,
    password: string,
    confirmPassword: string,
}

export interface RegisterFormError{
    email?: string,
    password?: string,
    confirmPassword?: string
}