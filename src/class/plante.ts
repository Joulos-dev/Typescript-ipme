import {Characteristic} from "./characteristic";
import {Heal} from "./heal";

export class Plante {
    private _name: string;
    private _type: string;
    private _height: number;
    private _characteristics: Array<Characteristic>=[];
    private _heal: Heal | null = null;

    constructor(name:string,type:string,height:number) {
        this._name = name;
        this._type = type;
        this._height = height;
    }

    addCharacteristics(tableauCharacs: Characteristic){
        this._characteristics.push(tableauCharacs);
    }

    addSoin(content:Heal){
        this._heal = content;
    }

}



