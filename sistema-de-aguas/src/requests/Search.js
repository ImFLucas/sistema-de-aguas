const searchTable = async () => {
  try {
    const temp = await fetch("http://localhost:1000/tabela");
    const resp = await temp.json();
    //console.log(resp);

    return resp;
  } catch (error) {
    console.log(error.message);
  } //
};

module.exports = searchTable;
