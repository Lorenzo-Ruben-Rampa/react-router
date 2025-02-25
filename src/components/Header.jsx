// importiamo componente Navbar
import Navbar from "./Navbar.jsx";

export default function Header(props) {

    // dati ricavati per la gestione dei link della Navbar
    const links = [
        { id: 1, text: 'Home', url: '/', current: true },
        { id: 2, text: 'ChiSiamo', url: '/ChiSiamo', current: false },
        { id: 3, text: 'ListaPost', url: '/ListaPost', current: false },
    ];

    return (
        <header>
            <h1>Il mio blog</h1>
            <Navbar linksProp={links} />
        </header>
    );
}