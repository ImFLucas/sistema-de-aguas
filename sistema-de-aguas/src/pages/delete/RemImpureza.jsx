import "../page-styles/PageStyles.css";
import { useState } from "react";

const RemImpureza = () => {
  const [Nome, setNome] = useState("");
  const [Identificador, setIdentificador] = useState("");

  const remove = async (e) => {
    e.preventDefault();
    //prettier-ignore
    const deleteFromWhere = { deleteFrom: "impureza", where: `idamostra = ${Identificador} and nome = ${Nome}` };

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
        <label className="Labels">Nome da impureza a ser removida</label>
        <input
          className="Inputs"
          type="text"
          required
          value={Nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label className="Labels">
          Identificador da impureza a ser removida
        </label>
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

export default RemImpureza;
