import { Personaje } from './Personaje.js';

export class Escudero extends Personaje {
    emoji = '🛡';

    constructor(name, family, age, squireOf, submission) {
        const communicate = 'Soy un loser';
        super(name, family, age, communicate);
        this.squireOf = squireOf;
        this.submission = submission;
    }

    phrase() {
        super.phrase(this.communicate);
    }
}
