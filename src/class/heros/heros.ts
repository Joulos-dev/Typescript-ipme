import {randomNumbers} from "../../utils";

export class Heros {
    protected _name: string = "Heros";
    protected _pvMax: number = 200;
    protected _pv: number = 200;
    protected _strength: number = 10;
    protected _speed: number = 10;
    protected _divineShield: number = 0;

    private _attackInterval: NodeJS.Timeout = setInterval(() => {} );

    constructor(name:string) {
        this._name = name;
    }

    attack(adversaire: Heros) {
        if (adversaire._pv <= 0) {
            clearInterval(this._attackInterval);
            console.log(adversaire._name + " est mort ");
            return;
        }

        clearInterval(this._attackInterval);

        this._attackInterval = setInterval(() => {

            if (adversaire._pv <= 0) {
                clearInterval(this._attackInterval);
                console.log(adversaire._name + " est mort ");
                return;
            }

            if (this._pv <= 0 ) {
                clearInterval(this._attackInterval);
                console.log("FUYEZ , pauvre fou !");
                return;
            }

            const damage = this.getDamageValue();
            const isCrit = this.isCritHit();

            if(this.isADodge()) {
                console.log(adversaire._name + " à esquiver l'attaque de " + this._name);
                return
            }

            if (isCrit) {
                console.log(this._name + " à fait un coup critique sur " + adversaire._name);
            }

            if (adversaire._divineShield > 0) {
                adversaire._divineShield -= damage;
                console.log(adversaire._name + " à absorbé " + damage + " de dégâts avec son bouclier. Il reste " + adversaire._divineShield + " points de bouclier.");
                if (adversaire._divineShield < 0) {
                    adversaire._pv += adversaire._divineShield; // Si le bouclier est tombé à 0, les dégâts restants sont appliqués
                    adversaire._divineShield = 0;
                }
            } else {
                adversaire._pv -= damage;
            }

            console.log(this._name + " a attaqué " + adversaire._name + ", il reste " + adversaire._pv + " PVs à " + adversaire._name);

        }, 1500);
    }



    isADodge(): boolean {
        if (this.randomNumbers(1,20) >= 19){
            return true;
        } else {
            return false;
        }

    }

    isCritHit(): boolean {
        return this.randomNumbers(1, 20) >= 19;
    }

    getDamageValue(): number {
        if (this.isCritHit()) {
            return this._strength * 2;
        }
        return this._strength;
    }

    randomNumbers(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


}