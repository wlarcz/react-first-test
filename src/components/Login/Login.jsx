import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './Login.module.css';
import * as Yup from 'yup';

const TextError = (props) => {
    return (
        <div className={s.error}>
            {props.children}
        </div>
    )
}

const Input = (props) => {
    const { label, name, ...rest} = props
    return (
        <div className={ s.formControl }>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

const FormikControl = (props) => {
    const { control, ...rest } = props
    switch(control) {
        case 'input': return <Input {...rest} />
        case 'textarea':
        case 'select':
        case 'radio':
        case 'checkbox':
        case 'date':
        default: return null
    }
}

const LoginForm = (props) => {
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Обязательно'),
        password: Yup.string().required('Обязательно')
    })

    const onSubmit = values => {
        console.log('Form data', values);
    }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return <Form>
                        <FormikControl
                        control='input'
                        type='email'
                        label='Email'
                        name='email' />
                        
                        <FormikControl
                        control='input'
                        type='password'
                        label='Password'
                        name='password' />
                        <button type='submit' disabled={!formik.isValid} >Submit</button>
                    </Form>
                }
            }
        </Formik>
    )
}

const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginForm />
    </div>
}

export default Login;