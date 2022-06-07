import "../page-styles/PageStyles.css";
import { useState } from "react";

const InsRelatorio = () => {
  const [Numero, setNumero] = useState("");
  const [Mes, setMes] = useState("");
  const [Ano, setAno] = useState("");

  const insertion = async (e) => {
    e.preventDefault();
    //prettier-ignore
    const insertIntoValues = {
      insertInto: "relatorio",
      numero: Numero,
      mes: Mes,
      ano: Ano,
    };

    console.log(insertIntoValues);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(insertIntoValues),
    };

    await fetch("http://localhost:1000/inserir-relatorio", options);
  };

  return (
    <div className="FormDiv">
      <form className="Forms" onSubmit={insertion}>
        <label className="Labels">Numero</label>
        <input
          className="Inputs"
          type="number"
          required
          value={Numero}
          onChange={(e) => setNumero(e.target.value)}
        />

        <label className="Labels">Mes</label>
        <input
          className="Inputs"
          type="number"
          required
          value={Mes}
          onChange={(e) => setMes(e.target.value)}
        />

        <label className="Labels">Ano</label>
        <input
          className="Inputs"
          type="number"
          required
          value={Ano}
          onChange={(e) => setAno(e.target.value)}
        />

        <button className="SendButton">ADICIONAR</button>
      </form>
    </div>
  );
};

export default InsRelatorio;
