import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { CadastroStyles } from "./stylesCadastro";
import { CadastroData } from "./validator";

// interface FormData {
//     email: string;
//     password: string;
//     name: string;
//     number: string;
// }

export const Cadastro: React.FC = () => {
    const { newRegister, navigate } = useAuth();
    const [formData, setFormData] = useState<CadastroData>({
        email: "",
        password: "",
        name: "",
        number: "",
    });

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        newRegister(formData)
    };

    return (
        <CadastroStyles>
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Digite seu email aqui..."
                />
                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    placeholder="Digite sua senha aqui..."
                />
                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Digite seu nome aqui..."
                />
                <label htmlFor="number">Numero</label>
                <input
                    type="number"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    required
                    placeholder="Digite seu numero aqui..."
                />

                <button type="submit" onSubmit={() => handleInputChange}>Cadastrar</button>
            </form>

            <h2>Voltar para a área de <span onClick={() => navigate("/")}>Login</span></h2>
            <button onClick={() => navigate("/")}>Login</button>
        </CadastroStyles>
    );
};
