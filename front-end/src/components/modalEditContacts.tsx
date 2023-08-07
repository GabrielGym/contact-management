import { useState } from "react";
import { api } from "../services/api";
import ReactModal from 'react-modal';
import { toast } from "react-toastify";
import { CustomModal } from "../styles/stylesModal";
ReactModal.setAppElement('#root');
interface ContactFormProps {
    CloseModalEditContact: () => void;
    isModalEditContactOpen: boolean
}

export const ModalEditContacts = ({ CloseModalEditContact, isModalEditContactOpen }: ContactFormProps) => {
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
        const contactId = localStorage.getItem("contactId")
        try {
            await api.patch(`/contacts/${contactId}`, formData);
            setFormData({
                email: '',
                infos: '',
                name: '',
                number: '',
                img_perfil: '',
            });
            toast.success("Contato editado com sucesso!")
            CloseModalEditContact();
        } catch (error) {
            toast.error("Erro ao editado contato:!")
        }
    };

    return (
        <div>
            <CustomModal isOpen={isModalEditContactOpen} onRequestClose={CloseModalEditContact}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Adicione o novo email aqui..."
                    />

                    <label htmlFor="infos">Infos</label>
                    <textarea
                        id="infos"
                        name="infos"
                        value={formData.infos}
                        onChange={handleInputChange}
                        placeholder="Adicione as novas informações extras aqui..."
                    />

                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Adicione o novo nome aqui..."
                    />

                    <label htmlFor="number">Número</label>
                    <input
                        type="text"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleInputChange}
                        required
                        placeholder="Adicione o novo numero aqui..."
                    />

                    <button type="submit" className="edit">Editar</button>
                    <button type="button" onClick={CloseModalEditContact} className="close">X</button>
                </form>
            </CustomModal>
        </div>


    )
}