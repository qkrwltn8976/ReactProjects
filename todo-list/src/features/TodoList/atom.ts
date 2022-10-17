import { atom, atomFamily, selectorFamily } from "recoil";
import { isSameDay } from "../../utils/date";

export interface Todo {
  id: string;
  content: string;
  done: boolean;
  date: Date;
}

export const todoListState = atom<Array<Todo>>({
  key: "todoListState",
  default: [],
});

export const selectedDateState = atom<Date>({
  key: "selectedDateState",
  default: new Date(),
});

export const selectedTodoState = atom<Todo | null>({
  key: "selectedTodoState",
  default: null,
});

export const filteredTodoListState = atomFamily<
  Array<Todo>, // 리턴 데이터 타입
  Date // atomFamily 팩토리 함수 호출 파라미터
>({
  key: "filteredTodoListState",
  default: selectorFamily({
    key: "filteredTodoListState/default",
    get:
      (selectedDate) =>
      ({ get }) => {
        const todoList = get(todoListState);

        return todoList.filter((todo) => isSameDay(todo.date, selectedDate));
      },
  }),
});
