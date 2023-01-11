export {};

import _ from 'lodash';

abstract class ItemPrototype {
  constructor(public name: string, public detail: Detail = { comment: [] }) {}
  addComment(comment: string) {
    this.detail.comment.push(comment);
  }

  abstract createCopy(): ItemPrototype;
}

class DeepCopyItem extends ItemPrototype {
  createCopy(): ItemPrototype {
    return _.cloneDeep(this);
  }
}

class ShallowCopyItem extends ItemPrototype {
  createCopy(): ItemPrototype {
    return _.clone(this);
  }
}

class ItemManager {
  items: { [key: string]: ItemPrototype } = {};
  registerItem(key: string, item: ItemPrototype) {
    this.items[key] = item;
  }
  create(key: string) {
    if (key in this.items) {
      const item = this.items[key];
      return item.createCopy();
    }
    throw new Error('指定されたキーは存在しません');
  }
}
type Detail = { comment: string[] };

function run() {
  const mouse = new DeepCopyItem('mouse');
  mouse.addComment('original');

  const keyboard = new ShallowCopyItem('keyboard');
  keyboard.addComment('original');

  const manager = new ItemManager();
  manager.registerItem('mouse', mouse);
  manager.registerItem('keyboard', keyboard);

  const clonedMouse = manager.create('mouse');
  const clonedKeyboard = manager.create('keyboard');

  console.log(clonedMouse);
  console.log(mouse);
  console.log(clonedKeyboard);
  console.log(keyboard);

  clonedMouse.addComment('good');
  clonedKeyboard.addComment('soso');

  console.log(clonedMouse);
  console.log(mouse);
  console.log(clonedKeyboard);
  console.log(keyboard);
}
run();
