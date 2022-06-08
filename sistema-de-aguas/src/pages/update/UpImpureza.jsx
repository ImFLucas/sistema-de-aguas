import "../page-styles/PageStyles.css";
import { useState } from "react";

const UpImpureza = () => {
  const [Nome, setNome] = useState("");
  const [Idamostra, setIdamostra] = useState("");
  const [Unidade, setUnidade] = useState("");
  const [Tipo, setTipo] = useState("");
  const [Vtotal, setVtotal] = useState("");

  const update = async (e) => {
    e.preventDefault();

    const updateSetWhere = {
      update: "impureza",
      set: `unidade = '${Unidade}', tipo= '${Tipo}', vtotal= ${Vtotal}`,
      where: `nome = '${Nome}' and idamostra = ${Idamostra}`,
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
        <label className="Labels">Nome da impureza a ser atualizada</label>
        <input
          className="Inputs"
          type="text"
          required
          value={Nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label className="Labels">
          Rotulo da analise da impureza a ser atualizada
        </label>
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

        <button className="SendButton">ATUALIZAR</button>
      </form>
    </div>
  );
};

export default UpImpureza;
