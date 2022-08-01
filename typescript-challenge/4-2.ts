/**
 * type: versatile 다양한 목적으로 사용, 특정 값으로 제한, 오브젝트의 모양 결정..
 *
 * interface: 오로지 오브젝트의 모양을 결정하는 데 사용
 */

type Food = string;

type Nickname = string;

type Friends = Array<String>;

type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

interface ePlayer {
  nickname: string;
  team: Team;
  health: Health;
}

const tm: ePlayer = {
  nickname: "nick",
  team: "red",
  health: 10,
};

interface inUser {
  name: string;
}

interface iPlayer extends inUser {}

type tUser = {
  name: string;
};

type tPlayer = tUser & {};

const iNico: iPlayer = {
  name: "nico",
};
