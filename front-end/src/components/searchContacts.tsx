import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { ContactsResponse } from "../pages/Dashboard/validator";

interface SearchContactsProps {
    contacts: ContactsResponse[]
    setContacts: React.Dispatch<React.SetStateAction<ContactsResponse[]>>
}

export const SearchContacts = ({ setContacts, contacts }: SearchContactsProps) => {
    const [formData, setFormData] = useState({
        name: '',
    });

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
        if(filteredContacts.length > 0) {
            setContacts(filteredContacts)
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