import { Formik, useFormik } from 'formik';
import s from './Login.module.css';

const initialValues = {
    login: '',
    password: '',
    rememberMe: false
}

const onSubmit = values => {
    console.log('Form data', values)
}

const validate = values => {
    let errors = {}

    if (!values.login) {
        errors.login = 'Required'
    }

    if (!values.password) {
        errors.password = 'Required'
    }

    return errors
}

const LoginForm = (props) => {
    
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log('Visited fields', formik.touched);

    return (
        <form onSubmit={formik.handleSubmit} >
            <div className={s.formControl} >
                <input
                placeholder={'Login'}
                name={'login'} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.login}
                 />
                 { formik.touched.login && formik.errors.login ? <div className={ s.error } >{ formik.errors.login }</div> : null }
            </div>
            <div className={s.formControl} >
                <input 
                placeholder={'Password'} 
                name={'password'}
                type={'password'} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.password} 
                />
                { formik.touched.password && formik.errors.password ? <div className={ s.error } >{ formik.errors.password }</div> : null }
            </div>
            <div>
                <input type={'checkbox'}
                name={'rememberMe'}
                value={formik.values.rememberMe} 
                /> remember me
            </div>
            <div>
                <button type={'submit'} >Login</button>
            </div>
        </form>
    )
}

const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginForm />
    </div>
}

export default Login;