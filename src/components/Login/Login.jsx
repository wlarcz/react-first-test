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
    const { label, name, ...rest } = props
    return (
        <div className={s.formControl}>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}
const RememberMe = (props) => {
    const { label, name, ...rest } = props
    return (
        <div className={s.formControl}>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} />
        </div>
    )
}

{/* <div>
    <input type={'checkbox'}
        name={'rememberMe'}
        value={initialValues.rememberMe}
    /> remember me
</div> */}

const FormikControl = (props) => {
    const { control, ...rest } = props
    switch (control) {
        case 'input': return <Input {...rest} />
        case 'textarea':
        case 'select':
        case 'radio':
        case 'checkbox': return <RememberMe {...rest} />
        case 'date':
        default: return null
    }
}

const LoginForm = (props) => {
    const initialValues = {
        email: '',
        password: '',
        rememberMe: false
    }

    // const checkboxOption = {
    //     key: 'Option 1',
    //     value: 'rOption 1'
    // }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Обязательно'),
        password: Yup.string().required('Обязательно')
    })

    // const onSubmit = values => {
    //     console.log('Form data', values);
    // }
    // const onSubmit = (values, { setSubmitting }) => {
    //     setTimeout(() => {
    //       alert(JSON.stringify(values, null, 2));
    //       setSubmitting(false);
    //     }, 400);
    //   }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={props.onSubmit}>
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
                        
                        <FormikControl
                            control='checkbox'
                            type='checkbox'
                            label='Remember me'
                            name='rememberMe' />

                        <button type='submit' disabled={!formik.isValid} >Submit</button>
                    </Form>
                }
            }
        </Formik>
    )
}

const Login = (props) => {
    const onSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={ onSubmit } />
    </div>
}

export default Login;