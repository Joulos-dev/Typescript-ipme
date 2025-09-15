export class Ville {
    private _name: string;
    private _codeInsee: string;
    private _codePostaux: Array<string> = [];
    private _nbHabitant: number = 0;

    constructor(name:string, codeInsee:string, codePostaux:Array<string>, nbHabitant:number) {
        this._name = name;
        this._codeInsee = codeInsee;
        this._codePostaux = codePostaux;
        this._nbHabitant = nbHabitant;
    }
}