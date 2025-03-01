 // 1. starting point
//------------------------------
import { useState } from "react";
import { TopBar } from "./top-bar";
import { UserInput } from "./user-input";

export function App() {
  const [booksCount, setBooksCount] = useState<number>(2);

  return (
    <div className="app">
      <TopBar>React Components are state machines</TopBar>
      <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1>
      <div className="hbox space-between mt20">
        <h3 className="paragraph">Book counter: {booksCount}</h3>
        <button className="button" onClick={() => setBooksCount(booksCount + 1)}>
          add Book
        </button>
      </div>
      <br />
      <hr />
      <UserInput
          question="What is your name?"
          placeholder="Your name here..."
        />
    </div>
  );
} 

// 2. Using the Books component instances
//--------------------------------------------
/* import { TopBar } from "./top-bar";
import { UserInput } from "./user-input";
import { Books } from "./books";

export function App() {
  return (
    <div className="app">
      <TopBar>React Components are state machines</TopBar>
      <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1>
      <Books/>
      <Books/>
      <Books/>
      <br />
      <hr />
      <UserInput
          question="What is your name?"
          placeholder="Your name here..."
        />
    </div>
  );
}  */

// 3. Using the 3 different components
//--------------------------------------------
/* import { TopBar } from "./top-bar";
import { UserInput } from "./user-input";
import { Books } from "./books";
import { Customers } from "./customers";
import { Employees } from "./employees";

export function App() {
  return (
    <div className="app">
      <TopBar>React Components are state machines</TopBar>
      <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1>
      <Books/>
      <Customers/>
      <Employees/>
      <br />
      <hr />
      <UserInput
          question="What is your name?"
          placeholder="Your name here..."
        />
    </div>
  );
} 
 */
// 4. Using the 3 Counter instances with props
//--------------------------------------------
/* import { TopBar } from "./top-bar";
import { UserInput } from "./user-input";
import { Counter } from "./counter";

export function App() {
  return (
    <div className="app">
      <TopBar>React Components are state machines</TopBar>
      <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1>
      <Counter item="Book" initialValue={3}/>
      <Counter item="Customer" initialValue={12}/>
      <Counter item="Employee" initialValue={24}/>
      <br />
      <hr />
      <UserInput
          question="What is your name?"
          placeholder="Your name here..."
        />
    </div>
  );
}  */

//------------------------------
//          Phase 1
//------------------------------
/* import { Component } from "react";
import { TopBar } from "./TopBar";
import { UserInput } from "./UserInput";
import { Books } from "./Books";
import { Customers } from "./Customers";
import { Employees } from "./Employees";

export class App extends Component {
  // state = {
  //   booksCount: 6,
  //   customersCount: 0,
  //   employeesCount: 0,
  // };

  render() {
    return (
      <div className="app">
        <TopBar>
          <h1>Hello State</h1>
        </TopBar>
        <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1>
        <Books />
        <Customers />
        <Employees />
        <br />
        <hr />
        <UserInput
          question="What is your name?"
          placeholder="Your name here..."
        />
      </div>
    );
  }
} */

//------------------------------
//          Phase 2
//------------------------------

/* import { TopBar } from "./TopBar";
import { UserInput } from "./UserInput";
import { Counter } from "./Counter";

export const App = () => (
  <div className="app">
    <TopBar>React Components are state machines</TopBar>
    <h1 className="headline white-text"> {"<<<< Stateful Bookstore >>>>"}</h1>
    <Counter item="Book" initial={6} />
    <Counter item="Customer" initial={2} />
    <Counter item="Employee" initial={1} />
    <br />
    <hr />
    <UserInput
          question="What is your name?"
          placeholder="Your name here..."
        />
  </div>
);
 */