// export default function ListaPost(props) {

// const menu = props.postsProp
// return (
//     <>
//         <div className="container">
//             <h1>Lista dei post</h1>
{/* <ul>
                    {menu.map((post) => (
                        <li
                            key={post.id}>
                            <h2>{post.title}</h2>
                            <p className="corsive">Tag: {post.tags.join(", ")}</p>
                            <div className="img-container"><img src={post.image} /></div>
                            <p className="content">{post.content}</p>
                        </li>
                    ))}
                </ul> */}
//             </div>
//         </>
//     )
// }

import { useState, useEffect } from 'react';
import axios from "axios";
// aggiunta per uso link in listato (per dettaglio Post)
import { Link } from "react-router-dom";

const ListaPost = () => {

    // utilizzo dello useState per la gestione dei data (array degli oggetti Post)
    const [menu, setMenu] = useState([]);


    // funzione di gestione chiamata all'API
    function fetchPosts() {
        axios.get("http://localhost:3000/Posts")
            .then((res) =>
                setMenu(res.data)
                // console.log(res.data)
            )
    }

    // richiamo la funzione di richiesta dati al caricamento del componente
    // fetchPosts();
    // Solo al primo rendering
    useEffect(fetchPosts, []);



    // funzione gestione cancellazione Post
    function deletePost(idPost) {
        // creiamo il nuovo array da sostituire allo state menu
        const updatePosts = menu.filter((Post) => {
            return Post.id !== idPost;
        })

        // chiamata ad API sulla rotta di delete
        axios.delete(`http://localhost:3000/Posts/${idPost}`)
            .then(res =>
                console.log(res),
                // lo sostituiamo anche nel FE
                setMenu(updatePosts)
            )
            .catch(err => console.log(err))


    }

    return (
        <>

            {
                menu.map((Post) => (
                    <div className='PostItem' key={Post.id}>
                        <h2>{Post.title}</h2>
                        <img className="centered mini" src={Post.image} alt={Post.title} />
                        <p className="centered">{Post.tags.join(", ")}</p>
                        <Link to={`/post/${Post.id}`} className="centered">Vai al dettaglio</Link>
                        <br />
                        <button onClick={() => deletePost(Post.id)} className="centered">
                            Cancella
                        </button>
                    </div>
                ))


            }
        </>
    )

}

export default ListaPost