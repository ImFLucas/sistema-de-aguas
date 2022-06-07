const selectFromLinhas = { select: "", from: "" };
const selectFromWhereLinhas = { select: "*", from: "", where: "" };
const deleteFromWhere = { deleteFrom: "", where: "" };
const insertIntoValues = { insertInto: "", values: "" };
const updateSetWhere = { update: "", set: "", where: "" };
const colunasRelatorio = [
  { heading: "Numero", value: "nserie" },
  { heading: "Mes", value: "mes" },
  { heading: "Ano", value: "ano" },
];

const colunasAnalise = [
  { heading: "Rotulo", value: "rotulo" },
  { heading: "Relaserie", value: "relaserie" },
  { heading: "Laboratorio", value: "laboratorio" },
  { heading: "Tecnico", value: "tecnico" },
  { heading: "Metodo", value: "metodo" },
];

const colunasAmostra = [
  { heading: "ID", value: "identificador" },
  { heading: "Rotulo da Analise", value: "anarotulo" },
  { heading: "Estado", value: "estado" },
  { heading: "Cidade", value: "cidade" },
  { heading: "Bairro", value: "bairro" },
  { heading: "Procedencia", value: "procedencia" },
];

const colunasImpureza = [
  { heading: "Nome", value: "nome" },
  { heading: "ID da amostra", value: "idamostra" },
  { heading: "Unidade", value: "unidade" },
  { heading: "Tipo", value: "tipo" },
  { heading: "Valor Total", value: "vtotal" },
];

const colunasPesquisa_1 = [
  { heading: "Mes", value: "mes" },
  { heading: "Ano", value: "ano" },
  { heading: "Cidade", value: "cidade" },
  { heading: "Procedencia", value: "procedencia" },
  { heading: "Nome", value: "nome" },
  { heading: "Unidade", value: "unidade" },
  { heading: "Valor Total", value: "vtotal" },
];

const colunasPesquisa_2 = [
  { heading: "Mes", value: "mes" },
  { heading: "Ano", value: "ano" },
  { heading: "Metodo", value: "metodo" },
  { heading: "Cidade", value: "cidade" },
  { heading: "Bairro", value: "bairro" },
  { heading: "Procedencia", value: "procedencia" },
];

const colunasPesquisa_3 = [
  { heading: "Laboratorio", value: "laboratorio" },
  { heading: "Mes", value: "mes" },
  { heading: "Ano", value: "ano" },
  { heading: "ID", value: "identificador" },
  { heading: "Cidade", value: "cidade" },
  { heading: "Procedencia", value: "procedencia" },
];
const colunasPesquisa_4 = [
  { heading: "Ano", value: "ano" },
  { heading: "Rotulo", value: "rotulo" },
  { heading: "Laboratorio", value: "laboratorio" },
  { heading: "Bairro", value: "bairro" },
  { heading: "Valor Total", value: "vtotal" },
];

module.exports = {
  selectFromLinhas,
  selectFromWhereLinhas,
  colunasRelatorio,
  colunasAnalise,
  colunasAmostra,
  colunasImpureza,
  insertIntoValues,
  colunasPesquisa_1,
  colunasPesquisa_2,
  colunasPesquisa_3,
  colunasPesquisa_4,
};
