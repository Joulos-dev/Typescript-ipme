import {Heros} from "./heros";

export class Guerrier extends Heros {
    constructor(name:string) {
        super(name);
        this._pvMax = 400;
        this._pv = 400;
        this._strength = 16;
    }

    attack(adversaire: Heros) {
        super.attack(adversaire);
    }

    getDamageValue(): number {
        let nb : number =  super.getDamageValue();
        return nb + 10 ;
    }
}