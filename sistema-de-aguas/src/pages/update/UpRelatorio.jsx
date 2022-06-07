import "../page-styles/PageStyles.css";
import { useState } from "react";

const UpRelatorio = () => {
  const [Numero, setNumero] = useState("");
  const [Mes, setMes] = useState("");
  const [Ano, setAno] = useState("");

  const update = async (e) => {
    e.preventDefault();
    //prettier-ignore
    const updateSetWhere = {
      update: "relatorio",
      set: ` mes = ${Mes}, ano = ${Ano}`,
      where: `nserie = ${Numero}`,
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

        <button className="SendButton">ATUALIZAR</button>
      </form>
    </div>
  );
};

export default UpRelatorio;
