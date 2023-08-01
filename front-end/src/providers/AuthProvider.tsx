import { ReactNode, createContext, useEffect } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextValues {
    sighIn: (data: LoginData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextValues)

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("your-todolist: token")

        if (!token) {
            return
        }
        api.defaults.headers.common.Authorization = `Bearer ${token}`
    }, [])

    const sighIn = async (data: LoginData) => {
        const response = await api.post("login/", data)
        const { token } = response.data

        api.defaults.headers.common.Authorization = `Bearer ${token}`
        localStorage.setItem("your-todolist: token", token)
        navigate("dashboard")
    }

    return (
        <AuthContext.Provider value={{ sighIn }}>
            {children}
        </AuthContext.Provider>
    )
}