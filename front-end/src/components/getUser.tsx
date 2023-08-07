import { api } from "../services/api";

export type UserData = {
    id: string;
    name: string;
    email: string;
    password: string;
    number: string;
    img_perfil?: string | null;
};

export const GetUser = async () => {
    const token = localStorage.getItem("your-todolist:token")
    const userData = await api.get<UserData>(`/users/`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    localStorage.setItem("user", JSON.stringify(userData))
    localStorage.setItem("userId", JSON.stringify(userData.data.id))

}