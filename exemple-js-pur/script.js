let myVar = "a value";
const myConst = "other value";

myVar = "value";
// myConst = "value"; provoque une erreur. On ne peut pas changer une constante


const notes = [10, 15, 20, 8];
const fruits = ["banane", "fraise", "pomme"];

console.log("test log");
console.error("test error");
console.warn("test warning");

console.log(notes);
console.log(fruits);
console.log(myVar);
console.log(fruits.length);

console.log("je mange le fruit : " + fruits [0]);

console.log("----------------------------")

console.log(fruits.length);

console.log("----------------------------")

// de 0 à 3 car il y a 3 fruits dans le tableau
for (let counter = 0 ; counter < 3 ; counter++){
    console.log(counter)
};

console.log("----------------------------")

// c'est la même chose que ci-dessus
for (let counter = 0 ; counter < fruits.length ; counter++){
    console.log(counter)
};

console.log("----------------------------")

// on écrit comme ceci c'est itérration
for (let i = 0 ; i < fruits.length ; i++){
    console.log("Je  mange le fruit : "+ fruits [i]+" !")
};

console.log("----------------------------")

// Autre façon d'écrire, la plus utulisé
for (let fruit of fruits){
    console.log("je mange le fruit : " + fruit + " !");
};

console.log("----------------------------")

fruits.forEach((fruit) => {
    console.log("je mange le fruit : " + fruit + " !");
});

console.log("----------------------------")

const formGroups = document.querySelectorAll(".form-group");
Array.from(formGroups).forEach((element)=>{
element.remove()
});
