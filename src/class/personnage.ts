export class Personnage {
    private _name: string;
    private _pvs: number = 30;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get pvs(): number {
        return this._pvs;
    }

    set pvs(value: number) {
        this._pvs = value;
    }

    attack(perso: Personnage){
        if (this._pvs <= 0){
            console.log("fuyez pauvre fou")
            return;
        }
        perso.pvs = perso.pvs - 20;
        console.log(this._name + " à attaqué " + perso.name + ", il reste " + perso.pvs + " pvs à " + perso.name );
    }
}