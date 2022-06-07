import "../page-styles/PageStyles.css";
import { useState } from "react";

const InsAnalise = () => {
  const [Rotulo, setRotulo] = useState("");
  const [Relaserie, setRelaserie] = useState("");
  const [Laboratorio, setLaboratorio] = useState("");
  const [Tecnico, setTecnico] = useState("");
  const [Metodo, setMetodo] = useState("");

  const insertion = async (e) => {
    e.preventDefault();

    const insertIntoValues = {
      insertInto: "analise",
      rotulo: Rotulo,
      relaserie: Relaserie,
      laboratorio: Laboratorio,
      tecnico: Tecnico,
      metodo: Metodo,
    };

    console.log(insertIntoValues);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(insertIntoValues),
    };

    await fetch("http://localhost:1000/inserir-analise", options);
  };

  return (
    <div className="FormDiv">
      <form className="Forms" onSubmit={insertion}>
        <label className="Labels">Rotulo</label>
        <input
          className="Inputs"
          type="number"
          required
          value={Rotulo}
          onChange={(e) => setRotulo(e.target.value)}
        />

        <label className="Labels">Serie do relatorio</label>
        <input
          className="Inputs"
          type="number"
          required
          value={Relaserie}
          onChange={(e) => setRelaserie(e.target.value)}
        />

        <label className="Labels">Laboratorio</label>
        <input
          className="Inputs"
          type="text"
          required
          value={Laboratorio}
          onChange={(e) => setLaboratorio(e.target.value)}
        />

        <label className="Labels">Tecnico</label>
        <input
          className="Inputs"
          type="text"
          required
          value={Tecnico}
          onChange={(e) => setTecnico(e.target.value)}
        />

        <label className="Labels">Metodo</label>
        <input
          className="Inputs"
          type="text"
          required
          value={Metodo}
          onChange={(e) => setMetodo(e.target.value)}
        />

        <button className="SendButton">ADICIONAR</button>
      </form>
    </div>
  );
};

export default InsAnalise;
