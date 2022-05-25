import { Personaje } from './Personaje.js';

export class Luchador extends Personaje {
    emoji = '🗡';

    constructor(name, family, age, weapon, skill) {
        const communicate = 'Primero pego y luego pregunto';
        super(name, family, age, communicate);
        this.weapon = weapon;
        this.skill = skill;
    }

    phrase() {
        super.phrase(this.communicate);
    }
}

/*
acceder a phrase-> this.character.message
a
*/
