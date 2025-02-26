export default function ListaPost(props) {

    const menu = props.postsProp
    return (
        <>
            <div className="container">
                <h1>Lista dei post</h1>
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
            </div>
        </>
    )
}