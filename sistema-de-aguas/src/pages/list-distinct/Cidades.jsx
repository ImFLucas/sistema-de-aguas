import React from "react";
import Table from "../../components/Table";
import "../page-styles/PageStyles.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegClipboard } from "react-icons/fa";

const Cidades = () => {
  const [tab, setTab] = useState([]);

  const selectDistinctFrom = { selectDistinct: "cidade", from: "amostra" };
  const colunas = [{ heading: "Cidades", value: "cidade" }];

  const getTabela = async (inp) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inp),
    };

    const temp = await fetch(
      "http://localhost:1000/valores-presentes",
      options
    );
    const resp = await temp.json();
    setTab(resp);
  };
  useEffect(() => {
    getTabela(selectDistinctFrom);
  }, []);

  //prettier-ignore
  return (
    <div className="Caixa">
      <div className="Field">
      <nav className="NavOps2">
          <Link to="/anos" className="NavOverviewLink"><h3><FaRegClipboard/> ANOS</h3></Link>
          <Link to="/laboratorios" className="NavOverviewLink"><h3><FaRegClipboard/> LABORATÓRIOS</h3></Link>
          <Link to="/tecnicos" className="NavOverviewLink"><h3><FaRegClipboard/> TÉCNICOS</h3></Link>
          <Link to="/metodos" className="NavOverviewLink"><h3><FaRegClipboard/> MÉTODOS</h3></Link>
          <Link to="/estado" className="NavOverviewLink"><h3><FaRegClipboard/> ESTADO</h3></Link>
          <Link to="/cidades" className="NavOverviewLink"><h3><FaRegClipboard/> CIDADES</h3></Link>
          <Link to="/bairros" className="NavOverviewLink"><h3><FaRegClipboard/> BAIRROS</h3></Link>
          <Link to="/procedencias" className="NavOverviewLink"><h3><FaRegClipboard/> PROCEDENCIAS</h3></Link>
          <Link to="/impurezas-registradas" className="NavOverviewLink"><h3><FaRegClipboard/> IMPUREZAS REGISTRADAS</h3></Link>
          <Link to="/tipos" className="NavOverviewLink"><h3><FaRegClipboard/> TIPOS DE IMPUREZAS</h3></Link>
        </nav>
      </div>
      <div className="TableField">
        <Table linhas={tab} colunas={colunas} />
      </div>
    </div>
  );
};
export default Cidades;
