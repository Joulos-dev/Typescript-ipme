export class Humain {
    private _name :string | null = null;
    private _lastname: string | null;
    private _age :number | null = null;
    private _hobbies: Array<string> = [];

    constructor(lastname: string, name: string) {
        this._name = name;
        this._lastname = lastname;
    }

    get lastname(): string | null {
        return this._lastname;
    }

    set lastname(str: string) {
        this._lastname = str;
    }

    get name():string | null {
        return this._name;
    }
    set name(str: string) {
        this._name = str;
    }

    get age(): number | null {
        return this._age;
    }

    set age(nb : number){
        this._age = nb ;
    }

    get hobbies(): Array<string>{
        return this._hobbies
    }
    addHobby(hobbyStr: string): void{
        this._hobbies.push(hobbyStr);
    }

}
