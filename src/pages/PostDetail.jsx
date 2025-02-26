import axios from "axios";
import { useState, useEffect } from 'react';
// import della parte di ritorno parametro rotta FE
import { useParams } from "react-router-dom";
// aggiunta  uso link per paginazione (prev next dettagli)
import { Link } from "react-router-dom";



export default function PostsDetail() {

    // destructuring per ritornare l'id (proprietà id dell'oggetto param)
    const { id } = useParams();

    //  settaggio dello stato del componente
    const [post, setpost] = useState({});

    // funzione di chiamata verso la rotta store
    function fetchPost() {
        axios.get(`http://localhost:3000/Posts/${id}`)
            .then(res => setpost(res.data))
            .catch(err => console.log(err))
    }

    useEffect(
        () => fetchPost(),
        [id])


    return (
        <>
            <nav>
                <Link to={`/post/${parseInt(id) - 1}`}>Prev</Link>
                <Link to={`/post/${parseInt(id) + 1}`}>Next</Link>
            </nav>
            <h2>Ciao sono la pagina di dettaglio della post {post.title}</h2>
            <img src={post.image} alt={post.title} />
        </>
    );
}
