export class BankAccount {
    private _balance:number = 0;
    private _name: string | null = "Jules";
    private _active : boolean = true;

    constructor(active:boolean) {
        this._active = active;
    }

    deposit(montant:number) {
        if (!this._active) {
            console.log(" Ce compte est inactif ");
            return;
        }
        this._balance = this._balance + montant;
        console.log(this._name + " dépose " + montant + " sur son compte ");
    }

    withdraw(montant:number) {
        if (!this._active) {
            console.log(" Ce compte est inactif ");
            return;
        }
        if (this._balance - montant <= 0 ) {
            console.log("Vous n'avez pas assez de fond");
            return;
        }
        this._balance = this._balance - montant;
        console.log(this._name + " retire " + montant + " sur son compte ")
    }

    displayBalance() {
        if (!this._active) {
            console.log(" Ce compte est inactif ");
            return;
        }
        console.log(" Le compte de " + this._name + " à actuellement " + this._balance +" euros .")
    }
}