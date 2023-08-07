import { BiSearch } from "react-icons/bi";
import { ContactsResponse } from "../pages/Dashboard/validator";
import { toast } from "react-toastify";

interface SearchContactsProps {
    contacts: ContactsResponse[]
    setContacts: React.Dispatch<React.SetStateAction<ContactsResponse[]>>
    formData: {
        name: string;
    }
    setFormData: React.Dispatch<React.SetStateAction<{
        name: string;
    }>>
}

export const SearchContacts = ({ setContacts, contacts, formData, setFormData }: SearchContactsProps) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        const filteredContacts = contacts.filter((contact) => {
            return (contact.name).toLocaleUpperCase() === (formData.name).toLocaleUpperCase();
        });
        if (filteredContacts.length > 0) {
            setContacts(filteredContacts)
        } else {
            toast.error('Contato não encontrado, verifique se o nome está correto')
        }
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className='form-search'>
            <button type="submit"><BiSearch /></button>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Pesquisar"
            />
        </form>
    )
}