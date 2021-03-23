var person = {
    name: "Asim",
    age: 22
};
console.log(person.name);
// better syntax = let typescript infer types
var anotherPerson = {
    name: "Asim Returns",
    age: 21,
    hobbies: ["Cooking", "Playing"]
};
var languages;
languages = ["Python", "JavaScript"];
for (var _i = 0, _a = anotherPerson.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
