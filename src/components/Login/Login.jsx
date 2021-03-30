import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './Login.module.css';
import * as Yup from 'yup';

const initialValues = {
    login: '',
    password: '',
    rememberMe: false
}

const onSubmit = values => {
    console.log('Form data', values)
}

const validationSchema = Yup.object({
    login: Yup.string().required('Обизатильна!'),
    password: Yup.string().required('Важно!')
})

const LoginForm = (props) => {


    // console.log('Visited fields', formik.touched);

    return (
        <Formik
        initialValues={ initialValues }
        validationSchema={ validationSchema }
        onSubmit={ onSubmit }>
            <Form>
                <div className={s.formControl} >
                    <Field
                        placeholder={'Login'}
                        name={'login'}
                    />
                    <ErrorMessage name='login' />
                </div>
                <div className={s.formControl} >
                    <Field
                        placeholder={'Password'}
                        name={'password'}
                        type={'password'}
                    />
                    <ErrorMessage name='password' />
                </div>
                <div>
                    <Field type={'checkbox'}
                        name={'rememberMe'}
                    /> remember me
            </div>
                <div>
                    <button type={'submit'} >Login</button>
                </div>
            </Form>
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