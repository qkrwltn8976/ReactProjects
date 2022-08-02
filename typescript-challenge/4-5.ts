/**
 * polymorphism
 */

interface SStorage<T> {
  [key: string]: T;
}
class LocalStorage<T> {
  // 제네릭을 클래스로 보내고 클래스는 제네릭을 인터페이스로 보내면 인터페이스는 제네릭을 사용
  private storage: SStorage<T> = {};

  set(key: string, value: T) {
    this.storage[key] = value;
  }

  remove(key: string) {
    delete this.storage[key];
  }

  get(key: string): T {
    return this.storage[key];
  }

  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();

stringsStorage.get("key");
stringsStorage.set("hello", "how are you");

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.get("xxx");
booleansStorage.set("hello", true);
