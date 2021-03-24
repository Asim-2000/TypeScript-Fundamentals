const person: {
    name: string,
    age:number
} = {
    name: "Asim",
    age:22
}

console.log(person.name);

// better syntax = let typescript infer types

// const anotherPerson: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role:[number,string]
// }= {
//     name: "Asim Returns",
//     age: 21,
//     hobbies: ["Cooking", "Playing"],
//     role:[2,"J.K Rowling"]
// }

enum Role { ADMIN,READ_ONLY_USER};

const anotherPerson={
    name: "Asim Returns",
    age: 21,
    hobbies: ["Cooking", "Playing"],
    role:Role.ADMIN
}


if (anotherPerson.role === Role.ADMIN) {
    console.log('is admin')
}

let languages: string[];
languages = ["Python", "JavaScript"];

let favHobbies: any[];
favHobbies = [1, 'Hello World'];

for (let hobby of anotherPerson.hobbies) {
    
    console.log(hobby.toUpperCase());
    // console.log(hobby.map())    !!! ERROR !!!

}

// anotherPerson.role.push("admin")        Not caught in typescript

// anotherPerson.role[1] = 10;             Error

// anotherPerson.role = [0,'admin','user'] Error




