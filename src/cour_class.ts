import {Humain} from "./class/humain";
import {Roue} from "./class/roue";
import {Personnage} from "./class/personnage";

let object1: Humain = new Humain("dupont", "antoine");
console.log(object1);

object1.age = 34;
object1.addHobby("Badminton");
object1.addHobby("Aqua Poney");
console.log(object1);

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

import {BankAccount} from "./class/bankAccount";

let bankAccount1: BankAccount = new BankAccount(true);

bankAccount1.deposit(50);
bankAccount1.displayBalance();
bankAccount1.withdraw(10);
bankAccount1.displayBalance();
bankAccount1.deposit(80);
bankAccount1.displayBalance();

let bankAccount2 : BankAccount = new BankAccount(false);

bankAccount2.deposit(50);
bankAccount2.displayBalance();
bankAccount2.withdraw(10);
bankAccount2.displayBalance();
bankAccount2.deposit(80);
bankAccount2.displayBalance();

// Exercice 3

import {Voiture} from "./class/voiture";

let voiture : Voiture = new Voiture ("4x4", "RAV 4", "Nissan", 50000);
console.log(voiture);

voiture.getGlobalStatus();

voiture.addPassenger("Victor");
voiture.removePassenger("Victor");

// Exercice 4

import {Bibliotheque} from "./class/bibliotheque";

let bibliotheque1 : Bibliotheque = new Bibliotheque(["World of Warcraft", "League des légendes", "Hollow knight: Silksong", "Dwarf fortress", "Final Fantasy IX"]);
let bibliotheque2 : Bibliotheque = new Bibliotheque(["Valorant"]);


bibliotheque1.addGame("Dawn of War");
// bibliotheque1.removeGame("Dawn of War");

bibliotheque1.giveGame("Dawn of War", bibliotheque2);

console.log(bibliotheque1);
console.log(bibliotheque2);

// début de exo_class_complexe
// Exercice 1

import {Region} from "./class/region";
import {Departement} from "./class/departement";
import {Ville} from "./class/ville";

let region : Region = new Region("Auvergne", "63");

let departement1 : Departement = new Departement("Puy-De-Dome", "63");
let departement2 : Departement = new Departement("Allier", "03");
let departement3 : Departement = new Departement("Haute-Loire", "42");
let departement4 : Departement = new Departement("Cantal", "15");

let ville1 : Ville = new Ville ("Clermont-Ferrand", "63113", ["63000", "63100"], 75000);
let ville2 : Ville = new Ville ("Chamalières", "63114", ["63300", "63400"], 50000);
let ville3 : Ville = new Ville ("Royat", "63115", ["63700", "63800"], 25000);

region.addDepartement(departement1);
region.addDepartement(departement2);
region.addDepartement(departement3);
region.addDepartement(departement4);

departement1.addVille(ville1);
departement1.addVille(ville2);
departement1.addVille(ville3);

console.log(region);
console.log(departement1);
console.log(departement2);
console.log(departement3);
console.log(departement4);
console.log(ville1);
console.log(ville2);
console.log(ville3);

// Exercice 2

import {Plante} from "./class/plante"
import {Characteristic} from "./class/characteristic";
import {Heal} from "./class/heal";

let plante1 : Plante = new Plante ("Eucalyptus", "plante verte", 58);
let characteristics1 : Characteristic = new Characteristic(["Grand", "Produit de l'ombre", "Sent bon"])
let heal1 : Heal = new Heal(" Il faut bien l'arroser le cinquième jour, à l'aube, en regardant à l'est");
plante1.addCharacteristics(characteristics1);
plante1.addSoin(heal1);

let plante2 : Plante = new Plante ("Basilic", "plante rouge", 95);
let characteristics2 : Characteristic = new Characteristic(["Petit", "Produit de l'oxygene", "prend de la place"])
let heal2 : Heal = new Heal(" LE FEU SOMBRE NE VOUS SERVIRA A RIEN FLAMME D'UDUN");
plante2.addCharacteristics(characteristics2);
plante2.addSoin(heal2);

console.log(plante1);
console.log(plante2);



















