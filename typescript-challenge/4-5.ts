/**
 * polymorphism
 */

interface SStorage<T> {
  [key: string]: T;
}
class LocalStorage<T> {
  // 제네릭을 클래스로 보내고 클래스는 제네릭을 인터페이스로 보내면 인터페이스는 제네릭을 사용
  private storage: SStorage<T> = {};

  setItem(key: string, value: T) {
    this.storage[key] = value;
  }

  clearItem(key: string) {
    delete this.storage[key];
  }

  getItem(key: string): T {
    return this.storage[key];
  }

  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();

stringsStorage.getItem("key");
stringsStorage.setItem("hello", "how are you");

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.getItem("xxx");
booleansStorage.setItem("hello", true);
