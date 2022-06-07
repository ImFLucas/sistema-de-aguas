import React from "react";
import Table from "../../components/Table";
import "../page-styles/PageStyles.css";
import { useState, useEffect } from "react";
import { colunasPesquisa_4 } from "../../requests/Constants";
import { Link } from "react-router-dom";
import { FaSearchPlus } from "react-icons/fa";

const Pesquisa4 = () => {
  const [tab, setTab] = useState([]);

  const [AnoInicial, setAnoInicial] = useState("");
  const [AnoFinal, setAnoFinal] = useState("");
  const [ValorInicial, setValorInicial] = useState("");
  const [ValorFinal, setValorFinal] = useState("");
  const [Cidade, setCidade] = useState("");
  const [Impureza, setImpureza] = useState("");

  const pesquisa = {
    impureza: "ACIDEZ",
    cidade: "Itabira",
    valorFinal: 100,
    valorInicial: 1,
    anoInicial: 2010,
    anoFinal: 2010,
  };

  const getTabela = async (inp) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inp),
    };

    const temp = await fetch("http://localhost:1000/pesquisa-4", options);
    const resp = await temp.json();
    console.log(resp);
    setTab(resp);
  };

  const search = async (e) => {
    e.preventDefault();
    pesquisa.ValorFinal = ValorFinal;
    pesquisa.anoInicial = AnoInicial;
    pesquisa.anoFinal = AnoFinal;
    pesquisa.valorInicial = ValorInicial;
    pesquisa.valorFinal = ValorFinal;
    pesquisa.impureza = Impureza;
    getTabela(pesquisa);
  };

  useEffect(() => {
    getTabela(pesquisa);
  }, []);

  // prettier-ignore
  return (
    <div className="Caixa">
      <div className="Field">
        <form className="Forms" onSubmit={search}>
          <label className="Labels">Nome da impureza</label>
          <input
            className="Inputs"
            type="text"
            required
            value={Impureza}
            onChange={(e) => setImpureza(e.target.value)}
          />
          <label className="Labels">Nome da cidade</label>
          <input
            className="Inputs"
            type="text"
            required
            value={Cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
          <label className="Labels">Ano inicial</label>
          <input
            className="Inputs"
            type="number"
            required
            value={AnoInicial}
            onChange={(e) => setAnoInicial(e.target.value)}
          />
          <label className="Labels">Ano final</label>
          <input
            className="Inputs"
            type="number"
            required
            value={AnoFinal}
            onChange={(e) => setAnoFinal(e.target.value)}
          />

          <label className="Labels">Valor inicial</label>
          <input
            className="Inputs"
            type="number"
            required
            value={ValorInicial}
            onChange={(e) => setValorInicial(e.target.value)}
          />
          <label className="Labels">Valor final</label>
          <input
            className="Inputs"
            type="number"
            required
            value={ValorFinal}
            onChange={(e) => setValorFinal(e.target.value)}
          />

          <button className="SendButton">PESQUISAR</button>
        </form>
        <nav className="NavOps">
          <Link to="/pesquisa1" className="NavOverviewLink"><h3><FaSearchPlus/> IMPUREZAS DETECTADAS EM UM PERIODO</h3></Link>
          <Link to="/pesquisa2" className="NavOverviewLink"><h3><FaSearchPlus/> PROCEDÊNCIA E MÉTODO DE UMA LOCALIDADE POR PERÍODO</h3></Link>
          <Link to="/pesquisa3" className="NavOverviewLink"><h3><FaSearchPlus/> LABORATORIOS QUE ANALISARAM EM UM PERÍODO </h3></Link>
          <Link to="/pesquisa4" className="NavOverviewLink"><h3><FaSearchPlus/> LOCAIS COM NÍVEIS DE IMPUREZAS</h3></Link>
        </nav>
      </div>

      <div className="TableField">
        <Table linhas={tab} colunas={colunasPesquisa_4} />
      </div>
    </div>
  );
};

export default Pesquisa4;
