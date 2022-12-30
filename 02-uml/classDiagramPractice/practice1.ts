// クラス図 演習1
class Employee {
  private id: number;
  private name: string;
  private salary: number;

  work() {
    console.log('hatarakimasu');
  }
  protected getSalary(): number {
    return this.salary;
  }
  protected setSalary(salary: number) {
    salary = this.salary;
  }
}
