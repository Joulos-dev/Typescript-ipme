import {Humain} from "./class/humain";
import {Roue} from "./class/roue";
import {Voiture} from "./class/voiture"
import {Personnage} from "./class/personnage";

let object1: Humain = new Humain("dupont", "antoine");
console.log(object1);

object1.age = 34;
object1.addHobby("Badminton");
object1.addHobby("Aqua Poney");
console.log(object1);

let roue1: Roue = new Roue ("avant-droit");
let roue2: Roue = new Roue ("avant-gauche");
let roue3: Roue = new Roue ("arrière-droit");
let roue4: Roue = new Roue ("arriere-gauche");

let peugeot308: Voiture = new Voiture ("308", [
    roue1 ,roue2, roue3, roue4
]);
console.log(peugeot308);

//

let merlin: Personnage = new Personnage("Merlin");
let gandalf: Personnage = new Personnage("Gandalf");

merlin.attack(gandalf);

// début de exo_class_simple
// Exercice 1

import {Calculatrice} from "./class/calculatrice";

let calculatrice : Calculatrice = new Calculatrice();

calculatrice.add(5, 7);
calculatrice.subtract(7, 5);
calculatrice.multiply(3, 3);
calculatrice.divide(3, 3);

// Exercice 2
























