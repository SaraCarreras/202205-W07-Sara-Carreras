export class Personaje {
    serie = 'Game of Thrones';
    constructor(name, family, age, alive, communicate) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.alive = true;
        this.communicate = communicate;
    }
    death() {
        this.alive = false;
    }
    phrase() {
        return this.communicate;
    }
    typeOfCharacter(a) {
        const typeOfCharacters = ['adviser', 'king', 'knight', 'squire'];
        const position = typeOfCharacters[a];
        return position;
    }
}
