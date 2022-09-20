import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

import Example from "./components/ReactQueryExample/Example";
import { TestMocking } from "./components/TestMocking";
import Profile from "./components/SWRExample/Profile";
import Cache from "./components/SWRExample/Cache";
import { Fetcher } from "./components/SWRExample/Fetcher";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      {/* <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider> */}
      {/* <TestMocking /> */}
      {/* <Profile /> */}
      {/* <Cache /> */}
      <Fetcher />
    </div>
  );
}

export default App;
