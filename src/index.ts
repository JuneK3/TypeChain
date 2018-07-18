class Human {
    public name:string;
    private age:number;
    public gender:string;
    constructor(name:string, age:number, gender:string){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
}

const lynn = new Human("Lynn", 18, "female");

const sayhi = (person:Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!!`;
};

console.log(sayhi(lynn));
export {};