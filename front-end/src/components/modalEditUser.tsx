import { useState } from "react";
import { api } from "../services/api";
import ReactModal from 'react-modal';
import { toast } from "react-toastify";
import { CustomModal } from "../styles/stylesModal";
ReactModal.setAppElement('#root');
interface ContactFormProps {
    CloseModalEditUser: () => void;
    isModalEditUserOpen: boolean
}

export const ModalEditUser = ({ CloseModalEditUser, isModalEditUserOpen }: ContactFormProps) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        number: '',
        img_perfil: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        const newValue = value === '' ? null : value;
        setFormData({
            ...formData,
            [name]: newValue
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const token = localStorage.getItem("your-todolist:token")
        try {
            await api.patch(`/users/`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setFormData({
                email: '',
                password: '',
                name: '',
                number: '',
                img_perfil: '',
            });
            toast.success("Usuario editado com sucesso!")
            CloseModalEditUser();
        } catch (error) {
            toast.error("Erro ao editar usuario:!")
        }
    };

    return (
        <div>
            <CustomModal isOpen={isModalEditUserOpen} onRequestClose={CloseModalEditUser}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Adicione o novo email aqui..."
                        required
                    />

                    <label htmlFor="password">Senha</label>
                    <input
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Adicione a sua nova senha aqui..."
                        required
                    />

                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Adicione o novo nome aqui..."
                        required
                    />

                    <label htmlFor="number">Número</label>
                    <input
                        type="text"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleInputChange}
                        placeholder="Adicione o novo numero aqui..."
                        required
                    />

                    <button type="submit" className="edit">Editar</button>
                    <button type="button" onClick={CloseModalEditUser} className="close">X</button>
                </form>
            </CustomModal>
        </div>


    )
}