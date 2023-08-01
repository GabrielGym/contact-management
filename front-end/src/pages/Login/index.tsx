import { useForm } from "react-hook-form"
import { LoginData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"

export const Login = () => {
    const {register, handleSubmit} = useForm<LoginData>({
        resolver: zodResolver(schema)
    })
    const {sighIn} = useAuth()
    return (
        <main>
            <h2>Login</h2>

            <form onSubmit={handleSubmit(sighIn)}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")}/>
                <label htmlFor="password" {...register("password")}>Senha</label>
                <input type="password" id="password"/>
                <button type="submit">Entrar</button>
            </form>
        </main>
    )
}