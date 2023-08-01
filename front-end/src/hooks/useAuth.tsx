import { AuthContext } from "../providers/AuthProvider"
import { useContext } from "react"

export const useAuth = () => {
    const authContext = useContext(AuthContext)

    return authContext
}