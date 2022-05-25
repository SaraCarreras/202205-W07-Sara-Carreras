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
}
