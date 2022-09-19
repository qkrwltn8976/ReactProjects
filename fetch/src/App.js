import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

import Example from "./components/ReactQueryExample/Example";
import { TestMocking } from "./components/TestMocking";
import Profile from "./components/SWRExample/Profile";
import Cache from "./components/SWRExample/Cache";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      {/* <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider> */}
      {/* <TestMocking /> */}
      <Profile />
      <Cache />
    </div>
  );
}

export default App;
