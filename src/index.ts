const sayhi = (name:string, age:number, gender:string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}!!`;
};

console.log(sayhi("Damien", 20, "male"));
export {};