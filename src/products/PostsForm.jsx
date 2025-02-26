import { useState } from 'react';
// import navigate per navigazione programmatica dopo invio form
import { useNavigate } from "react-router-dom";
import axios from "axios";



const initialFormData = {
    name: "",
    image: "",
    tags: [],
};

const PostsForm = () => {

    const [formData, setFormData] = useState(initialFormData);

    // funzione di gestione delle info dei campi
    function handleFormData(e) {
        // gestione del value a seconda del tipo di input
        const value = e.target.title === "tags" ? e.target.value.split(",") : e.target.value;

        // setta tramite setState l'oggetto con le info prese dai campi del form
        setFormData((currentFormData) => ({
            ...currentFormData,
            [e.target.title]: value,
        }));
    }

    // utilizzo del navigate
    const navigate = useNavigate();

    // funzione di gestione dell'invio dell'intero form (tuue le info dei vari campi)
    function handleSubmit(e) {
        e.preventDefault();
        // chiamata verso la API in post con invio dati nuova post
        axios.post("http://localhost:3000/Posts", formData)
            .then(res => {
                navigate("/posts");
            }
            )
            .catch(err => console.log(err))
        setFormData(initialFormData);
    }


    return (
        <>
            <h1>questo e il form dei post</h1>

            <form id='formpost' action="#" onSubmit={handleSubmit}>
                {/* valore nome post */}
                <input
                    type="text"
                    name="name"
                    onChange={handleFormData}
                    value={formData.title}
                    placeholder='Nome post'
                />
                {/* valore immagine */}
                <input
                    type="text"
                    name="image"
                    onChange={handleFormData}
                    value={formData.image}
                    placeholder='Immagine post'
                />
                {/* valori ingredienti */}
                <input
                    type="text"
                    name="tags"
                    onChange={handleFormData}
                    value={formData.tags}
                    placeholder='Ingredienti post'
                />
                {/* bottone di invio info */}
                <button>Aggiungi</button>
            </form>
        </>
    )

}

export default PostsForm