import { Personaje } from './Personaje.js';
export class Rey extends Personaje {
    emoji = '👑';
    constructor(name, family, age, yearsOfReign) {
        const communicate = 'Vais a morir todos';
        super(name, family, age, communicate);
        this.yearsOfReign = yearsOfReign;
    }

    phrase() {
        super.phrase(this.communicate);
    }
}
//que el constructor reciba ese como el último
//character.constructor.name
//Card 0 stringliteral de matar el personaje y el render
/*
rneder genéricaq qeu actualice todas las tarjetas o la tarjeta misma cambia el html de la suya
cando asignas 1 eventlistener actualizas, llamas la instancia de tarjeta (revisar class)
constructor reciva como parametro 1 objeto character y el c

aaceder a messaje o emoji-> 
create car-> actualizar qe reciba el personaje entero.

*/
