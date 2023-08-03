import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"
import { Cadastro } from "../pages/Cadastro"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="cadastro" element={<Cadastro/>}/>
        </Routes>
    )
}