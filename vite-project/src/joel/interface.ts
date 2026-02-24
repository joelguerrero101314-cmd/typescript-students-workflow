export interface Hero {
  live: number;
  strong: number;
  agility: string;
  name?: string;
  level?: number;
  direction?: {
    city: string;
    country: string;
    street: string;
    home: string;
  }
}

const hero: Hero = {
  live: 100,
  strong: 100,
  agility: 'Fuego'
};

let number: number = 100;
let name: string = 'Joel';
let isActive: boolean = true;

console.log('El heroe es: ', hero);



