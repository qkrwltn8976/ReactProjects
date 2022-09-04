import logo from "./logo.svg";
import "./App.css";
import ControlledComponent from "./components/2-10.Form/ControlledComponent";
import UncontrolledComponent from "./components/2-10.Form/UncontrolledComponent";
// import Event from "./components/2-7.Event/Event";
// import Condition from "./components/2-8.ConditionalRendering/Condition";
// import List from "./components/2-9.List/List";
// import ClassComponent2 from "./components/2-6.LifeCycle/ClassComponent";
// import Composition from "./components/2-4.Props/Composition";
// import Extraction from "./components/2-4.Props/Extraction/Extraction";
// import ClassComponent from "./components/2-5.State/ClassComponent";
// import FunctionalComponent from "./components/2-5.State/FunctionalComponent";

function App() {
  return (
    <div className="App">
      <ControlledComponent />
      <UncontrolledComponent />
      {/* <List /> */}
      {/* <Condition /> */}
      {/* <Event /> */}
      {/* <ClassComponent2 />
      <FunctionalComponent />
      <ClassComponent />
      <Extraction />
      <Composition /> */}
    </div>
  );
}

export default App;
