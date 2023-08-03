import { useForm } from "react-hook-form"
import { LoginData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"
import { ToastContainer } from "react-toastify"
import { LoginStyles } from "./stylesLogin"

export const Login = () => {
    const { register, handleSubmit } = useForm<LoginData>({
        resolver: zodResolver(schema)
    })
    const { signIn, navigate } = useAuth()
    return (
        <LoginStyles>
            <h1>Login</h1>

            <form onSubmit={handleSubmit(signIn)}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")} placeholder="Digite seu email aqui..." />
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" {...register("password")} placeholder="Digite sua senha aqui..." />
                <button type="submit">Entrar</button>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </form>
            <h2>Ainda não possui uma conta? <span onClick={() => navigate('cadastro')}>cadastre-se</span> no botão a baixo</h2>
            <button type="submit" onClick={() => navigate('cadastro')}>Cadastrar-se</button>
        </LoginStyles>
    )
}