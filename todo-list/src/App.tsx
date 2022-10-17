import React from "react";
import Calendar from "./components/Calendar";
import TodoFormModal from "./features/TodoFormModal";
import TodoStatisticsModal from "./features/TodoStatisticsModal";

function App() {
  return (
    <div className="App">
      <Calendar />
      <TodoFormModal />
      <TodoStatisticsModal />
    </div>
  );
}

export default App;
