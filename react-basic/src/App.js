import React, {createContext, useContext, useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, outlet, useParams, useNavigate} from "react-router-dom"
import './App.css';

export default App;

// function App() {
//   return <h1>Hello React</h1>
// } 

// # jsx
// Javascript의 확장문법
// 선언형 문법
// Babel 이 JSX를 JavaScript Object로 변환한다

// function App() {
//   return <h1>Hello React</h1>
// }

// JSX 없이 Virtual DOM 만들기
// function App() {
//   const h1 = React.createElement('h1', 'null', 'Hello React')

//   return h1;
// }

// # JSX 문법 
// function App() {
//   return (
//     <div>
//       <h2>element는 하나의 element로 감싸져야 한다</h2>
//       <div>Foo</div>
//       <div>Bar</div>
//       <div>Baz</div>
//     </div>
//   )
// }

// function App() {

//   return (
//     <div>
//     <h2>element를 하나의 element로 감싸지 않은 경우 에러 발생</h2>
//     <div>Foo</div>
//     <div>Bar</div>
//     <div>Baz</div>
//     </div>
//   )
// }

// React.Fragment

// function App() {
//   return (
//     // DOM에 element를 추가하지 않고 자식을 그룹화 할 수 있다
//     <React.Fragment>
//       <h2>React.Fragment</h2>
//       <div>Foo</div>
//       <div>Bar</div>
//       <div>Baz</div>
//     </React.Fragment>
//   )
// }

// function App() {
//   return (
//     <>
//     <h2>React.Fragment</h2>
//     <div>Foo</div>
//     <div>Bar</div>
//     <div>Baz</div>
//     </>
//   )
// }

// JSX attribute

// function App() {
//   return (
//     <>
//     <h2>JSX attribute</h2>
//     <ul>
//       <li><a href='#' target="_blank">Foo</a></li>
//       <li><img src="" alt="Bar" /></li>
//       <li><input type="text" placeholder="Baz" autoComplete="off" /></li>
//     </ul>
//     </>
//   )
// }

// JSX inline style attribute

// function App() {
//   return (
//     <>
//     <h2>JSX inline style</h2>
//     {/* style attribute애 Object를 인자로 전달한다 */}
//     <ul style={{border:"1px solid"}}>
//     <li style={{textDecoration:"underline"}}>Foo</li>
//     <li>Bar</li>
//     <li>BAz</li>
//     </ul>
//     </>
//   )
// }

// JSX 내에서 JS코드 작성하기

// function App() {
//   const foo = "Foo"

//   return (
//     <>
//     <h2>JSX내에서 JS 코드 작성하기</h2>
//     <div>{foo}</div>
//     <div>{"Ba"+"r"}</div>
//     <div>{"Baz".valueOf()}</div>
//     </>
//   )
// }

// Q. Javascript 변수와 inline style을 사용하여  virtualDOM을 완성
// function App() {
//   const dutchBeer = "Heineken"
//   const irishBeer = "Guinness"
//   const japanesebeer = "Asah1"

//   const soldOut = {
//     TextDecoration: "line-through",
//     color: "#ddd"
//   };

//   return (
//     <>
//       <h2>Beer</h2>
//       <ul>
//         <li>{dutchBeer}</li>
//         <li style={soldOut}>{irishBeer}</li>
//         <li>{japanesebeer}</li>
//       </ul>
//     </>
//   )
// }

// JSX 내에서 조건문 사용하기
// 논리연산자, 삼항연산자
// %% (AND): expr1 && expr2
// || (OR): expr1 || expr2
// ! (NOT) : !expr
// 삼항연산자 (Ternary): 조건 ? expr if true: expr if fales

// function App() {

//   //&&
//   console.log(true && 1); // 1
//   console.log(1 && 0); // 0
//   console.log(0 && 1); // 0
//   console.log(0 && flase); // 0

//   // ||
//   console.log(1 || true); // 1
//   console.log(1 || 0); // 1
//   console.log(0 || 1); // 1
//   console.log(false || 0); // 0

//   return (
//     <>
//     <h2>JSX내에서 조건문 사용하기</h2>
//     <div>{true && "Foo"}</div>
//     <div>{false || "Bar"}</div>
//     <div>{!true ? "" : "Baz"}</div>
//     </>
//   )
// }

// JSX내에서 반복문 사용하기

// function App() {
//   const arr = ["Foo", "Bar", "Baz"]

//   return (
//     <>
//     <h2>JSX에서 반복문</h2>
//     <ul>
//       {arr.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//     </>
//   )
// }

// function App() {
//   const arr = ["Foo", "Bar", "Baz"]

//   const list = arr.map((item, index) => (
//     <li key={index}>{item}</li>
//   ))

//   return (
//     <>
//       <h2>JSX 반복문</h2>
//       <ul>
//         {list}
//       </ul>
//     </>
//   )
// }

// //Q. 반복문을 사용해서 맥주 리스트를 출력

// const beers = [
//   { name: "Heineken", origin: "Netherlands" },
//   { name: "Guinness", origin: "Ireland" },
//   { name: "Asahi", origin: "Japan" }
// ]

// function App() {
//   const beers = [
//     { name: "Heineken", origin: "Netherlands" },
//     { name: "Guinness", origin: "Ireland" },
//     { name: "Asahi", origin: "Japan" }
//   ]

//   const list = beers.map((beer, index) => (
//     <li key={index}>{beer.name}, {beer.origin}</li>
//   ))

//   // const list = beers.map((beer, index) => (
// <li key={index}>{beer.name}</li>)

//   // const list = beers.mamp((beer, index) => {
//   //   return <li key={index}>{beer.name}</li>
//   // })

//   return (
//     <>
//       <h2>Beers</h2>
//       <ul>
//         {list}
//       </ul>
//     </>
//   )
// }

// # COMPONENTS (컴포넌트)
// 정의 : 복잡한 UI를 빌드하기 위한 재사용 가능하고 독립적인 부품

// 컴포넌트 기본
// 함수컴포넌트와 클래스 컴포넌트가 있다

// App 컴포넌트
// // 함수컴포넌트는 기본적으로 함수다
// function App() {

//   // 코드작성
//   console.log("App loaded")

//   //virtualDOM을 return 한다
//   return <h1>App</h1>
// }

// 컴포넌트 합성(Composition)
// 코드를 재사용 한다

// function Foo() {
//   return <li>Foo</li>
// }
// function Bar() {
//   return <li>Bar</li>
// }
// function Baz() {
//   return <li>Baz</li>
// }

// function App() {
//   return (
//     <>
//       <ul>
//         {/* 컴포넌트를 합성했다 */}
//         <Foo />
//         <Bar />
//         <Baz />
//       </ul>
//     </>
//   )
// }


// Q. 맥주표를 table element를 이용해서 완성해보세요

// function DutchBeer() {
//   return (
//     <ul>
//       <li>Heineken</li>
//       <li>Netherlands</li>
//       <li>Yes</li>
//     </ul>
//   )
// }

// function IrishBeer() {
//   return (
//     <ul>
//       <li>Guinness</li>
//       <li>Ireland</li>
//       <li>No</li>
//     </ul>
//   )
// }

// function JapaneseBeer() {
//   return (
//     <ul>
//       <li>Asahi</li>
//       <li>Japan</li>
//       <li>Yes</li>
//     </ul>
//   )
// }
// function App() {
//   return (
//     <>
//     <h2>Beers</h2>
//     <table>
//       <thead>
//         <tr>
//           <th>Brand</th>
//           <th>Origin</th>
//           <th>Available</th>
//         </tr>
//       </thead>
//       <tbody>
//        <DutchBeer/>
//         <IrishBeer/>
// 	<JapaneseBeer/>	
//       </tbody>
//     </table>
//     </>
//   )
// }

// # Props
// 컴포넌트에 전달되는 인자(parameter)

// function C(props) {
//   console.log(props);
//   const prop1 = props.prop1

//   return <li>{prop1}</li>
// }

// function App() {
//   return (
//     <>
//       <h1>App</h1>
//       <ul>
//         {/* c 컴포넌트를 재사용 했다 */}
//         <C prop1="Foo" />
//         <C prop1="Bar" />
//         <C prop1="Baz" />
//       </ul>
//     </>
//   )
// }
// function Beer(props) {
//   console.log(prop)

//   const name = props.name
//   const origin = props.origin

//   return <li>{name}, {origin}</li>
// }

// function App() {
//   return (

//     <>
//       <h1>Beers</h1>
//       <ul>

//         <Beer name="Heineken" origin="Netherlands">,
//           <Beer name="Guinness" origin="Ireland">,
//             <Beer name="Asahi" origin="japan">
//       </ul>
//            </> 
//     )}

      // object props

// function C(props) {
//   console.log(props)

//   const o = props.o

//   return (
//     <ul>
//       <li>Prop1:{o.prop1}</l1>
//       <li>Prop2:{o.prop2}</li>
//       <li>prop3:{prop3}</li>
//     </ul>
//   )
// }

// const o = { prop1: "Foo", prop2: "Bar", prop3: "Baz" }

// function App() {
//   return (
//     <>
//       <h1>o</h1>
//       <C o={o} />
//     </>
//   )
// }

// function Beer(props) {
//   const beer = props.beer

//   return (
//     <ul>
//       <li>Name: {beer.name}</li>
//       <li>Origin:{beer.origin}</li>
//       <li>Available:{beer.available ? "yes" : "No"}</li>
//     </ul>
//   )
// }

// const irishBeer = { name: "Guinness", origin: "Ireland", available: false }

// function App() {
//   return (
//     <>
//       <h1>Beer</h1>
//       <Beer beer={irishBeer} />
//     </>
//   )
// }

//Q.컴포넌트 반복적으로 출력하기
//JSX에서 Array.map()를 사용
// Object props가 전달될거다

// const beers = [
// {name:"Heineken",origin:"Natherlands"},
// {name:"Guinness",origin:"Ireland"},
// {name:"Asahi",origin:"japan"},
// ]

// function Beer(props) {
//   const beer = props.beer

//   return <li>{beer.name}, {beer.origin}</li>
// }

// function App() {

//   const list = beers.map((beer, index) => (
//     <Beer key={index} beer={beer}/>
//   ))

//   return(
//     <>
//     <h1>Beers</h1>
//     <ul>
//       {list}
//     </ul>
//     </>
//   )
// }

// children props;

// function C(props) {
//   console.log(props);

//   // children은 속성키가children이다
//   const children = props.children;

//   return (
//     <fieldset>
//       <legend>C</legend>
//       {children}
//     </fieldset>
//   )
// }

// function Foo() {
//   return <div>Foo</div>
// }

// function App() {
//   return (
//     <>
//       <h1>App</h1>
//       <C>
//         {/* Foo 컴포넌트는 C컴포넌트의 children 이다 */}
//         <Foo />
//       </C>
//     </>
//   )
// }

// Q. children props를 이용해서 맥주 리스트를 만들어 보세요

// function Beer(props) {
//   const children = props.children
//   return (
//     <div style={{bordertop:"1px soiled"}}>
//       {children}
//     </div>
//   )
// }

// function DutchBeer() {
//   return (
//     <> 
//     <h3>Heineken</h3>
//     <p>Durch beer</p>
//     </>
//   )
// }
// function IrishBeer() {
//   return (
//     <>
//     <h3>Guinness</h3>
//     <p>Irish beer</p>
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//     <h1>Beers</h1>
//     <Beer>
//       <DutchBeer/>
//     </Beer>
//     <Beer>
//       <IrishBeer/>
//     </Beer>
//     </>
//   )
// }

// Component tree

// function Foo(props) {
//   const children = props.children

//   return (
//     <fieldset>
//       <legend>Foo</legend>
//       {children}
//     </fieldset>
//   )
// }

// function Bar(props) {
//   const children = props.children

//   return (
//     <fieldset>
//       <legend>Bar</legend>
//       {children}
//     </fieldset>
//   )
// }

// function Baz(props) {
  //   return <div>Baz</div>
  // }
  
  // function App() {
    //   return (
      //     <Foo>
//       <Bar>
//         <Baz />
//       </Bar>
//     </Foo>
//   )
// }

// function Beers(props) {
//   const children = props.children

//   return (
//     <fieldset>
//       <legend>Beers</legend>
//       {children}
//     </fieldset>
//   )
// }

// function EuropeanBeers(props) {
//   const children = props.children
//   return (
//     <fieldset>
//       <legend>European beers</legend>
//       {children}
//     </fieldset>
//   )
// }

// function AsianBeers(props) {
//   const children = props.children
//   return (
//     <fieldset>
//       <legend>Asian beers</legend>
//       {children}
//     </fieldset>
//   )
// }

// function DutchBeer(props) {
//   return <li>Heineken</li>
// }
// function IrishBeer(props) { 
//   return<li>Guinness</li>
// }
// function JapaneseBeer(props) {
//   return <li>Asahi</li>
// }
// function KoreanBeer(props) {
//   return <li>Kloud</li>
// }

// function App() {
//   return (
//     <>
//       <Beers>
//         <EuropeanBeers>
//           <DutchBeer />
//           <IrishBeer />
//         </EuropeanBeers>
//       </Beers>
//       <Beers>
//         <AsianBeers>
//           <JapaneseBeer />
//           <KoreanBeer />
//         </AsianBeers>
//       </Beers>
//     </>
//   )
// }

// children에 props 전달하기

// const FooContext = createContext();

// function Foo(props) {
//   const children = props.children

//   //  함수범위(지역범위)
//   // Foo컴포넌트 내에서만 접근할 수 있다 
//   const foo = "FOO"
//   return (
//     <fieldset>
//       <legend>Foo</legend>
//       <FooContext.Provider value={foo}>
//         {children}
//       </FooContext.Provider>
//     </fieldset>

//   )
// }

// function Bar(props) {

//   const children = props.children

//   const x = useContext(FooContext);
//   console.log(x)

//   return (
//     <fieldset>
//       <legend>Bar</legend>
//       {children}
//     </fieldset>
//   )
// }

// function Baz() {
//   const x = useContext(FooContext);
  
//   return <div>Baz</div>
// }

// function App() {
//   return (
//     <Foo>
//       <Bar>
//         <Baz />
//       </Bar>
//     </Foo>
//   )
// }

// const BeersContext = createContext();

// function Beers({ children }) {

//   // 재고관리
//   const availability = {
//     guinness: false,
//     asahi: true,
//     kloud: true
//   }

//   return (
//     <>
//       <h1>Beers &#127866;</h1>
//       <BeersContext.Provider value={availability}>
//         {children}
//       </BeersContext.Provider>
//     </>

//   )
// }

// function EuropeanBeers({ children }) {
//   return (
//     <div>
//       <h2>European Beers</h2>
//       {children}
//     </div>
//   )
// }

// function IrishBeer() {
//   const availability = useContext(BeersContext);
//   return (
//     <div>
//       <h3>GUINNESS</h3>
//       <div>Available: {availability.guinness ? "Yes" : "No"}</div>
//     </div>
//   )

// }

// function AsianBeers({ children }) {
//   return (
//     <div>
//       <h2>Asian Beers</h2>
//       {children}
//     </div>
//   )

// }

// function JapaneseBeer() {
//   const availability = useContext(BeersContext);

//   return (
//     <div>
//       <h3>ASAHI</h3>
//       <div>Available: {availability.asahi ? "Yes" : "No"}</div>
//     </div>
//   )
// }

// function KoreanBeer() {
//   const availability = useContext(BeersContext);
//   return (
//     <div>
//       <h3>KLOUD</h3>
//       <div>Available: {availability.kloud ? "Yes" : "No"}</div>
//     </div>
//   )

// }

// function App() {
//   return (
//     <>
//       <Beers>
//         <EuropeanBeers>
//           <IrishBeer />
//         </EuropeanBeers>
//         <AsianBeers>
//           <JapaneseBeer />
//           <KoreanBeer />
//         </AsianBeers>
//       </Beers>
//     </>
//   )
// }

// # Event

// function App() {
//   function handleClick(e) {
//     console.log(e.target)
//   }

//   // atttibute : onEventname={callback}
//   // addEventListener("click", callback)

//   return (
//     <>
//     <h1>Click Event</h1>
//     <button onClick={handleClick}>Button</button>
//     </>
//   )
// }

// callback에 인자를 전달하지 않을 때
// document.body.addEventListener("click" ,f)
// function f(e) {
//   console.log(e)
// }

// 위에 것과 같음 (익명함수 사용)
// document.body.addEventListener("click" ,(e) => {
//   console.log(e)
// })

// callback에 인자가 있을 때
// document.body.addEventListener("click" ,() => {
//   f("Foo")
// })

// function f(foo) {
//   console.log(foo)
// }

// function App() {};

// function App() {
//   function handleClick(foo) {
//     console.log(foo)
//   }

//   return (
//     <>
//     <h1>Click Event</h1>
//     <button onClick={() => handleClick("Foo")}>Button</button>
//     </>
//   )
// }

// function App() {
//   function handleClick(x) {
//     console.log(x)
//   }

//   // 이벤트에서 다른 element가 같은 callback을 사용할 때

//   return (
//     <>
//       <h1>Accordion</h1>
//       <button onClick={() => handleClick("foo")}>Foo</button>
//       <button onClick={() => handleClick("Bar")}>Bar</button>
//       <button onClick={() => handleClick("Baz")}>Baz</button>
//     </>
//   )
// }

// change 이벤트

// function App() {
//   function handleChange(e) {
//     console.log(e.target.value)
//   }

//   // change
//   // keyup

//   return (
//     <>
//       <h1>change</h1>
//       <input type="text" onChange={handleChange} />
//     </>
//   )
// }

// function App() {

//   function handleChange(e) {
//     const name = e.target.name
//     const value = e.target.value

//     console.log(name ,value)
//   }
//   return (
//     <form>
//       <div>
//         <h1>Login</h1>
//         <label htmlFor="Username">Username</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           autoComplete="off"
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="Password">Password</label>
//         <input
//           type="text"
//           id="password"
//           name="password"
//           autoComplete="off"
//           onChange={handleChange}
//         />
//       </div>
//     </form>
//   )
// }

// submit event
// function App() {
//   function handleSubmit(e) {
//     // form이 제출되지않음
//     e.preventDefault();

//     console.log(".")
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Form</h1>
//       <p>...</p>
//       <button type="submit">submit</button>
//     </form>
//   )
// }

// // # DOM 업데이트 
// function App() {
//   // const [state, setState] = useState(initialValue);
//   // state: 변수
//   // setState : state를 업데이트 하는 매서드
//   // initialValue: state의 초기값

//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>Count</h1>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Add</button>
//     </>
//   )
// }

// // state Hook 없이 DOM업데이트 하기
// function App() {
//   let count = 0;

//   // DOM을 업데이트하기 위해서는 virtualDOM을 다시 return 해야한다
//   // virtualDOM을 다시 return하기 위해서는 컴포넌트를 다시 실행해야 한다
//   // setState는 컴포넌트를 다시 실행한다
//   // DOM이 업데이트 된다
//   function handleClick(e) {
//     count++;
//     console.log(count)
//   }

//   return (
//     <>
//     <h1>Count</h1>
//     <p>{count}</p>
//     <button onClick={handleClick}>add</button>
//     </>
//   )
// }

// 시계
// function App() {


//   const initialTime = new Date().toLocaleTimeString()
//   const [time, setTime] = useState(initialTime)

//   setTimeout(() => {
//     const updatedTime = new Date().toLocaleTimeString()
//     setTime(updatedTime)
//   }, 1000)

//   return (
//     <>
//     <h1>시계</h1>
//     <p>{time}</p>
//     </>
//   )
// }

// function App() {

//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>Count</h1>
//       <p>{count}</p>
//       <button onClick={() => setCount(count - 1)}>-</button>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </>
//   )
// }

//Q. Subscribe
// function App() {
//   const [subscribe, setSubscribe] = useState(false);

//   return (
//     <>
//       <h1>구독과 좋아요 알람설정까지 부탁드려요</h1>
//       <button onClick={() => setSubscribe(!subscribe)}>
//         {!subscribe ? "구독하기" : "구독중"}
//       </button>
//     </>
//   )
// }

// function App() {
//   const [subscribe, setSubscribe] = useState(false);

//   function handleClick(e) {
//     if (subscribe) { // 구독취소
//       setSubscribe(false)
//     } else {  // 구독하기
//       setSubscribe(true)
//     }
//   }

//   return (
//     <>
//       <h1>구독하기</h1>
//       <button onClick={handleClick}>
//         {!subscribe ? "구독하기" : "구독중"}
//       </button>
//     </>
//   )
// }

// function App() {
//   const [subscribe, setSubscribe] = useState(false);
//   const [subscribers, setSubscribers] = useState(1000)

//   function handleClick(subscribe) {
//     if (subscribe) { // 구독취소
//       setSubscribe(false);
//       setSubscribers(subscribers - 1)
//     } else { // 구독시작
//       setSubscribe(true)
//       setSubscribers(subscribers + 1)
//     }
//   }
//   return (
//     <>
//       <h1>subscribe</h1>
//       <p>구독자 수 :{subscribers}</p>
//       <button onClick={() => handleClick(subscribe)}>
//         {!subscribe ? "구독하기" : "구독중"}</button>
//     </>
//   )
// }

// # Form 다루기

// function App() {
//   const [username, setUsername] = useState("")

//   function handleSubmit(e) {
//     e.preventDefault()
//     console.log("username:", username)
//     setUsername("")
//   }

//   function handleChange(e) {
//     const value = e.target.value
//     const username = value.trim()

//     setUsername(username);
//     // !"" // true
//     // !"foo" // false
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h1>로그인</h1>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={handleChange}
//         />
//         <button
//           type="Submit"
//           disabled={!username}
//         >
//           로그인
//         </button>
//       </form>
//     </>
//   )
// }

// Q. Password toggle
// function App() {
//   const [type, setType] = useState("")

//   function handleClick() {
//     if (type === "password") {
//       setType("text")
//     } else {
//       setType("password")
//     }
//   }

//   return (
//     <>
//       <form>
//         <h1>Login</h1>
//         <input
//           type={type} placeholder="Password" />
//         <button type="button" onClick={handleClick}>
//           {type === "password" ? "Show" : "Hide"}</button>
//       </form>
//     </>
//   )
// }

// function App() {
//   const [beers, setBeers] = useState([]);

//   function handleChange(e) {
//     const name = e.target.value

//     if (!name) {
//       setBeers({})
//       return
//     }

//     const DATA = [
//       { id: "b1", name: "Heineken" },
//       { id: "b2", name: "Guinness" },
//       { id: "b3", name: "Kloud" },
//       { id: "b4", name: "KGB" },
//       { id: "b5", name: "Asahi" },
//     ]

//     const updatedBeers = DATA.filter(beer => {
//       // String.startsWith(p) : String이 P로 시작하면 true 아니면 false를 return 한다
//       if (beer.name.startsWith(name)) {
//         return beer;
//       }
//     })

//     console.log(updatedBeers)

//     setBeers(updatedBeers)
//   }

//   const beerList = beers.map((beer, index) => (
//     <li key={index}>{beer.name}</li>
//   ))

//   return (
//     <>
//       <h1>Live Search</h1>
//       <input
//         type="text"
//         onChange={handleChange}
//         placeholder="Search"
//       />
//       <ul>
//         {beerList}
//       </ul>
//     </>
//   )
// }

// Beer form: create
// const initialBeers = [
//   { id: "b1", name: "Heineken" }
// ]

// function App() {
//   const [beers, setBeers] = useState(initialBeers);
//   const [name, setName] = useState("")

//   function handleSubmit(e) {
//     e.preventDefault()
    
//     const newBeer = {id: Math.random(), name: name}
//     //beers에 newBeer를 추가한다
//     const updatedBeers = [...beers, newBeer]

//     // beers state를 업데이트 한다
//     setBeers(updatedBeers)
//     setName("")
//   }

//   function handleChange(e) {
//    const name = e.target.value
//    setName(name)
//   }

//   const beerList = beers.map(beer => (
//     <li key={beer.id}>
//       {beer.name}
//     </li>
//   ))

//   return (
//     <>
//       <h1>Beers</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Gunniess"
//           onChange={handleChange}
//           value={name}
//         />
//         <button
//           type="submit"
//           disabled={!name}
//         >
//           Add
//         </button>
//       </form>
//       <ul>
//         {beerList}
//       </ul>
//     </>
//   )
// }

// Beer form delete
// const initialBeers = [
//   { id: "b1", name: "Heineken"},
//   { id: "b2", name: "Gunniess"},
//   { id: "b3", name: "Kloud"}
// ]

// function App() {
 
//   const [beers, setBeers] = useState(initialBeers)

//   function deletebeer(beerId) {
//     const updatedBeers = beers.filter(beer => {
//       if (beer.id!== beerId) {
//         return beer;
//       }
//     })
//     console.log(beerId)
//     setBeers(updatedBeers)
//   }

//   const beerList = beers.map(beer => (
//     <li key={beer.id}>
//       {beer.name} {" "}
//       <button onClick={() =>deletebeer(beer.id)}>Delete</button>      
//     </li>
//   ))

//   return (
//     <>
//       <h1>Beers</h1>
//       <form>
//         <input
//           type="text"
//           placeholder="Gunniess"
//           disabled={true}
//         />
//         <button
//           type="submit"
//           disabled={true}
//         >
//           Add
//         </button>
//       </form>
//       <ul>
//         {beerList}
//       </ul>
//     </>
//   )
// }

// // beer form: update
// const initialBeers = [
//   { id: "b1", name: "Heineken", available: true },
//   { id: "b2", name: "Gunniess", available: false },
//   { id: "b3", name: "Kloud", available: true }
// ]

// function App() {

//   const [beers, setBeers] = useState(initialBeers)

//   function editbeer(beerId) {
//     console.log(beerId)

//     const editedBeers = beers.map(beer => {
//       if (beer.id === beerId) {
//         return { ...beer, available: !beer.available }
//       }
//       return beer;
//     })
//     setBeers(editedBeers)
//   }

//   const beerList = beers.map(beer => (
//     <li key={beer.id}>
//       {beer.name} {" "}
//       <button onClick={() => editbeer(beer.id)}>
//         {beer.available ? "판매중" : "품절"}
//       </button>
//     </li>
//   ))

//   return (
//     <>
//       <h1>Beers</h1>
//       <form>
//         <input
//           type="text"
//           placeholder="Gunniess"
//           disabled={true}
//         />
//         <button
//           type="submit"
//           disabled={true}
//         >
//           Add
//         </button>
//       </form>
//       <ul>
//         {beerList}
//       </ul>
//     </>
//   )
// }

// const initialBeers = [
//   { id: "b1", name: "Heineken", available: true },
//   { id: "b2", name: "Gunniess", available: false },
//   { id: "b3", name: "Kloud", available: true }
// ]

// function App() {

//   const [beers, setBeers] = useState(initialBeers);
//   const [name, setName] = useState("")

//   function handleSubmit(e) {
//     e.preventDefault()

//     const newBeer = { id: Math.random(), name: name }

//     const updatedBeers = [...beers, newBeer]

//     setBeers(updatedBeers)
//     setName("")
//     console.log(newBeer)
//   }

//   function handleChange(e) {
//     const name = e.target.value
//     setName(name)
//   }

//   function editbeer(beerId) {
//     console.log(beerId)

//     const editedBeers = beers.map(beer => {
//       if (beer.id === beerId) {
//         return { ...beer, available: !beer.available }
//       }
//       return beer;
//     })
//     setBeers(editedBeers)
//   }

//   function deletebeer(beerId) {
//     const updatedBeers = beers.filter(beer => {
//       if (beer.id !== beerId) {
//         return beer;
//       }
//     })
//     console.log(beerId)
//     setBeers(updatedBeers)
//   }

//   const beerList = beers.map(beer => (
//     <li key={beer.id}>
//       {beer.name} {" "}
//       <button onClick={() => deletebeer(beer.id)}>Delete</button>
//       <button onClick={() => editbeer(beer.id)}>
//         {!beer.available ? "판매중" : "품절"}
//       </button>
//     </li>
//   ))
//   console.log(beerList)

//   return (
//     <>
//       <h1>Beers</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Gunniess"
//           onChange={handleChange}
//           value={name}
//         />
//         <button
//           type="submit"
//           disabled={!name}
//         >
//           Add
//         </button>
//       </form>
//       <ul>
//         {beerList}
//       </ul>
//     </>
//   )
// }

// const initialBeers = [
//   { id: "b1", name: "Heineken", available: true },
//   { id: "b2", name: "Gunniess", available: false },
//   { id: "b3", name: "Kloud", available: true }
// ]

// function App() {

//   const [beers, setBeers] = useState(initialBeers)
//   console.log(beers)

//   function addbeer(name) {
//     const newBeer = { id: Math.random(), name, available: true }

//     const updatedBeers = [...beers, newBeer]
//     setBeers(updatedBeers)
//   }
//   function editbeer(beerId) {
//     const editedBeers = beers.map(beer => {

//       if (beer.id === beerId) {
//         return { ...beer, available: !beer.available }
//       }
//       return beer;
//     })

//     setBeers(editedBeers)

//   }
//   function deleteBeer(beerId) {
//     const updatedBeers = beers.filter(beer => {
//       if (beer.id !== beerId) {
//         return beer;
//       }
//     })

//     setBeers(updatedBeers)

//   }

//   const beerList = beers.map(beer => (
//     <Beer
//       key={beer.id}
//       beer={beer}
//       editbeer={editbeer}
//       deleteBeer={deleteBeer}
//     />
//   ))

//   return (
//     <>
//       <h1>Beers</h1>
//       <Form addbeer={addbeer} />
//       <ul>
//         {beerList}
//       </ul>
//     </>
//   )
// }

// function Form({addbeer}) {

//   const [name, setName] = useState("")

//   function handleSubmit(e) {
//     e.preventDefault();
//     addbeer(name)
//     setName("")
//   }

//   function handleChange(e) {
//     const name = e.target.value
//     setName(name)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text"
//         placeholder="Guinness"
//         onChange={handleChange}
//         value={name}
//       />
//       <button type="submit"
//         disabled={!name}
//       >
//         Add
//       </button>
//     </form>
//   )
// }

// function Beer({ beer, editbeer, deleteBeer }) {
//   return <li>{beer.name}
//     <div>
//       <button onClick={() => deleteBeer(beer.id)}>
//         delete
//       </button>
//       <button onClick={() => editbeer(beer.id)}>
//         {beer.available ? "판매중" : "품절"}
//       </button>
//     </div>
//   </li>
// }

// function App() {
//   const [active, setActive] = useState(false);

//   const style = {
//     position: "fixed",
//     bottom: "0",
//     left: "0",
//     width: "100%",
//     // dynamic style
//     maxHeight: active ? "100px" : "0",
//     backgroundColor: "#eee",
//     transition: "0.2s",
//   }

//   const drawer = (
//     <div style={style} onClick={() => setActive(false)}>
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//     </div>
//   )

//   return (
//     <>
//       <h1>Drawer</h1>
//       <button onClick={() => setActive(true)}
//       >
//         button
//       </button>
//       {drawer}
//     </>
//   )
// }

// function App() {
//   const [active, setActive] = useState(false)

//   const style = {
//     sideBar: {
//       position: "fixed",
//       backgroundColor: "#fff",
//       top: "0",
//       left: active ? "0" : "-200px",
//       zIndex: "1",
//       width: "200px",
//       height: "100%",
//       transition: "0.2s",
//     },
//     overlay: {
//       position: "fixed",
//       top: "0",
//       left: "0",
//       width: "100%",
//       height: "100%",
//       backgroundColor: "rgba(0 0 0 / 0.2)",
//       display: active ? "block" : "none"
//     }
//   }

//   return (
//     <>
//       <h1>Navigation</h1>

//       <button onClick={() => setActive(true)}
//       >
//         button
//       </button>

//       <nav style={style.sideBar}>
//         <ul>
//           <li>list item</li>
//           <li>list item</li>
//           <li>list item</li>
//         </ul>
//       </nav>

//       <div
//         style={style.overlay}
//         onClick={() => setActive(false)}
//       >
//       </div>
//     </>
//   )
// }

// function App() {
//   const [index, setIndex] = useState(0)

//   console.log(index)

//   const images = ["foo.jpg", "bar.jpg", "baz.jpg"]

//   const contanier = {
//     width: "100px",
//     height: "100px",
//     backgroundColor: "#ddd",
//     display: "inline-flex",
//     transform: `translatex(-${index * 100}px)`,
//     transition: "0.2s"
//   }

//   const item = {
//     width: "100%",
//     height: "100%",
//     border: "1px dashed",
//     flexShrink: "0",
//     display: "flex",
//     justfyContent: "center",
//     alignItems: "center"
//   }

//   const list = images.map(image => (
//     <div key={image} style={item}>
//       {image}
//     </div>
//   ))

//   return (
//     <>
//       <h1>Carousel</h1>

//       <div className="">
//         <h3>Images</h3>
//         <div className="contanier" style={contanier}>
//           {list}
//         </div>
//       </div>

//       <div className="">
//         <h3>Navigation</h3>
//         <button
//           onClick={() => setIndex(index - 1)}
//           style={{ visibility: index === 0 && "hidden" }}
//         >
//           Prev
//         </button>
//         <button
//           onClick={() => setIndex(index + 1)}
//           style={{ visibility: index === 2 && "hidden" }}
//         >
//           Next
//         </button>
//       </div>

//       <div className="">
//         <h3>Indicator</h3>
//         <div>
//           {images.map((image, dot) => (
//             <span
//               key={dot}
//               style={{color: dot===index && "red"}}
//             >
//               *
//             </span>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

 // # Router
// function Home() {
//   return <h1>Home</h1>
// }
// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p1">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p2">Post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// function Post() {
//   // url로 전달된 parameter를 가지고 있는 객체를 return 한다
//   const params = useParams()
//   const postId = params.postId

//   console.log(params)

//   return (
//     <>
//       <h1>Post</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// function Contact() {
//   return <h1>Contact</h1>
// }
// function NotFound() {
//   return <h1>404 NotFound</h1>
// }

// function App() {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/posts">Posts</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/posts" element={<Posts />} />
//         <Route path="/post/:postId" element={<Post />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   )
// }

// const AuthContext = createContext()

// function AuthProvider({ children }) {
//   // AuthProvider의 children은 user에 접근가능하다
//   const [user, setUser] = useState(null)

//   function signIn(username) {
//     setUser(username)
//   }

//   function signOut() {
//     setUser(null)
//   }

//   const value = { user, signIn, signOut }

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// function Home() {

//   return <h1>Home</h1>
// }
// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p1">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p2">Post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// function Post() {
//   const auth = useContext(AuthContext)

//   const params = useParams()
//   const postId = params.postId

//   if (!auth.user) { // 인증구현
//     // 로그인 하지 않은 경우 페이지를 볼수 없음 
//     return <p>Unauthorized</p>
//   }

//   return (
//     <>
//       <h1>Post</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// function NotFound() {
//   return <h1>404 NotFound</h1>
// }

// function Login() {
//   const auth = useContext(AuthContext)
//   const [username, setUsername] = useState("")

//   function handleSubmit(e) {
//     e.preventDefault()
//     auth.signIn(username)
//   }

//   const loginTemplate = (
//     <form onSubmit={handleSubmit}>
//       <h1>Sign In</h1>
//       <input type="text"
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   )

//   const logoutTemplate = (
//     <div>
//       <h1>Sign Out</h1>
//       <p>{auth.user}</p>
//       <button onClick={auth.signOut}>Submit</button>
//     </div>
//   )

//   return auth.user ? logoutTemplate : loginTemplate
// }

// function App() {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/posts">Posts</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//         </ul>
//       </nav>
//       <AuthProvider>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="posts" element={<Posts />} />
//           <Route path="post/:postId" element={<Post />}
//           />
//           <Route path="login" element={<Login />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </AuthProvider>
//     </Router>
//   )
// }

//  # fetch data (데이터 요청하기)

// function App() {
//   const [count, setCount] = useState(0)
  
//   //useEffect(Hook)
//   // 비동기적으로 작동한다

//   // 사용방법
//   // useEffect(callback): 컴포넌트가 실행될 떄 callback이 실행된다
//   // useEffect(callback, []): 컴포넌틍늬 최초 실행시에만 callback이 실행된다
//   // useEffect(callback, [dep1, ...]):컴포넌트의 최초 실행시, dependency가 
//   // 업데이트 될 때마다  callback이 실행된다 

//   useEffect(() => {
//     const time = new Date().toLocaleTimeString()
//     console.log(time)
//   },[])
  
//   return (
//     <>
//     <h1>App</h1>
//     <p>App이 {count}번 렌더링 되었습니다</p>
//     <button onClick={() => setCount(count + 1)}>Add</button>
//     </>
//   )
// }

// API서버가 2초 뒤에 응답을 준다고 가정한다 
// function fakeApi() {
//   const beers = [
//     { id: "b1", name: "Heineken" },
//     { id: "b2", name: "Guinness" },
//     { id: "b3", name: "Asahi" },
//   ]

//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res(beers)
//     }, 2000)
//   })

//   return promise
// }

// function App() {
//   const [beers, setBeers] = useState(null)
//   const [error, setError] = useState(null)
//   const [isLoaded, setIsLoaded] = useState(false)

//   useEffect(() => {
//     fakeApi()
//       .then(data => {
//         setBeers(data)
//       })
//       .catch(error => {
//         setError(error)
//       })
//       .finally(() => setIsLoaded(true))
//   }, [])

//   if (error) {
//     return <p>failed to fetch</p>
//   }
//   if (!isLoaded) {
//     return <p>fetching data...</p>
//   }
//   return (
//     <>
//       <h1>Beers</h1>
//       <ul>
//         {beers.map(beer => (
//           <li key={beer.id}>{beer.name}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

