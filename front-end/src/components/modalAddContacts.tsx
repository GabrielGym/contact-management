import { useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { CustomModal } from "../styles/stylesModal";
interface ContactFormProps {
    CloseModal: () => void;
    isModalOpen: boolean
}

export const ModalAddContacts = ({ CloseModal, isModalOpen }: ContactFormProps) => {
    const [formData, setFormData] = useState({
        email: '',
        infos: '',
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
            await api.post(`/contacts`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setFormData({
                email: '',
                infos: '',
                name: '',
                number: '',
                img_perfil: '',
            });
            toast.success("Contato adicionado com sucesso!")
            CloseModal();
        } catch (error) {
            toast.error("Erro ao cadastrar contato:!")
        }
    };

    return (
        <CustomModal isOpen={isModalOpen} onRequestClose={CloseModal} ariaHideApp={false}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Adicione o email aqui..."
                />

                <label htmlFor="infos">Infos</label>
                <input
                    id="infos"
                    name="infos"
                    value={formData.infos}
                    onChange={handleInputChange}
                    placeholder="Adicione as informações extras aqui..."
                />

                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Adicione o nome aqui..."
                />

                <label htmlFor="number">Número</label>
                <input
                    type="text"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    required
                    placeholder="Adicione o number aqui..."
                />

                <button type="submit" className="cadastrar">Cadastrar</button>
                <button type="button" onClick={CloseModal} className="close">X</button>

            </form>

        </CustomModal>
    )
}