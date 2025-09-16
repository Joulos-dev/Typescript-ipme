import {Heros} from "./heros";
import {randomNumbers} from "../../utils";
export class Healer extends Heros {



    constructor(name:string) {
        super(name);
        this._pv = 150;
        this._pvMax = 150 ;
        this._strength = 12;
        this._divineShield = 150;
    }

    attack(adversaire: Heros) {
        super.attack(adversaire);
        console.log("BONJOUR")

        if (this.getDivineShield()) {
            this._divineShield += 50;
            console.log(" Le feu sombre ne vous servira à rien contre moi ");
            console.log(this._name +" renforce son bouclier ");
        }
    }

    getDivineShield(): boolean {
        if (this.randomNumbers(1,20) >= 15){
            return true;
        } else {
            return false;
        }

    }

}