import "../page-styles/PageStyles.css";
import { useState } from "react";

const InsImpureza = () => {
  const [Nome, setNome] = useState("");
  const [Idamostra, setIdamostra] = useState("");
  const [Unidade, setUnidade] = useState("");
  const [Tipo, setTipo] = useState("");
  const [Vtotal, setVtotal] = useState("");

  const insertion = async (e) => {
    e.preventDefault();

    const insertIntoValues = {
      insertInto: "amostra",
      nome: Nome,
      idamostra: Idamostra,
      unidade: Unidade,
      tipo: Tipo,
      vtotal: Vtotal,
    };

    console.log(insertIntoValues);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(insertIntoValues),
    };

    await fetch("http://localhost:1000/inserir-impureza", options);
  };

  return (
    <div className="FormDiv">
      <form className="Forms" onSubmit={insertion}>
        <label className="Labels">Nome da impureza</label>
        <input
          className="Inputs"
          type="text"
          required
          value={Nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label className="Labels">Rotulo da analise</label>
        <input
          className="Inputs"
          type="number"
          required
          value={Idamostra}
          onChange={(e) => setIdamostra(e.target.value)}
        />

        <label className="Labels">Unidade</label>
        <input
          className="Inputs"
          type="text"
          required
          value={Unidade}
          onChange={(e) => setUnidade(e.target.value)}
        />

        <label className="Labels">Tipo</label>
        <input
          className="Inputs"
          type="text"
          required
          value={Tipo}
          onChange={(e) => setTipo(e.target.value)}
        />

        <label className="Labels">Valor total</label>
        <input
          className="Inputs"
          type="number"
          required
          value={Vtotal}
          onChange={(e) => setVtotal(e.target.value)}
        />

        <button className="SendButton">ADICIONAR</button>
      </form>
    </div>
  );
};

export default InsImpureza;
