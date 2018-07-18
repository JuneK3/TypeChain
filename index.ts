const name="Damien",
    age=20,
    gender="male";

const sayhi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayhi(name, age, gender);
export {};