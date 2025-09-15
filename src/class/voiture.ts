import {Roue} from "./roue";

export class Voiture {
    private _type: string;
    private _modele: string;
    private _marque: string;
    private _mileage: number = 0;
    private _passengers: Array<string> = [];

    constructor(type:string, modele:string, marque:string, kms: number) {
        this._type = type;
        this._modele = modele;
        this._marque = marque;
        this._mileage = kms;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get modele(): string {
        return this._modele;
    }

    set modele(value: string) {
        this._modele = value;
    }

    get marque(): string {
        return this._marque;
    }

    set marque(value: string) {
        this._marque = value;
    }

    get mileage(): number {
        return this._mileage;
    }

    set mileage(value: number) {
        this._mileage = value;
    }

    getGlobalStatus(){
        console.log(" La voiture " + this._type + ", " + this._marque + " " + this._modele + " de " + this._mileage + " kms, à comme passagers : "  + this._passengers);
    }

    addPassenger(name:string){
        this._passengers.push(name);
        this.getGlobalStatus();
    }

    removePassenger(name:string){
        const positionInTheList = this._passengers.indexOf(name);
        this._passengers.splice(positionInTheList, 1);
        this.getGlobalStatus();
    }
}
