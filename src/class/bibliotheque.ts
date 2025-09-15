export class Bibliotheque {
    private _jeux: Array<string> = [];

    constructor(listJeux: Array<string>) {
        this._jeux = listJeux;
    }

    addGame(name:string) {
        this._jeux.push(name);
    }

    removeGame(name:string){
        const whichOne = this._jeux.indexOf(name);
        this._jeux.splice(whichOne, 1);
    }

    giveGame (name:string, destinataire : Bibliotheque) {
        this.removeGame(name);
        destinataire.addGame(name);
    }

}