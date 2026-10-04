

import BuggyConmponent from "./components/BuggyComponent";
import MemoCounter2 from "./components/MemoCounter2";
import Products from "./components/Products";
import Counter from "./Couter";
import ErrorBoundary from "./ErrorBoundary";
import UseContextExample from "./UseContextExample";


export default function App() {
  return (
    <div>
      {/*<h2>Student application</h2>
      <ErrorBoundary>
        <BuggyConmponent/></BuggyConmponent>
      </ErrorBoundary>*/}  
      
      <Products/>
      
    </div>
  );
}


