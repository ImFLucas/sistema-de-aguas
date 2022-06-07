const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db");

app.use(cors());
app.use(express.json());

db.connect();

app.listen(1000, () => {
  console.log("Conectou na porta 1000");
});

// Recuperar tabela
app.post("/valores-presentes", async (req, res) => {
  try {
    const x = await req.body;
    const y = `SELECT DISTINCT ${x.selectDistinct} FROM ${x.from}`;
    const temp = await db.query(y.toString());

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(temp.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

app.post("/visao-geral", async (req, res) => {
  try {
    const x = await req.body;
    const y = `SELECT ${x.select} FROM ${x.from}`;

    const temp = await db.query(y.toString());

    res.status(200).json(temp.rows);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

//--------------------------------Inserir------------------------------------------------
app.post("/inserir-relatorio", async (req, res) => {
  try {
    const x = await req.body;
    const y = `INSERT INTO ${x.insertInto} VALUES (${x.numero}, ${x.mes}, ${x.ano})`;
    const temp = await db.query(y.toString());

    //console.table(temp.rows);
    console.log("Inseriu");
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

app.post("/inserir-analise", async (req, res) => {
  try {
    const x = await req.body;
    const y = `INSERT INTO ${x.insertInto} VALUES (${x.rotulo}, ${x.relaserie}, \'${x.laboratorio}\', \'${x.tecnico}\', \'${x.metodo}\') `;
    console.log(y);

    const temp = await db.query(y.toString());

    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

app.post("/inserir-amostra", async (req, res) => {
  try {
    const x = await req.body;
    const y = `INSERT INTO ${x.insertInto} VALUES (${x.identificador}, ${x.anarotulo}, \'${x.estado}\', \'${x.cidade}\', \'${x.bairro})\', \'${x.procedencia}\') `;
    console.log(y);
    const temp = await db.query(y.toString());

    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

app.post("/inserir-impureza", async (req, res) => {
  try {
    const x = await req.body;
    const y = `INSERT INTO ${x.insertInto} VALUES (\'${x.nome}\', ${x.idamostra}, \'${x.unidade}\', \'${x.tipo}\', ${x.vtotal})`;
    console.log(y);
    const temp = await db.query(y.toString());

    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});
//--------------------------------------------------------------------------------

app.post("/remover", async (req, res) => {
  try {
    const x = await req.body;
    const y = `DELETE FROM ${x.deleteFrom} WHERE ${x.where}`;

    const temp = await db.query(y.toString());

    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

app.post("/atualizar", async (req, res) => {
  try {
    const x = await req.body;
    const y = `UPDATE ${x.update} SET ${x.set} WHERE ${x.where}`;

    const temp = await db.query(y.toString());

    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

app.post("/pesquisa-1", async (req, res) => {
  try {
    const x = await req.body;
    const y = `SELECT R.mes, R.ano, AM.cidade, AM.procedencia, IMP.nome,IMP.unidade, IMP.vtotal 
    FROM relatorio R, amostra AM, analise AN, impureza IMP
    WHERE R.nserie = AN.relaserie AND AN.rotulo = AM.anarotulo AND AM.identificador = IMP.idamostra AND R.ano between ${x.anoInicial} AND ${x.anoFinal}
    ORDER BY R.ano;
    `;
    const temp = await db.query(y.toString());
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(temp.rows);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

app.post("/pesquisa-2", async (req, res) => {
  try {
    const x = await req.body;
    const y = `select R.mes, R.ano, AN.metodo, AM.cidade, AM.bairro, AM.procedencia
    from relatorio R, amostra AM, analise AN
    Where R.nserie = AN.relaserie and AN.rotulo = AM.anarotulo and R.ano between ${x.anoInicial} AND ${x.anoFinal}
    order by R.ano;
    `;
    const temp = await db.query(y.toString());
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(temp.rows);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

app.post("/pesquisa-3", async (req, res) => {
  try {
    const x = await req.body;
    const y = `select An.laboratorio, R.mes, R.ano, AM.identificador, AM.cidade, AM.procedencia 
    from relatorio R, amostra AM, analise AN
    Where R.nserie = AN.relaserie and AN.rotulo = AM.anarotulo and AN.laboratorio = '${x.laboratorio}' and R.ano between ${x.anoInicial} and ${x.anoFinal}
    order by R.ano;
    `;
    const temp = await db.query(y.toString());
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(temp.rows);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

app.post("/pesquisa-4", async (req, res) => {
  try {
    const x = await req.body;
    const y = `SELECT R.ano, AN.rotulo, AN.laboratorio, AM.bairro, I.vtotal
    from impureza I, amostra AM, analise AN, relatorio R
    where (I.nome = '${x.impureza}') and (AM.cidade = '${x.cidade}') and (I.vtotal between ${x.valorInicial} and ${x.valorFinal})
                     and (I.idamostra = AM.identificador)  and R.nserie = AN.relaserie
                     and AN.rotulo = AM.anarotulo and R.ano between  ${x.anoInicial} and ${x.anoFinal};
    `;
    const temp = await db.query(y.toString());
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(temp.rows);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});
