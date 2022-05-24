export class Personaje {
    serie = 'Game of Thrones';
    alive = true;
    constructor(name, family, age, communicate = '') {
        this.name = name;
        this.family = family;
        this.age = age;
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
