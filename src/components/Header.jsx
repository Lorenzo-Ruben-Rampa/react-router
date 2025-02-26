// importiamo componente Navbar
import Navbar from "./Navbar.jsx";

export default function Header(props) {

    // dati ricavati per la gestione dei link della Navbar
    const links = [
        { id: 1, text: 'Home', url: '/', current: true },
        { id: 2, text: 'Chi Siamo', url: '/chisiamo', current: false },
        // { id: 3, text: 'Lista Post', url: '/listapost', current: false },
        { id: 3, text: 'Contatti', url: '/contatti', current: false },
        { id: 4, text: 'Post', url: '/Post', current: false },
        { id: 5, text: 'Add Post', url: '/Post/CreatePost', current: false },
    ];

    return (
        <header>
            <h1>Il mio blog</h1>
            <Navbar linksProp={links} />
        </header>
    );
}