import React from "react";
import Table from "../../components/Table";
import "../page-styles/PageStyles.css";
import { useState, useEffect } from "react";
import { selectFromLinhas, colunasAnalise } from "../../requests/Constants";
import { Link } from "react-router-dom";
import { FiPlusCircle, FiXCircle, FiRefreshCw } from "react-icons/fi";
import { FaMicroscope, FaNewspaper, FaFlask } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";

const Analises = () => {
  const [tab, setTab] = useState([]);

  selectFromLinhas.select = "*";
  selectFromLinhas.from = "analise";
  const getTabela = async (inp) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inp),
    };

    const temp = await fetch("http://localhost:1000/visao-geral", options);
    const resp = await temp.json();

    setTab(resp);
  };

  useEffect(() => {
    getTabela(selectFromLinhas);
  }, []);

  //prettier-ignore
  return (
    <div className="Caixa">
      <div className="Field">
      <nav className="NavOverview">
          <Link to="/relatorios" className="NavOverviewLink"><h3><FaNewspaper/> RELATORIOS</h3></Link>
          <Link to="/analises" className="NavOverviewLink"><h3><FaMicroscope/> ANALISES</h3></Link>
          <Link to="/amostras" className="NavOverviewLink"><h3><FaFlask/> AMOSTRAS</h3></Link>
          <Link to="/impurezas" className="NavOverviewLink"><h3><GiWaterDrop/> IMPUREZAS</h3></Link>
        </nav>
        <nav className="NavOps">
          <Link to="/analises/inserir" className="NavOpsLink"><h3><FiPlusCircle/> INSERIR</h3></Link>
          <Link to="/analises/remover" className="NavOpsLink"><h3><FiXCircle/> REMOVER</h3></Link>
          <Link to="/analises/atualizar" className="NavOpsLink"><h3><FiRefreshCw/> ATUALIZAR</h3></Link>
        </nav>
      </div>

      <div className="TableField">
        <Table linhas={tab} colunas={colunasAnalise} />
      </div>
    </div>
  );
};

export default Analises;
