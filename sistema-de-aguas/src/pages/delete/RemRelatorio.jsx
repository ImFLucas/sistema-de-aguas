import "../page-styles/PageStyles.css";
import { useState } from "react";

const RemRelatorio = () => {
  const [Numero, setNumero] = useState("");

  const remove = async (e) => {
    e.preventDefault();
    //prettier-ignore
    const deleteFromWhere = { deleteFrom: "relatorio", where: `nserie = ${Numero}` };

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
        <label className="Labels">Numero</label>
        <input
          className="Inputs"
          type="number"
          required
          value={Numero}
          onChange={(e) => setNumero(e.target.value)}
        />

        <button className="SendButton">REMOVER</button>
      </form>
    </div>
  );
};

export default RemRelatorio;
