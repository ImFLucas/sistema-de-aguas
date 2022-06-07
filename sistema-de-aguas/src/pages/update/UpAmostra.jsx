import "../page-styles/PageStyles.css";
import { useState } from "react";

const UpAmostra = () => {
  const [Identificador, setIdentificador] = useState("");
  const [Anarotulo, setAnarotulo] = useState("");
  const [Estado, setEstado] = useState("");
  const [Cidade, setCidade] = useState("");
  const [Bairro, setBairro] = useState("");
  const [Procedencia, setProcedencia] = useState("");

  const update = async (e) => {
    e.preventDefault();

    const updateSetWhere = {
      update: "amostra",
      set: `anarotulo=${Anarotulo}, estado='${Estado}', cidade='${Cidade}',bairro='${Bairro}', procedencia='${Procedencia}'`,
      where: `identificador=${Identificador}`,
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
        <label className="Labels">
          Identificador da amostra a ser atualizada
        </label>
        <input
          className="Inputs"
          type="number"
          required
          value={Identificador}
          onChange={(e) => setIdentificador(e.target.value)}
        />

        <label className="Labels">Rotulo da analise</label>
        <input
          className="Inputs"
          type="number"
          required
          value={Anarotulo}
          onChange={(e) => setAnarotulo(e.target.value)}
        />

        <label className="Labels">Estado</label>
        <input
          className="Inputs"
          type="text"
          required
          value={Estado}
          onChange={(e) => setEstado(e.target.value)}
        />

        <label className="Labels">Cidade</label>
        <input
          className="Inputs"
          type="text"
          required
          value={Cidade}
          onChange={(e) => setCidade(e.target.value)}
        />

        <label className="Labels">Bairro</label>
        <input
          className="Inputs"
          type="text"
          required
          value={Bairro}
          onChange={(e) => setBairro(e.target.value)}
        />

        <label className="Labels">Procedencia</label>
        <input
          className="Inputs"
          type="text"
          required
          value={Procedencia}
          onChange={(e) => setProcedencia(e.target.value)}
        />

        <button className="SendButton">ATUALIZAR</button>
      </form>
    </div>
  );
};

export default UpAmostra;
