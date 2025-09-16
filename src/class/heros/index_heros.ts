import {Heros} from "./heros";
import {Guerrier} from "./guerrier";
import {Healer} from "./healer";

let guerrier1 : Heros = new Guerrier("Balrog");
let healer1 : Heros = new Healer("Victor le gris");

guerrier1.attack(healer1);
healer1.attack(guerrier1);

console.log(guerrier1);
console.log(healer1);