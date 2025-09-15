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



























