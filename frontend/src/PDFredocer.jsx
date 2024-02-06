const num = Math.random() * 1000;
export function PDFredocer(state, action) {
  switch (true) {
    case action.type === "addTodo":
      return {
        newtodo: action.newtodo,
        toDos: [
          ...state.toDos,
          { id: Math.floor(Math.random() * 1000), value: action.newtodo },
        ],
      };

    case action.type === "removeTodo":
      return {
        toDos: state.toDos.filter((element) => element.id !== action.selectedTodo.id),
      };

    default:
      return state;
  }
}