export {};

class Computer {
  type: string;
  cpu: string;
  rum: number;
}
interface ComputerBuilder {
  addCpu(cpu: string): void;
  addRam(ram: number): void;
}

class DesktopBuilder implements ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
    this.computer.type = 'DeskTop';
  }
  addCpu(cpu: string) {
    this.computer.cpu = cpu;
  }
  addRam(ram: number) {
    this.computer.rum = ram;
  }
  getResult(): Computer {
    return this.computer;
  }
}
class LaptopBuilder implements ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
    this.computer.type = 'LapTop';
  }
  addCpu(cpu: string) {
    this.computer.cpu = cpu;
  }
  addRam(ram: number) {
    this.computer.rum = ram;
  }
  getResult(): Computer {
    return this.computer;
  }
}
class Director {
  constructor(private builder: ComputerBuilder) {}

  construct() {
    this.builder.addCpu('Core i5');
    this.builder.addRam(16);
  }
  highSpecConstruct() {
    this.builder.addCpu('Core i9');
    this.builder.addRam(64);
  }
}

function run() {
  const desktopBuilder = new DesktopBuilder();
  const desktopDirector = new Director(desktopBuilder);
  desktopDirector.construct();
  const desktopComputer = desktopBuilder.getResult();
  console.log(desktopComputer);

  const laptopBuilder = new LaptopBuilder();
  const laptopDirector = new Director(laptopBuilder);
  laptopDirector.highSpecConstruct();
  const laptopComputer = laptopBuilder.getResult();
  console.log(laptopComputer);
}
run();
