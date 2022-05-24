import { Personaje } from './Personaje.js';
export class Rey extends Personaje {
    constructor(name, family, age, yearsOfReign) {
        super(name, family, age, communicate);
        const communicate = 'Vais a morir todos';
        this.yearsOfReign = yearsOfReign;
    }
    typeOfCharacter() {
        super.typeOfCharacter(1);
    }
    phrase() {
        super.phrase('Vais a morir todos');
    }
}
