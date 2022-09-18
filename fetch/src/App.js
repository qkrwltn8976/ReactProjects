import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

import Example from "./components/ReactQueryExample/Example";
import { TestMocking } from "./components/TestMocking";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      {/* <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider> */}
      <TestMocking />
    </div>
  );
}

export default App;
