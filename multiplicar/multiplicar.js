//required
const fs = require("fs");
const colors = require("colors");

let listarTabla = (base, limite = 10) => {
  console.log("==============".green);
  console.log(`==Tabla de ${base}==`.green);
  console.log("==============".green);
  for (let i = 1; i <= limite; i++) {
    let res = base * i;
    console.log(`${base} * ${i} = ${res}`);
  }
};

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base) && !Number(limite)) {
      reject(`La base "${base}" no es un número. Por favor ingrese uno`);
      return;
    }

    let tabla = "";

    for (let i = 1; i <= limite; i++) {
      let res = base * i;
      tabla += `${base} * ${i} = ${res}\n`;
    }

    const data = new Uint8Array(Buffer.from(tabla));
    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}.txt`);
      console.log(colors.magenta(`El archivo tabla-${base}-al-${limite}.txt ha sido creado`));
    });
  });
};

module.exports = {
  listarTabla,
  crearArchivo,
};
