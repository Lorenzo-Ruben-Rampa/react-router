export default function Homepage() {
    return (
        <>
            <section id="home">
                <div>
                    <h1>Benvenuti nel Mio Blog di Pane e Dolci</h1>
                    <p className="intro">"In questo blog esploreremo insieme le ricette di dolci tipici e pietanze a base di pane, due elementi fondamentali della cucina tradizionale italiana. Ogni post sarà un viaggio attraverso i sapori e le tradizioni culinarie, dove impareremo a conoscere non solo le tecniche di preparazione, ma anche le storie che ogni piatto racconta. Scopriremo insieme le diverse varianti regionali e le curiosità che rendono unici questi piatti, dal nord al sud del paese. Che si tratti di dolci preparati in occasioni speciali o di pane cotto al forno con ingredienti semplici, ogni ricetta avrà una sua tradizione da raccontare. Ti invito a seguirmi in questa avventura gastronomica, dove ogni piatto ci permetterà di riscoprire la cultura e la passione che si celano dietro ogni forno..</p>
                    <div className="posts">
                        <article className="post">
                            <h2 className="post-title">I Dolci Tradizionali Italiani</h2>
                            <p className="post-excerpt">
                                La pasticceria italiana è famosa per i suoi dolci che raccontano storie di tradizione e creatività. In questo post esploreremo alcuni dei dolci più amati, come il tiramisù, la cassata e la pastiera napoletana.
                            </p>
                            <img src="../public/imgs/posts/wallpaper-desserts.jgp" alt="Dolci Tipici Italiani" className="post-image" />
                            <a href="#dolci" className="read-more">Leggi di più</a>
                        </article>
                        <article className="post">
                            <h2 className="post-title">Il Pane nella Cucina Italiana</h2>
                            <p className="post-excerpt">
                                Il pane è uno degli alimenti più antichi e versatili della cucina italiana. In questo post scopriremo le varietà regionali, dalle focacce liguri alle pagnotte toscane, fino alla famosa pizza.
                            </p>
                            <img src="../public/imgs/posts/pane-toscano.jpg" alt="Pane Toscano" className="post-image" />
                            <a href="#pane" className="read-more">Leggi di più</a>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}
