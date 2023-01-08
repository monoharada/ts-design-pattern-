export {};

interface Target {
  getCsvData(): string;
}
class NewLibrary {
  getJsonData() {
    return [
      {
        data1: 'json_dataA',
        data2: 'json_dataB',
      },
      {
        data1: 'json_dataC',
        data2: 'json_dataD',
      },
    ];
  }
}

class JsonToCsvAdapter implements Target {
  constructor(private adaptee: NewLibrary) {}
  getCsvData(): string {
    const jsonData = this.adaptee.getJsonData();

    const header = Object.keys(jsonData[0]).join(',') + '\n';

    const body = jsonData
      .map((d) => {
        return Object.values(d).join(',');
      })
      .join('\n');
    return header + body;
  }
}

function run() {
  const adaptee = new NewLibrary();
  console.log('=== adaptee data ===');
  console.log(adaptee.getJsonData());
  console.log('');
  const adapter = new JsonToCsvAdapter(adaptee);
  console.log('=== adapter data ===');
  console.log(adapter.getCsvData());
}
run();
