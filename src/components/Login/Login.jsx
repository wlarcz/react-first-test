import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './Login.module.css';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router';

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

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Обязательно'),
        password: Yup.string().required('Обязательно')
    })

    // const onSubmit = (values, {setStatus}) => {
    //     props.login(values.email, values.password, values.rememberMe, setStatus);
    // }

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


                        {formik.status && formik.status.message && (
                            <div className={s.error}>{formik.status.message}</div>
                        )}
                        <button type='submit' disabled={!formik.isValid} >Submit</button>

                    </Form>
                }
            }
        </Formik>
    )
}

const Login = (props) => {
    const onSubmit = (values, actions) => {
        props.login(values.email, values.password, values.rememberMe, actions);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} />
        {/* <LoginForm login={ login }/> */}
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);