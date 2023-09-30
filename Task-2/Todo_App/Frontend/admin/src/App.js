import "./App.css";
import Todo from "./component/Todo/Todo.jsx";
import GetTodo from "./component/Todo/GetTodo.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route exact path="/todo" element={<GetTodo />} />
        {/* <Route exact path="/todo" component={GetTodo} /> */}
      </Routes>
    </Router>
  );
};

export default App;
