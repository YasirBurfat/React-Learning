import { StateHook } from './state-hook';
import { Toggle } from './Toggle-in-React';
import Counter from './Counter';
import LikeBtnCounter from './likeBtnCounter';
import Wrapper from './Wrapper';
import User from './User';
import './App.css'

function calculator(a, b, op) {
  if (op == "+") return a + b;
  else if (op == "-") return a - b;
  else if (op == "*") return a * b;
  else if (op == "/") return a / b;
  else return "invalid operator!";
}

function hello() {
  alert("hello!!");
}

let fruit = (name) => {
  alert(name);
}

function App() {

  let name = "Yasir";
  let userInfo = {
    name: "yasir",
    email: "yasirburfat53@gmail.com",
    rollno: "23cs015"
  }
  let arr = ['yasir', 'mukhtiar', 'amir', 'muzi'];
  let path = "https://www.shutterstock.com/image-vector/july-3-2023-vector-illustration-600nw-2326749515.jpg";

  return (
    <div>

      {/* <hr />
      <div>
        <h1>{calculator(4, 6, "*")}</h1>
        <h1>{arr[1]}</h1> */}
      {/* <img src={path} alt="" /> */}
      {/* <input type="text" />
        <button onClick={hello}>hello</button>
        <button onClick={() => fruit("banana")}>fruit</button>
      </div> */}

      {/* <hr />
      <StateHook/>
      <hr />
      <Counter />
      <hr />
      <Toggle/>
      <hr />
      <LikeBtnCounter/>
      <hr /> */}

      {/* <User name="Yasir"/>
      <User name="Yasir"/>
      <User/> */}

      <Wrapper>
        <h1>User</h1>
      </Wrapper>

      <Wrapper>
        <h1>Everyone</h1>
      </Wrapper>

    </div>
  )
}

export default App
