export {};

interface Button {
  press();
}

interface Checkbox {
  switch();
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class WindowsButton implements Button {
  press() {
    console.log('press from Windows button');
  }
}

class WindowsCheckbox implements Checkbox {
  switch() {
    console.log('switch from Windows checkbox');
  }
}

class WindowsGUIFactory implements GUIFactory {
  createButton() {
    return new WindowsButton();
  }
  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}

class MacButton implements Button {
  press() {
    console.log('press from Mac button');
  }
}

class MacCheckbox implements Checkbox {
  switch() {
    console.log('switch from Mac checkbox');
  }
}

class MacGUIFactory implements GUIFactory {
  createButton() {
    return new MacButton();
  }
  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

function run(factory: GUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  button.press();
  checkbox.switch();
}

run(new WindowsGUIFactory());
run(new MacGUIFactory());
