import "../page-styles/PageStyles.css";
import { useState } from "react";

const UpAnalise = () => {
  const [Rotulo, setRotulo] = useState("");
  const [Relaserie, setRelaserie] = useState("");
  const [Laboratorio, setLaboratorio] = useState("");
  const [Tecnico, setTecnico] = useState("");
  const [Metodo, setMetodo] = useState("");

  const update = async (e) => {
    e.preventDefault();

    const updateSetWhere = {
      update: "analise",
      set: `relaserie= ${Relaserie}, laboratorio ='${Laboratorio}',tecnico= '${Tecnico}', metodo= '${Metodo}'`,
      where: `rotulo = ${Rotulo}`,
    };

    console.log(updateSetWhere);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateSetWhere),
    };

    await fetch("http://localhost:1000/atualizar", options);
  };

  return (
    <div className="FormDiv">
      <form className="Forms" onSubmit={update}>
        <label className="Labels">Rotulo da analise a ser atualizada</label>
        <input
          className="Inputs"
          type="number"
          required
          value={Rotulo}
          onChange={(e) => setRotulo(e.target.value)}
        />

        <label className="Labels">Serie do relatorio a ser atualizado</label>
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

        <button className="SendButton">ATUALIZAR</button>
      </form>
    </div>
  );
};

export default UpAnalise;
