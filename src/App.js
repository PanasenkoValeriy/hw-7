// // import logo from './logo.svg';
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { Component } from "react";
import "./App.css";
import { TaskList } from "./components/TaskList/TaskList";
import todos from "./todos.json";
import { Dropdown } from "./components/Dropdown/Dropdown";

class App extends Component {
  state = { todos };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    return (
      <>
        <TaskList onDeleteTodo={this.deleteTodo} todos={todos} />
        <Dropdown />
      </>
    );
  }
}

export default App;
