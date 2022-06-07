import "../styles/App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Relatorios from "../pages/overview/Relatorios";
import InsRelatorio from "../pages/insert/InsRelatorio";
import InsAnalise from "../pages/insert/InsAnalise";
import InsAmostra from "../pages/insert/InsAmostra";
import InsImpureza from "../pages/insert/InsImpureza";
import RemRelatorio from "../pages/delete/RemRelatorio";
import RemAnalise from "../pages/delete/RemAnalise";
import RemAmostra from "../pages/delete/RemAnalise";
import RemImpureza from "../pages/delete/RemImpureza";
import UpRelatorio from "../pages/update/UpRelatorio";
import UpAnalise from "../pages/update/UpAnalise";
import UpAmostra from "../pages/update/UpAmostra";
import UpImpureza from "../pages/update/UpImpureza";
import Pesquisa1 from "../pages/relevant/Pesquisa-1";
import Pesquisa2 from "../pages/relevant/Pesquisa-2";
import Pesquisa3 from "../pages/relevant/Pesquisa-3";
import Analises from "../pages/overview/Analises";
import Amostras from "../pages/overview/Amostras";
import Impurezas from "../pages/overview/Impurezas";
import Introducao from "../pages/overview/Introducao";
import Navbar from "./Navbar";
import Anos from "../pages/list-distinct/Anos";
import Laboratorios from "../pages/list-distinct/Laboratorios";
import Tecnicos from "../pages/list-distinct/Tecnicos";
import Metodos from "../pages/list-distinct/Metodos";
import Estados from "../pages/list-distinct/Estado";
import Cidades from "../pages/list-distinct/Cidades";
import Bairros from "../pages/list-distinct/Bairros";
import Procedencias from "../pages/list-distinct/Procedencias";
import TiposDeImpurezas from "../pages/list-distinct/TiposDeImpurezas";
import ImpurezasRegistradas from "../pages/list-distinct/ImpurezasRegistradas";
import Pesquisa4 from "../pages/relevant/Pesquisa-4";

function App() {
  // prettier-ignore
  return (
    <Router>
      <div>
        <Navbar />
        <div className="Conteudo">
          <Switch>
            <Route exact path="/" element={<Introducao />} />
            <Route exact path="/relatorios" element={<Relatorios />} />
            <Route exact path="/analises" element={<Analises />} />
            <Route exact path="/amostras" element={<Amostras />} />
            <Route exact path="/impurezas" element={<Impurezas />} />
            <Route exact path="/relatorios/inserir"element={<InsRelatorio />} />
            <Route exact path="/analises/inserir" element={<InsAnalise />} />
            <Route exact path="/amostras/inserir" element={<InsAmostra />} />
            <Route exact path="/impurezas/inserir" element={<InsImpureza />} />

            <Route exact path="/relatorios/remover"element={<RemRelatorio />}/>
            <Route exact path="/analises/remover" element={<RemAnalise />} />
            <Route exact path="/amostras/remover" element={<RemAmostra />} />
            <Route exact path="/impurezas/remover" element={<RemImpureza />} />

            <Route exact path="/relatorios/atualizar"element={<UpRelatorio />}/>
            <Route exact path="/analises/atualizar" element={<UpAnalise />} />
            <Route exact path="/amostras/atualizar" element={<UpAmostra />} />
            <Route exact path="/impurezas/atualizar" element={<UpImpureza />} />

            <Route exact path="/pesquisa1" element={<Pesquisa1 />} />
            <Route exact path="/pesquisa2" element={<Pesquisa2 />} />
            <Route exact path="/pesquisa3" element={<Pesquisa3 />} />
            <Route exact path="/pesquisa4" element={<Pesquisa4 />} />

            <Route exact path="/anos" element={<Anos />}/>
            <Route exact path="/laboratorios" element={<Laboratorios />}/>
            <Route exact path="/tecnicos" element={<Tecnicos />}/>
            <Route exact path="/metodos" element={<Metodos />}/>
            <Route exact path="/estado" element={<Estados />}/>
            <Route exact path="/cidades" element={<Cidades />}/>
            <Route exact path="/bairros" element={<Bairros />}/>
            <Route exact path="/procedencias" element={<Procedencias />}/>
            <Route exact path="/impurezas-registradas" element={<ImpurezasRegistradas />}/>
            <Route exact path="/tipos" element={<TiposDeImpurezas />}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
