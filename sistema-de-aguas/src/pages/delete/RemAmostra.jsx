import "../page-styles/PageStyles.css";
import { useState } from "react";

const RemAmostra = () => {
  const [Identificador, setIdentificador] = useState("");

  const remove = async (e) => {
    e.preventDefault();
    //prettier-ignore
    const deleteFromWhere = { deleteFrom: "amostra", where: `identificador = ${Identificador}` };

    console.log(deleteFromWhere);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deleteFromWhere),
    };

    await fetch("http://localhost:1000/remover", options);
  };

  return (
    <div className="FormDiv">
      <form className="Forms" onSubmit={remove}>
        <label className="Labels">Identificador</label>
        <input
          className="Inputs"
          type="number"
          required
          value={Identificador}
          onChange={(e) => setIdentificador(e.target.value)}
        />

        <button className="SendButton">REMOVER</button>
      </form>
    </div>
  );
};

export default RemAmostra;
