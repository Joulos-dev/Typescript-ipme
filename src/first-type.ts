console.log('le feu sombre ne vous servira a rien flamme dudun');

// pour les strings
let paragraphe: string = "Allo morah";

// pour les nombres
let superNb: number = 5;

//pour les boolean
let mySuperBool: boolean = true;

// pour un null
let superNull: null = null;

// on peut mettre plusieurs typages sur la meme variable
let test: null | string = null;

// les fonctions
function sayHello(): void {
    console.log("hello");
}

sayHello();

function addition(nb1:number,nb2:number): number {
    return nb1 + nb2;
}
console.log(addition(5,7));

// pour les tableaux
let arrayString : Array<string> = ["julien", "fairouz", "..."]

let arrayStringNumber : Array<string | number> = ["jules", 30]

let miniExo : Array< string | number | Array< Array< boolean|number >>> = [
    "Bonjour !", 52, [
        [
            true
        ],
        [
            658
        ]
    ]
]