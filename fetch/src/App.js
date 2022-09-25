import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools, ReqctQueryDevTools } from "react-query/devtools";
import Example from "./components/ReactQueryExample/Example";
import { TestMocking } from "./components/TestMocking";
import Profile from "./components/SWRExample/Profile";
import Cache from "./components/SWRExample/Cache";
import { Fetcher } from "./components/SWRExample/Fetcher";
import { Mutate } from "./components/SWRExample/Mutate";
import { Pagination } from "./components/SWRExample/Pagination";
import { QuickStart } from "./components/ReactQueryExample/QuickStart";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Example />
        <QuickStart />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      {/* <TestMocking /> */}
      {/* <Profile /> */}
      {/* <Cache /> */}
      {/* <Fetcher /> */}
      {/* <Mutate /> */}
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
