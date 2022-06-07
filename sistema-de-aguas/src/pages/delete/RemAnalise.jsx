import "../page-styles/PageStyles.css";
import { useState } from "react";

const RemAnalise = () => {
  const [Rotulo, setRotulo] = useState("");

  const remove = async (e) => {
    e.preventDefault();
    //prettier-ignore
    const deleteFromWhere = { deleteFrom: "analise", where: `rotulo = ${Rotulo}` };

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
        <label className="Labels">Rotulo</label>
        <input
          className="Inputs"
          type="number"
          required
          value={Rotulo}
          onChange={(e) => setRotulo(e.target.value)}
        />

        <button className="SendButton">REMOVER</button>
      </form>
    </div>
  );
};

export default RemAnalise;
