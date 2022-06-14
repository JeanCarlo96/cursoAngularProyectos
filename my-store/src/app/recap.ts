/**
 * Repaso de TypeScript
 */

const username: string = 'eljuank69';

const sum = (a: number, b: number) => {
  return a + b;
};

sum(1, 3);


class Persona{
  constructor(
    public age: number,
    private lastName: string
  ){}
}

const persona1 = new Persona(26, 'Jean Carlo');
persona1.age;
//persona1.lastName;
