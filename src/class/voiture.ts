import {Roue} from "./roue";

export class Voiture {
    private _name: string;
    private _kilometers: number = 0;
    private _roues: Array<Roue> = [];

    constructor(name:string, array: Array<Roue>) {
        this._name = name;
        this._roues = array;
    }
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get kilometers(): number {
        return this._kilometers;
    }

    set kilometers(value: number) {
        this._kilometers = value;
    }

    get roues(): Array<Roue> {
        return this._roues;
    }

}
