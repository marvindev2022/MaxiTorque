import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import localization from "./../../assets/location.png";
import call from "./../../assets/call.png";
import mail from "./../../assets/mail.png";
import "./styles.css";
import { useState } from "react";
const defaultForm = {
    name: "",
    email: "",
    description: "",
    commit: "",
};
function Contact() {
    const [formState, setFormState] = useState(defaultForm);
    function handleSubmit(event) {
        event.preventDefault();
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    return (_jsxs("div", { className: "container-contact", children: [_jsx("h1", { children: "Entre em contato " }), _jsx("h2", { children: "Nosso contatpo" }), _jsxs("div", { className: "section-data-contact", style: { display: "flex" }, children: [_jsxs("div", { style: { display: "flex" }, className: "container-span-contact", children: [_jsx("img", { className: "img-contact", src: localization, alt: "localiza\u00E7\u00E3o" }), _jsxs("span", { children: [_jsx("h2", { className: "h2", children: "Nosso endere\u00E7o" }), _jsx("p", { children: "Rua feliciano Sodr\u00E9 N\u00B0 528 - Galp\u00E3o" })] })] }), _jsxs("div", { style: { display: "flex" }, className: "container-span-contact", children: [_jsx("img", { className: "img-contact", src: call, alt: "localiza\u00E7\u00E3o" }), _jsxs("span", { children: [_jsx("h2", { className: "h2", children: "Nosso Contato" }), _jsx("p", { children: "(21) 9 7935-1107" })] })] }), _jsxs("div", { style: { display: "flex" }, className: "container-span-contact", children: [_jsx("img", { className: "img-contact", src: mail, alt: "localiza\u00E7\u00E3o" }), _jsxs("span", { children: [_jsx("h2", { className: "h2", children: "Nosso E-mail" }), _jsx("p", { children: "maxitorque1@gmail.com" })] })] })] }), _jsx("div", { className: "container-form", children: _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "container-input", children: [_jsx("label", { children: _jsx("input", { className: "input-500px", name: "name", value: formState.name, onChange: handleChange, placeholder: "Nome *" }) }), _jsx("label", { children: _jsx("input", { className: "input-500px", name: "email", value: formState.email, onChange: handleChange, placeholder: "E-mail*" }) })] }), _jsx("div", { children: _jsx("label", { children: _jsx("input", { className: "input-1030", name: "description", value: formState.description, onChange: handleChange, placeholder: "Assunto" }) }) }), _jsx("div", { children: _jsxs("label", { children: [_jsx("textarea", { name: "commit", value: formState.commit, onChange: handleChange }), "Por favor escreva sua menssagem"] }) }), _jsx("button", { type: "submit", children: "Enviar" })] }) })] }));
}
export default Contact;
