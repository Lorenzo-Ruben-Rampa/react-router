// Elementi gestione rotte
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import HomePage from "./pages/Homepage";
import ChiSiamo from "./pages/ChiSiamo";
import ListaPost from "./pages/ListaPost";
import PostPage from "./pages/PostPage";
import PostCreatePage from "./pages/PostCreatePage";
import Contatti from "./pages/Contatti";
import PostDetailPage from "./pages/PostDetailPage";
import NotFound from "./pages/NotFound";


// Layout
import DefaultLayout from "./layout/DefaultLayout";

export default function App() {
  // Array iniziale dati
  const menu = [
    {
      id: 1,
      title: "Ciambellone",
      content:
        "Sarà che una volta le cose erano più semplici, ma erano anche molto buone. Come le crostate, i biscotti o il ciambellone che la nonna preparava anche all'ultimo sapendo che sareste passati per la merenda: uova, zucchero e farina. Niente di più basic ma che tra le sue mani, mescolando e infornando, diventava una delle prelibatezze per accompagnare il succo di frutta al pomeriggio o il latte e caffè al mattino. Ecco la nostra ricetta del ciambellone a quale atmosfera si ispira, quella di casa e genuinità: con una manciata di scorze di limone o di arancia e una spolverata di zucchero a velo renderete questa soffice delizia profumata e invitante. E per una volta sarà la nonna a farvi i complimenti per aver preparato un morbido ciambellone, così buono che non passa mai di moda!",
      image: "/imgs/posts/ciambellone.jpeg",
      tags: ["Dolci", "Torte", "Ricette vegetariane", "Ricette al forno"],
    },
    {
      id: 2,
      title: "Cracker alla barbabietola",
      content: `I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. Queste sfogliette dal colore brillante non passeranno inosservate nel vostro cestino del pane e arricchiranno la tavola con il loro gusto unico e accattivante. I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola. Venite a scoprire il nostro mix di semi e cereali per realizzare l'impasto e divertitevi a sperimentare nuove ricette di cracker variando i semi, le farine e le spezie per gusti sempre nuovi, ecco qualche idea:
              Cracker di farro
              Cracker di lupini
              Cracker allo zafferano
              Cracker ai semi`,
      image: "/imgs/posts/cracker_barbabietola.jpeg",
      tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
    },
    {
      id: 3,
      title: "Pasta barbabietola e gorgonzola",
      content: `La nostra ricetta della pasta barbabietola e gorgonzola vuole ricreare in questo primo piatto un abbinamento appetitoso, già proposto con la torta salata alla barbabietola! Per un pranzo veloce ma gustoso, per chi ama giocare con consistenze e colori naturali in cucina, questa pasta è perfetta! La dolcezza della barbabietola smorza il gusto deciso che caratterizza questo formaggio erborinato molto amato, un'abbinata vincente e molto gustosa. Provate un nuovo condimento per la vostra pasta e sperimentate altre sfiziose varianti:
            Pasta con barbabietola e pecorino
            Gnocchi di barbabietola
            Tagliatelle alla barbabietola con asparagi`,
      image: "/imgs/posts/pasta_barbabietola.jpeg",
      tags: ["Primi piatti", "Ricette vegetariane"],
    }
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={< HomePage />} />
          <Route path="/ChiSiamo" element={< ChiSiamo />} />
          <Route path="/ListaPost" element={< ListaPost postsProp={menu} />} />
          <Route path="/Contatti" element={< Contatti />} />
          <Route path="/posts" element={<Navigate to="/Post" />} />
          <Route path="/Post">
            <Route index element={< PostPage />} />
            <Route path="CreatePost" element={< PostCreatePage />} />
            <Route path=":id" element={< PostDetailPage />} />
          </Route>
          {/* Rotta dell'error 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}