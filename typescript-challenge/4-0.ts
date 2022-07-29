/*능
 * abstract class는 오직 상속만 가능, 인스턴스는 생성하지 못함
 */

abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickname: string // protected: 상속하는 모든 클래스에서 접근 가능
  ) {}
  abstract getNickName(): void; // abstract method (only call signature): 추상 클래스를 상속받는 클래스에서 추상 메소드를 구현해주어야 함
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Players extends User {
  getNickName(): void {
    console.log(this.nickname); /
  }
}

const nic = new Players("nico", "last", "니코");

nic.getFullName();
