export {};

abstract class ValidationHandler {
  private nextHandler: ValidationHandler = null;

  setHandler(handler: ValidationHandler) {
    this.nextHandler = handler;
  }

  protected abstract execValidation(input: string): boolean;
  protected abstract getErrorMessage();

  validate(input: string): boolean {
    const result = this.execValidation(input);
    if (!result) {
      this.getErrorMessage();
      return false;
    } else if (this.nextHandler) {
      return this.nextHandler.validate(input);
    } else {
      return true;
    }
  }
}

class NotNullValidationHandler extends ValidationHandler {
  protected execValidation(input: string): boolean {
    let result = false;
    if (input) {
      result = true;
    }
    console.log(`NotNullValidationの結果: ${result}`);
    return result;
  }
  protected getErrorMessage() {
    console.error('なにも入力されていません');
  }
}

class AlphabetValidationHandler extends ValidationHandler {
  protected execValidation(input: string): boolean {
    const reg = new RegExp(/^[a-zA-Z]+$/);
    const result = reg.test(input);
    console.log(`AlphabetValidationHandler: ${result}`);
    return result;
  }
  protected getErrorMessage() {
    console.error('英語で入力されていません');
  }
}

class MinLengthValidationHandler extends ValidationHandler {
  protected execValidation(input: string): boolean {
    const result = input.length >= 8;
    console.log(`MinLengthValidationHandler: ${result}`);
    return result;
  }
  protected getErrorMessage() {
    console.error('8文字以上でお願いします。');
  }
}

function run() {
  const notNullHandler = new NotNullValidationHandler();
  const alphabetHandler = new AlphabetValidationHandler();
  const minLengthHandler = new MinLengthValidationHandler();

  //  notNull -> alphabet -> minLength
  alphabetHandler.setHandler(minLengthHandler);
  notNullHandler.setHandler(alphabetHandler);

  const result = notNullHandler.validate('hogehoge');
  if (result) {
    console.info('全てのバリデーションに成功');
  }
}
run();
