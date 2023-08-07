import { useEffect, useState } from 'react';
import { BiSolidBellRing, BiBellOff, BiSolidPencil, BiTrash } from "react-icons/bi"
import { IoMdContact } from "react-icons/io"
import { PiGearThin } from "react-icons/pi"
import { ContactsResponse } from './validator';
import { api } from '../../services/api';
import { ModalAddContacts } from '../../components/modalAddContacts';
import { GetUser } from '../../components/getUser';
import { useNavigate } from 'react-router-dom';
import { ModalEditContacts } from '../../components/modalEditContacts';
import { ToastContainer, toast } from 'react-toastify';
import { Header, Main, Section } from './stylesDashboard';
import { ModalEditUser } from '../../components/modalEditUser';
import { SearchContacts } from '../../components/searchContacts';

const BellActive = () => {
    const [isBellRinging, setIsBellRinging] = useState<boolean>(false);
    const toggleBell = () => {
        setIsBellRinging(!isBellRinging);
    };

    return (
        <button onClick={toggleBell}>
            {isBellRinging ? <BiSolidBellRing /> : <BiBellOff />}
        </button>
    );
}

export const Dashboard = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("your-todolist:token");
    const userDataString = localStorage.getItem("user");
    const userData = JSON.parse(userDataString!);

    const [contacts, setContacts] = useState<ContactsResponse[]>([]);
    const [formData, setFormData] = useState({ name: '' });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalEditContactOpen, setIsModalEditContactOpen] = useState(false);
    const [isModalEditUserOpen, setIsModalEditUserOpen] = useState(false);

    const OpenModal = () => {
        setIsModalOpen(true);
    };

    const CloseModal = () => {
        setIsModalOpen(false);
    };

    const OpenModalEditContact = () => {
        setIsModalEditContactOpen(true);
    };

    const CloseModalEditContact = () => {
        setIsModalEditContactOpen(false);
    };

    const OpenModalEditUser = () => {
        setIsModalEditUserOpen(true);
    };

    const CloseModalEditUser = () => {
        setIsModalEditUserOpen(false);
    };

    const DeleteContact = async () => {
        const contactId = localStorage.getItem("contactId")
        try {
            await api.delete(`/contacts/${contactId}`);
            toast.success("Contato deletado com sucesso!")
        } catch (error) {
            toast.error(`Erro ao deletar contato!`)
            console.log(error);
        }
    }

    useEffect(() => {
        if (!token) {
            navigate("/")
        }
        const AllContacts = async () => {
            try {
                const response = await api.get<ContactsResponse[]>("/contacts", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setContacts(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        GetUser();
        if (formData.name.length <= 0) {
            AllContacts();
        }
    }, [formData.name.length, navigate, token, userData]);

    return (
        <Main>
            <Header className='conf-user'>
                <h1>Contact management</h1>
                <SearchContacts contacts={contacts} setContacts={setContacts} formData={formData} setFormData={setFormData} />
                <button onClick={OpenModal}>Adicionar contato +</button>
                <ModalAddContacts CloseModal={CloseModal} isModalOpen={isModalOpen} />
                <div className='info-user'>
                    <div>
                        <span><IoMdContact /></span>
                        <h2>
                            {!userData?.data.name ? "Nenhum nome cadastrado" : userData?.data.name}
                        </h2>
                    </div>
                    <div>
                        <BellActive />
                        <button onClick={OpenModalEditUser}><PiGearThin /></button>
                        <ModalEditUser CloseModalEditUser={CloseModalEditUser} isModalEditUserOpen={isModalEditUserOpen} />
                        <button type='reset' onClick={() => {
                            localStorage.clear()
                        }}>Sair</button>
                    </div>
                </div>
            </Header>
            <Section className='section-contacts'>
                <h1>Contatos</h1>
                <ul>
                    {contacts.length <= 0 ? <li><h1>Sem contatos adicionados</h1></li> :
                        contacts.map((contact) => {
                            return (
                                <li key={contact.id}>
                                    <div>
                                        <span>{!contact.img_perfil ? <IoMdContact /> : contact.img_perfil}</span>
                                        <h2>{contact.name}</h2>
                                    </div>
                                    <div>
                                        <h3>{contact.number}</h3>
                                        <h3>{!contact.email ? "email não adicionado" : contact.email}</h3>
                                    </div>
                                    {!contact.infos ? <h3>informações extras não adicionadas</h3> : <h3>{contact.infos}</h3>}
                                    <div>
                                        <button onClick={() => {
                                            localStorage.setItem("contactId", contact.id)
                                            OpenModalEditContact()
                                        }}>{<BiSolidPencil />}</button>
                                        <button onClick={() => {
                                            localStorage.setItem("contactId", contact.id)
                                            DeleteContact()
                                        }}>{<BiTrash />}</button>
                                    </div>
                                    <ModalEditContacts CloseModalEditContact={CloseModalEditContact} isModalEditContactOpen={isModalEditContactOpen} />
                                    <ToastContainer
                                        position="top-right"
                                        autoClose={2000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme="dark"
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </Section>
        </Main>
    )
}