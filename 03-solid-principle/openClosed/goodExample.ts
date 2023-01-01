export {};

interface IEmployee {
  name: string;
  getBonus(base: number): number;
}

class JuniorEmployee implements IEmployee {
  constructor(public name: string) {}

  getBonus(base: number): number {
    return Math.floor(base * 1.1);
  }
}
class MiddleEmployee implements IEmployee {
  constructor(public name: string) {}

  getBonus(base: number): number {
    return Math.floor(base * 1.5);
  }
}
class SeniorEmployee implements IEmployee {
  constructor(public name: string) {}

  getBonus(base: number): number {
    return Math.floor(base * 2);
  }
}
class ExpertEmployee implements IEmployee {
  constructor(public name: string) {}

  getBonus(base: number): number {
    return Math.floor(base * 3);
  }
}

function run() {
  const emp1 = new JuniorEmployee('yamada');
  const emp2 = new MiddleEmployee('suzuki');
  const emp3 = new SeniorEmployee('sasaki');
  const emp4 = new ExpertEmployee('tabaka');
  const base = 100;
  console.log(emp1.getBonus(base));
  console.log(emp2.getBonus(base));
  console.log(emp3.getBonus(base));
  console.log(emp4.getBonus(base));
}

run();
