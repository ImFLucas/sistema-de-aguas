import React from "react";
import "../styles/App.css";

const Table = ({ linhas, colunas }) => {
  return (
    <table className="Tabela">
      <thead>
        <tr key={Math.random()}>
          {colunas.map((item, i) => (
            <HeadItem key={Math.random()} item={item} />
          ))}
        </tr>
      </thead>
      <tbody>
        {linhas.map((item, i) => (
          <RowItem key={Math.random()} item={item} colunas={colunas} />
        ))}
      </tbody>
    </table>
  );
};

const HeadItem = ({ item }) => {
  return (
    <th className="Coluna" key={item.heading}>
      {" "}
      {item.heading}{" "}
    </th>
  );
};

const RowItem = ({ item, colunas }) => {
  return (
    <tr className="Linha">
      {colunas.map((colitem, i) => {
        return <td key={colitem.value}>{item[`${colitem.value}`]}</td>;
      })}
    </tr>
  );
};

export default Table;
