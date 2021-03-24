var person = {
    name: "Asim",
    age: 22
};
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY_USER"] = 1] = "READ_ONLY_USER";
})(Role || (Role = {}));
;
var anotherPerson = {
    name: "Asim Returns",
    age: 21,
    hobbies: ["Cooking", "Playing"],
    role: Role.ADMIN
};
if (anotherPerson.role === Role.ADMIN) {
    console.log('is admin');
}
var languages;
languages = ["Python", "JavaScript"];
for (var _i = 0, _a = anotherPerson.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map())    !!! ERROR !!!
}
// anotherPerson.role.push("admin")        Not caught in typescript
// anotherPerson.role[1] = 10;             Error
// anotherPerson.role = [0,'admin','user'] Error
