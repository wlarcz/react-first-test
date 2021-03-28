const LoginForm = (props) => {
    return (
        <form action="">
            <div>
                <input placeholder={'Login'} />
            </div>
            <div>
                <input placeholder={'Password'} />
            </div>
            <div>
                <input type={'checkbox'} /> remember me
            </div>
            <div>
                <button>Login</button>
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