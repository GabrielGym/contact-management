import { ReactNode, createContext, useEffect } from "react";
import { LoginData, LoginResponse } from "../pages/Login/validator";
import { api } from "../services/api";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { CadastroData } from "../pages/Cadastro/validator";

interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextValues {
    signIn: (data: LoginData) => Promise<void>
    newRegister: (data: CadastroData) => Promise<void>
    navigate: NavigateFunction
}

export const AuthContext = createContext({} as AuthContextValues)

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("your-todolist:token")

        if (!token) {
            return
        }
        api.defaults.headers.common.Authorization = `Bearer ${token}`
    }, [])

    const signIn = async (data: LoginData) => {
        try {
            const response = await api.post<LoginResponse>("/login", data)
            const { token } = response.data

            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("your-todolist:token", token)


            toast.success("Usuário cadastrado com sucesso!")
            setTimeout(() => navigate("dashboard"), 3200)

        } catch (error) {
            toast.error(`Erro ao cadastrar usuário, verifique os dados novamente!`)
        }
    }

    const newRegister = async (data: CadastroData) => {
        try {
            await api.post("/users", data);
            toast.success("Usuário cadastrado com sucesso!");
            setTimeout(() => {
                navigate("/");
            }, 2850);
        } catch (error) {
            toast.error("Erro ao cadastrar usuário, verifique os dados novamente.");
        }
    };

    return (
        <AuthContext.Provider value={{ signIn, navigate, newRegister }}>
            {children}
        </AuthContext.Provider>
    )
}