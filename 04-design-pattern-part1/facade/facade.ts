export {};

class Product {
  getProduct(name: string) {
    console.log(`${name}を取得しました`);
  }
}
class Payment {
  makePayment(name: string) {
    console.log(`${name}の支払いが終了しました。`);
  }
}
class Invoice {
  sendInvoice(name: string) {
    console.log(`${name}の請求書が送信されました`);
  }
}

class Order {
  constructor(public name: string) {
    this.placeOrder(name);
  }
  placeOrder(name: string) {
    console.log('注文開始');

    const product = new Product();
    product.getProduct(name);
    const payment = new Payment();
    payment.makePayment(name);
    const invoice = new Invoice();
    invoice.sendInvoice(name);

    console.log('完了');
  }
}
function run() {
  const order = new Order('book');
  order;
}

run();
