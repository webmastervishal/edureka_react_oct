import React, { useState, useEffect, useContext, useRef, useMemo } from "react";
import MasterLayout from "../layout/MasterLayout";
import Cookies from "js-cookie";
import UserContext from "../context/UserContext";

function Counter() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [show, setShow] = useState(true);
  const [user, setUser] = useState(1);
  const [currencies, setCurrencies] = useState([]);

  const data = useContext(UserContext);
  const inputRef = useRef();
  const buttonRef = useRef();

  async function fetchApi() {
    const res = await fetch(
      `https://webmaster-fake-api.herokuapp.com/currencies`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      }
    );
    const result = await res.json();
    setCurrencies(result);
  }

  useEffect(() => {
    console.log("Mounting/Updating...");
    fetchApi();

    inputRef.current.focus();
    inputRef.current.style.height = "25px";
    buttonRef.current.style.height = "50px";
    //open connection to the websocket

    // let time = 1;
    // const timer = setInterval(() => {
    //   console.log("timer", time);
    //   time = time + 1;
    // }, 1000);

    return () => {
      //close connection to the websocket
      console.log("unmounting...");
      //   clearInterval(timer);
    };
  }, []);

  //1. if we don't provide second argument then useeffect gets called on mounting & updating
  //2. [] - empty array, that means your useeffect will get called on mounting only
  //3. [count]

  useEffect(() => {
    //fetch data for user id 1/2,3,4,5,
    console.log("this is second use effect");
  }, [count]);

  function displayMessage() {
    // console.log("calling display message....");
    return <h1>Display message...</h1>;
  }

  return (
    <MasterLayout>
      {/* <h2>Username is: {data.username}</h2> */}
      <button onClick={() => data.setUsername("Vishal Shetty")}>
        Change the name
      </button>
      {show && (
        <>
          <h1 id="counter">Count: {count}</h1>
          <button id="increment" onClick={() => setCount(count + 1)}>
            +
          </button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </>
      )}
      <button ref={buttonRef} onClick={() => setShow(!show)}>
        show/hide
      </button>
      {/* {numbers.map((num) => (
        <p>{num}</p>
      ))} */}
      {currencies.map((currency) => (
        <p>{currency.name}</p>
      ))}

      <input ref={inputRef} type="text" name="input" />

      {useMemo(() => displayMessage(), [show])}
    </MasterLayout>
  );
}
// class Counter extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       count: 0,
//     };

//     this.handleIncrement = this.handleIncrement.bind(this);
//   }

//   handleIncrement() {
//     console.log("this", this);
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }

//   componentDidMount() {
//     //open connection web socket
//     //fetching the user data id: 1
//   }

//   componentWillUnmount() {
//     //close connection to web socket
//   }

//   componentDidUpdate() {
//     //fetching the user data id : 2/3/5/
//   }

//   render() {
//     return (
//       <>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.handleIncrement}>+</button>
//         <button onClick={this.handleDecrement}>-</button>
//       </>
//     );
//   }
// }

export default Counter;
