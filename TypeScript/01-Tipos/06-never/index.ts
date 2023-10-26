/**
 * usado para quando ter erro ou um lupim
 */

const error = (): never => {
  throw new Error("algo de errado");
};

console.log(error());

const loop = (): never => {
  while (true) {
    console.log("olá");
  }
};

const validate = (value: string | number) => {

  if (typeof value === "string") {
    return console.log("é string");
  }  

  if (typeof value === "number") {
    return console.log("é número");
  }

  console.log(error());

};

// retorna um erro
// validate({ name: "Manoel" });
