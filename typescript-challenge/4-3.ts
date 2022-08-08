abstract class aUser {
  constructor(protected firstName: string, protected lastName: string) {}

  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

class aPlayer extends aUser {
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  sayHi(name: string): string {
    return `Hello ${name}. My name is ${this.fullName}.`;
  }
}

interface Human {
  health: number;
}
interface iUser {
  firstName: string;
  lastName: string;

  sayHi(name: string): string;
  fullName(): string;
}

class cPlayer implements iUser, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}

  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  sayHi(name: string): string {
    return `Hello ${name}. My name is ${this.fullName()}.`;
  }
}

function makeUser(user: iUser): iUser {
  return {
    firstName: "nico",
    lastName: "last",
    fullName: () => "xx",
    sayHi: (name) => "string",
  };
}

makeUser({
  firstName: "nico",
  lastName: "last",
  fullName: () => "xx",
  sayHi: (name) => "string",
});
