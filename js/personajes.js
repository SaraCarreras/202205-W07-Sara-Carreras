// Array de personajes
import { Personaje } from './Personaje.js';
import { Rey } from './Rey.js';
import { Luchador } from './Luchador.js';
import { Asesor } from './Asesor.js';
import { Escudero } from './Escudero.js';

export const kingChar = new Rey('Joffrey Baratheon', 'Baratheon', 12, 0.5);
const knightCharJaime = new Luchador(
    'Jaime Lannister',
    'Lannister',
    32,
    'sword',
    7
);
const knightCharDae = new Luchador(
    'Daenerys Targaryen',
    'Targaryen',
    20,
    'Dragons',
    5
);

const adviserChar = new Asesor('Tyrion Lannister', 'Lannister', 32, 'Daenerys');

const squireChar = new Escudero(
    'Bronn',
    'Stokeworth',
    34,
    'Jaime Lannister',
    9
);

export const personajesArr = [
    kingChar,
    knightCharJaime,
    knightCharDae,
    adviserChar,
    squireChar,
];
