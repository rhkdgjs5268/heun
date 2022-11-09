// Javascript 기초

// Date Type
// 종류: Number ,Boolean ,null ,undefined ,String ,Blgint .symbol

// ###Number
// 값(value) ,숫자(소수점포함) ,NaN(Not a number) ,-Infinity ,+Infinity

// console.log(3)
// console.log(3.14)

// console.log(NAN)
// console.log(typeof NaN)
// console.log(100/"Hello")/
// console.log("Hello" -1)

// console.log(Infinity)
// console.log(typeof Infinity)
// console.log(2 / 0)
// console.log(-2 / 0)

// Boolean
// 값: true or false
// console.log(true)
// console.log(false)
// console.log(typeof true)
// console.log(typeof false)

// ### Null
// 의도적으로 "없음" , "무효" 를 나타낸다
// console.log(null);  // null
// console.log(typeof null); // object

// ### undefined
// "정의되지않음"
// var x;
// console.log(x); // undefined
// console.log(typeof x); // undefined

// var x = null;
// console.log(x);

// ### String

// console.log("hello");
// console.log('hello');

// console.log(typeof "hello");
// console.log("");
// console.log("2022");
// console.log(typeof "2022");

// ### Bigint
// -(2^53 -1)~(2^53 -1)범위 밖의 숫자를 표현할때 사용한다
// 9000조

// ### Symbol
// E56에서 추가한 데이터 타입
// 객체의 속성키로 사용할수있다

// 연산자(Operater)
// 종류:할당연산자 , 수리연산자, 비교연산자, 논리연산자, 타입연산자

// ### 할당연산자(assignment Operater)
// 종류: =, +=, -=, *=, /=, %=, **=

// =연산자 
// vae x =1;
// console.log(x);

// +=
// var x = 1;
// x += 2; // (x + x =2)
// console.log(x);

// var x =1;
// x *= 2;
// console.log(x);

// ### 수리연산자(arithmetic Operater)
// 종류: + ,- ,* , /, ++, --, **, %

// var x = 1;
// x++ // 1을 증가시킨다
// console.log(x);

// var x = 1;
// x--; // 1을 감소시킨다
// console.log(x);

// console.log(2 ** 8);
// console.log(9 & 3);

// ### 비교연산자(Comparison Operater)
// 종류: ==, ===, !=, !==, >, <, >=, <=, ? 
// Boolean 을 return 한다

// ==
// value만 비교한다

// console.log(1 == 1);
// console.log(1 == "1");
// console.log(0 == false);
// console.log(1 == true);
// console.log(null == undefined);
// console.log("" == false);
// console.log("" == 0);

// ===
// value 와 type 모두 비교한다
// console.log(1 ==="1"); // false
// console.log(0 === false); // false
// console.log(null === undefined); // false

// !=
// value 만 비교를 한다

// console.log(1 != "1"); // false
// console.log(0 != true); // true

// !==
// value 와 type 모두 비교한다
// 둘중에 하나라도 다르면 true

// console.log(1 !== "1"); // true
// console.log(0 !== false); // true

// ?(상황연산자 ,Ternar)
// 조건 ? 참일때 : 거짓일때

// var r = 1 > 0 ? "foo" : "bar"

// console.log(r);

// ### 논리 연산자(Logical operater)
// 종류: &&, ||, !
// %% 그리고

// var x  = 1>0 && 1<2;
// console.log(x)

// || 또는

// var x =1>0 || 1<-1
// console.log(x)

// ! (부정)

// console.log(!true);
// console.log(!false);
// console.log(!(0>1));

// var x = 1 > 0;
// console.log(!x);

// ### 타입 연산자(typeop operater)
// 종류 :typeof, instanceof
// value 의 타입을 return한다

// console.log(typeof 0);
// console.log(typeof null);
// console.log(typeof undefined);

// 조건문 (condition)
// if/eles/elesif
//switch

// if/eles/elesif

// if (단독으로 쓰일때)
//  if(1 > 0){
//  console.log("foo")
//  }

// if(1 > 2){ //fales일 경우 실행되지않음 
// console.log("foo")
// }

// if (1>0){ //true
//    console.log("foo")
// }else{//fales
//    console.log("bar")
// }

// if(1>0){// 조건이 참인 경우
//    console.log("foo")
// }else if(1>2){// 조건이 참인 경우
//    console.log("bar")
// }else{// 참이 없을 경우
//    console.log("baz")
// }

// 조건 부분에 boolean이 아닌 데이터 타입이 올 경우

// console.log(1>0)// 비교연산자는 boolean을 return 한다
// if (true){ 
//    console.log("foo")
// }

// if(""){// 조건에서 빈문자를 fales로 하급한다
//    console.log("foo")
// }

// if("hello"){// 빈문자가 아닌경우 true로취급한다
//    console.log("foo")
// }

// if(null){
//    console.log("foo")
// }

// if(undefined){
//    console.log("foo")
// }

// vae x;

// if(x){// undifined는 fales로 취급한다
//    console.log("foo")
// }

// if(0){ // fales
//    console.log("foo")
// }

// if(-2){// true
//    console.log("bar")
// }

// if(1){// true
//    console.log("baz")
// }

// Switch

// var result;

// switch ("3") {
//    case 1:
//       result = "foo";
//       break;
//    case 2:
//       result = "bar";
//       break;
//    case 3:
//       result = "baz";
//       break;

//    default:
//       result = "null";
// }
// console.log(result);

// 반복문 (loof)
//for (이것을 더 주로 사용)
//while

// for 반복문

// var sum = 0;

//  //1에서 10까지 더하기
//  for (var i=1; i<=10; i++ );{
//    sum +=i;
//  }

//  console.log(sum);

// for문에서 break와 contune키워드

// for (var i = 0; i <= 10; i++) {
//    if (i === 5) {
//       break;
//    }
//    console.log(i);
// }


// for(var i=1; i<=10; i++){
//    if(i===5){ // 건너뛴다
//       continue;
//    }
//    console.log(i);
// }

// while

// var sum = 0;

// var i = 1;
// while(i <=10){
//    sum += i;
//    i++;
// }

//  console.log(sum);

// Q. 1부터 10까지의 숫자를 짝수만 출력

// for (var i=2; i<=10; i+=2){
//    console.log(i);
// }

// "use strict";

// for (var i=2; i<=10; i++){
//    if(i%2 === 0){
//       console.log(i);
//    }
// }


// # 함수 (function)
// 호출 될때만 실행되는 한 블록의 코드

// 함수를 선언하는 방식
// 1 함수 선언식
// 2 함수 표현식
// 3 화살표 함수

//함수 선언식
// function f(){ // function 함수이름() {block}
//    //함수 정의 (function definition)
//    console.log("foo");
// }

//호출
// f()

// 함수 표현식
// 변수에 익명함수를 할당한다
// var f = function () {
//    console.log("foo");
// }

//호출
// f()

// 화살표함수
// var f = () =>{
//    console.log("foo")
// }

// 호출
// f()

// hoisting(게양)
// 함수 선언식에만 적용된다

// 함수호출
// f();

// 함수선언
// 함수의 선언이 호출 시점보다 위로 올라간다
// function f(){
// console.log("foo");
// }

// console.log(f)// unedfined
// f();

//hositing이 되지 않는다
// var f= () =>{
//    console.log("foo")
// }

// 함수에서의 return

// function f() {
//    console.log("foo")
//    return;
//    //return 아래의 코드는 실행되지 않는다
//    console.log("bar")
// }

// f();

// function f(){
//    return console.log("foo")
//    console.log("bar")
// }

// f();

// 함수에서의 인자 (parameter , argument)

// function f(data) { // data + parameter
//    console.log("argument: " + data)
// }

// f("foo") // "foo" + argument

// function f( a , b){ 
//    return a+b;
// }
//  console.log(f(1,2));

// Q. 사칙연산 함수 만들기
// 함수 이름은  add(+) , substract(-) , multiply(*), divide(/)
// 함수의 return 값을 변수에 담아 풀기

// function add(a ,b){
//    return a + b;
// }

// function substract(a,b) {
//    return a - b;
// }

// function multiply(a,b) {
//    return a * b;
// }

// function divide(a,b){
//    return a / b;
// }

// var a = add(1, 2);
// var b = substract(1, 2);
// var c = multiply(1, 2);
// var d = divide( 1,2);

// console.log(a,b,c,d);

// Callback
// 다른함수의 인자가 되는 함수

// function f1(Callback) {// callback
//    var r = Callback()// f1 함수의 내부에서 실행된다
//    console.log(r)
// }

// function f2(){
//    return"foo"
// }

// // f1(f2()) 잘못된 방법 

// f1(f2);// f2는 f1의 callback이다

// function f1(callback){ // f1 함수의 내부에서 실행된다
//    var r = callback();
//    console.log(r)
// }

// f1(function(){ // 익명함수가 callback 일때
//    return "foo"
// })

// function f1(callback){
//    var r =callback();
//    console.log(r);
// }

// function f2(){
//    return "Foo";
// }

// f1(function(){ // 익명함수가 callback이다
//    return f2()
// })

// function f1(cb) {
//   let r = cb();
//   console.log(r);
// }

// function f2() {
//   return "foo";
// }

// // f1(f2());
// f1(f2);

// function f(callback) {
//   // f함수 내부에서 callback함수를 실행
//   let r = callback()
//   console.log(r);
// }

// // callback이 익명함수 일때
// f(function () {
//   return "foo";
// })

// callback에 인자가 있을 때
// function f1(callback) {
//   let r = callback()
//   console.log(r)
// }

// function f2(a, b) {
//   return a + b;
// }

// // f1(f2(1, 2));
// f1(function () {
//   return f2(1, 2);
// })

// function f1(callback) {
//   var r = callback(1,2);
//   console.log(r);
// }

// function f2(a, b) {
//   return a + b;
// }

// f1(function (x, y) {
//   return f2(x, y);
// })

// # 변수의 종류
// var, let, const

// var
// 변수를 선언하고 값(value)을 정의한다
// var foo = "bar";
// console.log(foo);

// var foo; // 선언
// foo = "bar"; // 정의

// console.log(foo);

// var foo; // 선언  
// foo = "bar"; // 정의
// foo = "baz"; // 다시 정의

// console.log(foo);

// var foo = "bar"; // 선언, 정의
// var foo = "baz"; // 재선언, 재정의

// console.log(foo);

// let
//  let foo = "bar"; // 초기화
//  console.log(foo);

// let foo; // 선언
// foo = "bar"; // 정의

// console.log(foo)

// let foo; // 선언
// foo = "bar"; // 정의
// foo = "baz"; // 다시 정의

// console.log(foo);

// let foo = "bar"; // 선언
// let foo = "baz"; // 재선언 불가

// console.log(foo);

// const (constant, 상수)

// const foo = "bar"; // 선언 및 정의 (초기화)
// console.log(foo)

// const foo; // 선언
// foo = "bar"; // 정의 따로 불가

// console.log(foo);

// const foo = "bar";
// const foo = "baz"; // 재선언 불가

// console.log(foo);

// # 변수의 범위(scope)
// 전역 범위: 함수나 블록 밖에서 선언된 변수의 범위
// 블록 범위: 블록 안에서 선언된 변수의 범위
// 함수(지역) 범위: 함수안에서 선언된 변수의 범위

// 전역범위(global scope)
// const foo = "bar";

// f();
// function f() {
//   // 함수 내부에서 전역변수에 접근 가능
//   console.log(foo);
// }

// { // block (조건문, 반복문)
//   // 블록 내부에서 전역변수에 접근 가능
//   console.log(foo);
// }

// // 함수, 블록이 아닌 범위에서 전역변수에 접근 가능
// console.log(foo)

// 함수(지역) 범위

// f()
// function f() {
//   // 함수(지역) 범위를 갖는 변수
//   let foo = "bar";

//   // 함수 내부에서 접근 가능
//   console.log(foo);
// }

// // 함수 외부에서 지역변수에 접근 불가
// console.log(foo); // foo is not defined

// 블록 범위(block)
// {
//   var foo = "foo";
//   let bar = "bar";
//   const baz = "baz";
// }

// console.log(foo) // ok
// console.log(bar) // error
// console.log(baz) // error

// 함수의 범위
// 전역 범위: 블록 또는 함수 외부에서 선언된 함수의 범위
// 블록 범위: 블록 안에서 선언된 함수의 범위
// 함수(지역) 범위: 함수 안에서 선언된 함수의 범위 

// function f() {}

// // 블록 또는 함수 외부에서 접근
// console.log(f);

// // 블록 내부에서 접근
// { console.log(f); }

// // 함수 내부에서 접근
// x()
// function x() {
//   console.log(f)
// }

// f1()
// function f1() {
//   // 지역범위를 갖는 함수
//   function f2() {}
//   console.log(f2);
// }

// console.log(f2); // error

// { // 블록안에서 선언된 함수
//   function f() {}
// }

// console.log(f); // ok

// Q. 콘솔에 현재시간을 알려주는 시계를 만들어보세요
// setInterval(callback, ms)
// ms간격으로 callback 실행
// 1s = 1000ms
// console.log(new Date().toLocaleTimeString());

// setInterval(function () {
//   let time = new Date().toLocaleTimeString();
//   console.log(time);
// }, 1000)

// # Array (배열)
// 한 개 이상의 값을 가진 상태

// let arr = [10, 20, 30];

// console.log(arr);
// // 배열의 0번째(index) value에 접근
// console.log(arr[0]) // 10
// console.log(arr[2]) // 30
// console.log(arr.length) // 배열의 value의 갯수

// let arr = ["foo", 20, "baz"];

// // console.log(arr);

// // update
// // arr[1] = "bar";
// // console.log(arr);

// // add
// arr[3] = 40;
// console.log(arr);

// 반복문으로 Array 순회하기

// let arr = ["foo", "bar", "baz"];

// for (let i=0; i<arr.length; i++) {
//   console.log(arr[i]);
// }

// Q. 1부터 10까지의 숫자로 이루어진 배열을 만들어보세요
// let arr = [];

// for (let i=0; i<10; i++) {
//   arr[i] = i+1;
// }

// console.log(arr);

// # Object (객체)
// 관련된 데이터와 함수의 집합

// cat object를 만든다
// const cat = {
//   // key(property, 속성): value
//   name: "Kitty",
//   age: 2,
//   home: null,
//   // value가 함수인 것을 메서드(method)라고 부른다
//   sound: function () {
//     return "meow";
//   }
// }

// // 객체에 접근
// console.log(cat);
// // cat의 name속성에 접근
// console.log(cat.name);
// // cat의 age속성에 접근
// console.log(cat.age);
// // cat에 존재하지 않는 속성
// console.log(cat.color); // undefined
// // string을 사용해서 cat의 home속성에 접근
// console.log(cat["home"]) // null
// // cat의 sound 메서드에 접근
// console.log(cat.sound())

// 객체를 업데이트 하기

// const cat = {
//   name: "Kitty",
//   age: 2,
//   home: null,
//   sound: function () {
//     return "meow";
//   }
// }

// cat의 home속성값 변경
// cat.home = "Mapo-gu";
// console.log(cat);

// cat의 age속성 삭제
// delete cat.age;
// console.log(cat);

// cat에 새로운 속성 color 추가
// cat.color = "Mixed"
// console.log(cat);

// Q. 숫자를 대입하면 4칙연산의 결과값을 return하는 함수를 만들어보세요 

// function calc(a, b) {

//   return {
//     add: a + b,
//     substract: a - b,
//     multiply: a * b,
//     divide: a / b
//   }
// }

// let r = calc(1, 2);
// console.log(r)

// #  에러와 에러처리

// app crashed
// f()

// try catch 구문을 이용한 에러 처리

// try {
//     //코드를 작성한다
//     f();
// } catch (error) {
//     // 에러가 발생할경우 catch 블록에서 처리한다
//     console.error(err)
// }

// try {
//     //SyntacError(문법에러)는 compile 에러를 발생시킨다
//     //compile : 컴파일러가 코드를 실행시키기 위해 읽는 단계
//     //try catch 에서 compile에러는 처리할수 없다
//     f();
// } catch (error) {
//     console.error(err)
// }

//error 객체의 종류
//RangerError
//ReferenceError
//SyntaxError
//TypeError
//URIError

// erroe 객체의 속성(property)
//name
//message
//stack

// try {
//     f();
// } catch (error) {
//     console.error("name" , err.name);//ReferenceError
//     console.error("message" , err.message)// f is not defined
//     // console.error("stack" , err.stack)
// }

//RangerError

// try{
// const pi = Math.PI;

// console.log(pi);

// //RangerError: 값이 범위를 벗어났을 때 발생한다.
// // toPrecision() 인자는 1에서 100 사이어야 한다

// console.log(pi.toPrecision(100))

// }catch (err){
//     console.error(err)
// }

// ReferenceError
// try{
// // ReferenceError
// // 존재하지 않는 변수를 참조(refer)했을 때 발생한다
// console.log(x);
// }catch{
//     console.error(err)
// }

// SyntaxError
// try {
//     // SyntaxError
//     // SyntacError는 컴파일에러를 발생시킨다
//     console.log(2022)
// } catch (err) {
//     console.error(err)
// }

// TypeError
// try {
//     // TypeError(타입 에러)
//     //값이 예상된 타입이 아닐 때 발생한다

//     // setInerval(callback,ms)
//     // TypeError: callback은 함수여아 한다. null을 전달받았다
//     setTimeout(null, 1000)
// } catch (error) {
//     console.error(err)
// }

// URLError

// try {
//     //URLError: URI malformed(URI가 잘못 형성되었다)
//     decodeURI("%")
// } catch (error) {
//     console.error(err)
// }

// 커스텀 에러객체로 커스텀 에러 발생시키기

// try {
//     const foo = "baz"

//     if(foo !== "bar") {
//         // 커스텀 에러 객체를 생성한다
//         const err = {
//             name: "CustomError",
//             message :"bar만 가능합니다"    
//         }

//         //커스텀 에러 객체를 throw 한다
//         throw err;
//     }

// } catch(err) {
//     console.error(err)
// }

// try catch finally

// try{
// console.log("foo")
// }catch (err) {
//     console.error(err)
// }finally {
//     //에러 발생 유무와 상관없이 항상 실행된다
//     console.log(".")
// }

// q. 15살 소녀가 cu 에서 술을 사려고 한다.
// 커스텀 에러를 발생 시켜서 (어른으로서) 이 상황을 중단시켜라

// try {
//     const age = 15;

//     console.log("15살 소녀가 술을사러 Cu에 가고있다");

//     if (age < 18) {
//         // 커스텀 에러 객체 생성 
//         const err = {
//             name: "나이에러",
//             message: "3년뒤 다시오세요"
//         }
//         // 커스텀 애러 객체를 throw 한다
//         //throw밑에 코드는 실행되지않는다
//         throw err;
//     }

//     console.log("술사기 성공!")

// } catch (err) {
//     console.error(err)
// }

//app crashed
// throw "Error!"

// # class
// 객체 생성을 위한 템플릿

// class Cat { // 첫 글자는 대문자여야 한다
//     //constructor(생성자)
//     // 인스턴스를 생성하자마자 실행되는 특별한 매서드
//     // constructor는 아무 것도 return 할 수 없다.
//     //인스턴스의 초기 속성을 설정하는 데 주로 사용된다.
//     constructor(name , age){
//         this.name = name;
//         this.age = age;
//     }
// }

// //cat1은 object이다
// //cat1은 Cat의 인스턴스이다
// const cat1 = new Cat("Kitty", 2);
// //cat2는 object이다
// //cat2는 Cat의 인스턴스이다
// const cat2 = new Cat("Alfredo", 3);

// console.log(cat1)
// console.log(cat2)

// console.log(cat1 instanceof Cat)//true
// console.log(cat2 instanceof Cat)//true

// class의 속성과 메서드

// class MapoguCat {
//     constructor(name) {
//         this.name = name;
//     }

//     //MapoguCat의 속성
//     home = "Mapo-gu";

//     // MapoguCat의 매서드
//     sound() {
//         return "meow"
//     }
// }

// const cat = new MapoguCat("Kitty")

// console.log(cat)
// // MapoguCat의 home속성을 상속(inheritance)받았다
// console.log(cat.home); // Mapo-gu
// // MapoguCat의 sound매서드를 상속받았다
// console.log(cat.sound()); // meow

//q. 삼산동에 살고있는 하얀색 말티즈를 생성하기 위한 템플릿을 작성


// class SamsandongMaltese {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     //SamsandongMaltese의 속성
//     home = "Samsan-dong"
//     color = "white"

//     //samsandongMaltese 의 매서드
//     sound() {
//         return "멍멍"
//     }
// }

// const Maltese = new SamsandongMaltese("Snow", 2);

// // SamsandongMaltese의 속성과 매서드를 상속받았다
// console.log(Maltese)
// console.log(Maltese.sound())

//평리단길에 있는 고양이를 생성하기 위한 템플릿

// class Cat {
//     //생성자 매서드
//     constructor(name) {
//         this.name = name;
//     }
//     sound(x) {
//         return x;
//     }  
// }

// //cat 의 인스턴스 생성
// const cat = new Cat("kitty");

// console.log(Cat);
// //cat의 sound매서드 호출
// //cat의 sound매서드에 인자를 전달한다
// console.log(Cat.sound("야옹"));

// # 클래스의 static 속성과 static 매서드
// 클래스 자체의 속성과 매서드이다
// 인스턴스는 호출할 수 없다
// 클래스와 관련된 인스턴스 등에 유틸리티를 제공하는 역할을 한다
//  class Cat {
//     constructor(name, months){
//         this.name = name;
//         this.months = months;
//     }
//     static description = "고양이는 18개월 이상이 되면 성체가 됩니다"

//     static isAdult(months) {
//         if (months < 18) {
//             return "아기고양이"
//         } else{
//             return "성체고양이"
//         }
//     }    
//  }

// const cat = new Cat("kitty" , 12);
// console.log(cat);

// // cat의 인스턴스에서 static 속성과 static매서드를 호출할 수 없다
// // console.log(cat.description); //undefined
// // console.log(cat.isAdult); //cat.isAdult is not a function

// // cat 클래스가 자체적으로 호출한다
// // cat 클래스 또는 cat클래스의 인스턴스 등에 유틸리티를 제공한다
// console.log(Cat.description);
// console.log(Cat.isAdult(cat.months));

//static 매서드로만 이루어진 클래스
// class Calculator  {
//     static add(a + b){
//         return a + b;
//     }
//     static subtract(a,b){
//         return a - b;
//     }
//     static multiply(a,b){ 
//         return a * b;
//     }
//     static divide(a, b){
//         return a / b
//     }
// }

// console.log(Calculator.add(1, 2))
// console.log(Calculator.subtract(1, 2))
// console.log(Calculator.multiply(1, 2))
// console.log(Calculator.divide(1, 2))

// # JavaScript의 미리 정해진 클래스 (빌트인 클래스)
//종류
//문자 처리 :String
//숫자 및 날짜 : Number , Math , Date
//Indexed collections: Array
//에러 : Error , SyntaxError , ReferenceError, TypeError, ...
//기타 : Promise ,Json

//빌트인 클래스의 인스턴스 만들기
//부제 : javascript에서 모든 데이터는 object이다 (?)

// const foo = new String("bar");
// console.log(foo)
// console.log(typeof foo)

//string클래스의 인스턴스를 literal 표기법을 이용해 생성한다
//foo변수는 매서드와 속성을 string으로부터 상속 받았다
// const foo = "bar" //literal 표기법 (클래스를 호출하지 않고 값을 정의한다)
// console.log(foo)
// console.log(typeof foo)

// console.log("foo".toUpperCase());

// const num = new Number(2);
// console.log(num);
// console.log(typeof num)

// const num = 2;
// console.log(num);
// console.log(typeof num);

// const date = new Date();
// console.log(date)

// const bool = new Boolean(true);
// const bool = true;

// const arr = new Array("foo" , "bar", "baz")
// const arr =["foo", "bar", "baz"] //literal
// console.log(arr);

// const o = new Object({foo:"bar"})
// const o ={foo:"bar"} //literal
// console.log(o)

//math의 static 속성 pi
// const pi =Math.PI;
// console.log(pi)

//Error클래스는 다양한 종류의 Error의 인스턴스 생성에 사용된다
// const err = new Error("Something's broken!");
// console.log(err);
// console.log(err.name); // Error, 에러 인스턴스의 이름은 클래스와 같다
// console.log(err.message); // Something's broken!

//빌트인 클래스의 인스턴스로 커스텀 에러 발생시키

// 사용자가 정의한 함수 f
// function f(data) { 
//     if (typeof data !== "string") {
//         // throw : 커스텀 에러
//         // 빌트인 클래스의 인스턴스를 사용했다
//         throw new TypeError("인자는 문자여아만 합니다")
//     }

//     // throw 아래 코드는 실행되지 않는다
//     console.log("인자",data)
// }



// try{
//     //f 함수를 호출했다
//     f(2);
// }catch (err) {
//     console.error(err)
// }

//Q. 빌트인 클래스인 RangerError 의 인스턴스를 사용해서
//15세 소녀가 cu 에서 술을 사려고 하는 것을 
// 막아라

// try {
//     const age = 15;

//     console.log("15세 소녀가 술을사러 Cu에 가고있다");

//     if(age < 18){
//         const err =new RangeError("3년 뒤에 오세요")
//         // throw : 커스텀 에러를 발생시킨다
//         throw err;
//     }

//     console.log("15세 소녀가 술을 사는데 성공했다!")

// } catch (err) {
//     console.error(err)
// }

// # 빌트인 클래스의 인스턴스들의 속성과 매서드 사용하기

//String

// const foo ="bar";

// console.log(foo.length); // 문자열의 길이
// console.log(foo.toUpperCase())// 대문자로 만든다
// console.log(foo.split("a")) // 인자를 기준으로 문자열을 분할하여 Array의 형태로 Return 한다
// console.log(foo.replace("r","z"))// .replace(a,b)문자열중에 a를b로 대체한다

// Number

// const year =2022;
// console.log(year)// Number타입
// console.log(year.toString())// Number타입을 String으로 변환한다
// console.log(year.toString(2))// toString(기수) 해당하는 기수법으로 변환한다
// console.log(year.toPrecision(10)); //정밀도 , 숫자의 개수를 인자에 맞게 출력한다
// console.log(Number,isNaN(year)) //NaN(not a Number), isNaN(인자) 인자가 NaN인지 판별한다

// Math
// console.log(Math.random()); // 0에서 1사이의 소수를 return한다
// console.log(Math.PI); //Pi
// console.log(Math.round(0.5)) // 반올림
// console.log(Math.ceil(0.5)) // 올림
// console.log(Math.floor(0.5)) // 내림
// console.log(Math.pow(2,7)) // 거듭제곱
// console.log(Math.sqrt(16)) // 제곱근 (square root)
// console.log(Math.max(10,100)) // 최대값
// console.log(Math.min(10,100)) // 최소값

// Date
// const date = new Date()
// console.log(date); //GMT시간(그리니치 평균시)
// console.log(date.toLocaleString()) // 현지시간 (문자열로 출력)
// console.log(date.toLocaleTimeString()) // 현지 시간만 출력 (문자열)

// Array
// const arr = ["foo", "bar"]
// console.log(arr);

// arr.push("baz") // 새로운 item을 마지막에 추가한다

// console.log(arr);

// const arr = ["foo", "bar" , "baz"];

// arr.pop(); // array의 마지막 item 을 제거한다

// console.log(arr);

// const arr = ["foo", "bar" , "baz"];

// const r = arr.slice(1,2); //slice (시작, 끝), 끝은 생략 가능하다
//slice매서드는 새로운 Arrat를 return 한다

// console.log(r)

// const r = arr.slice(1);
// console.log(r)

// const arr = ["foo", "bar" , "baz"];

// const r = arr.sort(); // 기본형으로 사용할때는 문자열 Array에만 정상적으로 작동한다

// console.log(r); // 알파벳순서대로 정렬된다

// const arr = [100, 25];

// const r =arr.sort(); // 100과 25를 문자열로 변환한뒤 비교하여 정렬한다

// console.log(r);

// const arr = [20, 10, 30];

// const r = arr.sort(function (a, b) {
//    return a-b;
// })

// console.log(r)

// const arr1 = ["foo", "bar"];
// const arr2 = ["baz"];
// const arr3 = arr1.concat(arr2); // arr1.concat(arr2) arr1뒤에 arr2를 연결한다

// console.log(arr3);

// Q. slice 매서드를 사용해서 b부터 f로 구성된 Array를 만들어봐라

// const arr = ["a", "b", "c", "d", "e", "f", "g"];

// const r = arr.slice(1,6);
// console.log(r)

//map()
// const arr =["foo", "bar", "baz"];

// //map(callback)
// // callback에 배열의 value, index, array를 인자로 전달한다
// //Array를 순회하면서 item에 특정한 매서드를 적용할 수 있다
// //새로운 Array를 return한다
// const r = arr.map(function (vaule, index, array) {
//     return vaule.toUpperCase(); // toUpperCase()문자열(알파벳)을 대문자로 만든다
// })

// console.log(r)

// const arr = [1, 2, 3, 4];

// const r = arr.map(function (value) {
//     return value * 10;
// })

// console.log(r);

// //filter()
// const arr =["foo", "bar", "baz"];

// //Array를 순회하며 특정한 조건에 맞는 value로 구성된 새로운 Array를 return한다
// const r =arr.filter(function (value, index, array){
//     if (value.charAt(0) === "b") { // charAt(index): 문자열에서 index에 해당하는 문자를 return한다
//         return value;
//     }
// })

// console.log(r)

// Object

// const o ={prop1: "foo", prop2:"bar", prop3:"baz"};

// const r = Object.keys(o);

// console.log(r)

// const o = {prop1: "foo", prop2:"bar", prop3:"baz"};

// //key와 value 쌍을 array의 형태로 return한다
// const r = Object.entries(o);

// console.log(r)

// const arr = [1,2,3,4,5];

// const r = arr.filter(function (value,index) {
//     if(value > 2) {
//         return value;
//     }
// })

// console.log(r)

//Q.
//1 origin으로만 구성된 String array(map)
//2.유럽 맥주로만 구성된 array(filter)

//charAt(index) 사용 x: type이 string 인 경우에만 사용 가능

// const beers =[
//     {name:"Heineken", origin:"Netherlands"},
//     {name:"Kloud", origin: "s.korea"},
//     {name:"Guinness", origin: "Ireland"},
//     {name:"Asahi", origin:"Japan"}
// ]

// const origins = beers.map(function(beer) { //beer = value
//         return beer.origin;
// })

// console.log("world beers from",origins)

// const europeanBeers = beers.filter(function(beer){
//     if(beer.origin === "Netherlands" || beer.origin === "Ireland"){
//         return beer;
//     }
// })

// console.log("Premium beers", europeanBeers)

// # Destructing assignment (구조분해할당)
// Array : Array의 item들을 개별적으로 변수에 담을 수 있게 한다
//object : object의 속성들을 개별적으로 변수에 담을 수 있게 한다

// Array
// const arr = ["foo", "bar", "baz"];

// 기존의 방법
// Array의 item들을 개별적으로 변수에 담았다
// const item0 = arr[0]
// const item1 = arr[1]
// const item2 = arr[2]

// console.log(item0)
// console.log(item1)
// console.log(item2)

// const arr = ["foo", "bar", "baz"];

// 단순해진 문법
// const [item0, item1, itme2] = arr;

// console.log(item0)
// console.log(item1)
// console.log(itme2)

// function calculator(x, y){
//     return [x+y, x-y, x*y, x/y]
// }

// const [add, substract, multiply, divide] = calculator(1,2);

// console.log("add", add)
// console.log("substract", substract)
// console.log("multiply", multiply)
// console.log("divide", divide)

// const beers = [
//     { name: "Heineken", origin: "Netherlands" },
//     { name: "Kloud", origin: "s.korea" },
//     { name: "Guinness", origin: "Ireland" },
//     { name: "Asahi", origin: "Japan" }
// ]

// const [DeutchBeer, KoreaBeer, IrishBeer, japanBeer] = beers;

// console.log(IrishBeer);

// Object
// const o ={prop1: "foo", prop2:"bar", prop3:"baz"};

// //object의 속성들을 변수에 담았다
// const prop1 = o.prop1; // 속성(property)
// const prop2 = o.prop2;  
// const prop3 = o.prop3;

// console.log(prop1) // foo
// console.log(prop2) // bar
// console.log(prop3) // baz

// const o ={prop1: "foo", prop2:"bar", prop3:"baz"};

// //더 단순한 문법
// const { prop1, prop2, prop3} = o;

// console.log(prop1) // foo
// console.log(prop2) // bar
// console.log(prop3) // baz

// 함수에서 Destructing 사용하기

// const o ={prop1: "foo", prop2:"bar", prop3:"baz"};

// f(o);
// function f(props) { // props = properties
//     const prop1 = props.prop1;
//     const prop2 = props.prop2;
//     const prop3 = props.prop3;
    
//     console.log(prop1)
//     console.log(prop2)
//     console.log(prop3)
// }

// const o ={prop1: "foo", prop2:"bar", prop3:"baz"};

// f(o);
// function f({prop1, prop2, prop3}) {
//     //더 단순한 문법
//     console.log(prop1)
//     console.log(prop2)
//     console.log(prop3)
// }

//Q. 다음과 같은 문장을 출력하는 함수를 정의(구조분해할당을 사용 하여 함수 파라미터를 정의)
// Guiness is originated in the brewery at Ireland
// const irishBeer = {name:"Guinness", origin:"Ireland"}

// f(irishBeer)
// function f({name,origin}) {
//     console.log(name + " is originated in the brewert at " + origin)
// }

//Q. 원산지에 일치하는 맥주이름의 변수를 만들어 보세요( 구조분해 할당 사용)

// const origins =["Netherlands", "s.korea", "Ireland", "Japan"]

// const [Heineken, Kloud, Guiness, Asahi] = origins;

// console.log(Kloud)

// # Spread Syntax (전개 구문)
// Array : Array의 item을 간단하게 복사할 수 있다
// object : object의 속성을 간단하게 복사할 수 있다
// (모양) ...

//Array
// push()
// const arr = ["foo", "bar"];
// const r = [...arr,"baz"];
// console.log(r);

// concat() : concatnation(연결)
// const arr1 = ["foo", "bar"];
// const arr2 = ["baz"];

//const r = [...arr1, ...arr2];
//console.log(r);

// const r = [...arr2, ...arr1];
// console.log(r);

//slice
// const arr = ["foo", "bar", "baz"];

// const [item0,item1, ...rest] = arr;
// console.log(item0)// foo
//console.log(item1)// bar
// console.log(rest) // ['baz']

//Q. Spread 문법을 사용하여 일본 맥주를 추가해 보세요
// const beers = [
//          { name: "Heineken", origin: "Netherlands" },
//          { name: "Kloud", origin: "s.korea" },
//          { name: "Guinness", origin: "Ireland" },
//      ]

// const japanesesBeer = {name : "Asahi" , origin : "Japan"}

// console.log(...beers, japanesesBeer);

//Object
//속성 업데이트에 이용
// const o = {prop1 : "foo", prop2 : "bar", prop3 : "baz"}
// const r = {...o, prop2: null} // ...o : 기존 object의 속성

// console.log(r)

//속성 추가 
// const o = {prop1 : "foo", prop2 : "bar"}
// const r = {...o , prop3 : "baz"}

// console.log(r)

//Q. dutchBeer에 현재 이용가능한 맥주인지를 나타내는 새로운 속성
// available: true 를 추가 
//const dutchBeer = { name: "Heineken", origin: "Netherlands" }

//console.log({...dutchBeer, available:true})

//Q. 기네스 맥주가 재입고가 되었다
// map() 매서드와 Spread 문법을 사용

// const beers = [
//     { name: "Heineken", origin: "Netherlands", available:true  },
//     { name: "Kloud", origin: "s.korea", available:true},
//     { name: "Guinness", origin: "Ireland", available: false },
// ]

// const r =beers.map(function(beer){
//     return{...beer , available:true}
// })
// console.log(r)

// const r = beers.map(beer => {
//     return {...beer, available : true}
// })

// console.log(r)

// const r =beers.map(beer=>{
//     if(beer.name == "Guinness"){
//         return{...beer , available:true}
//     }
//     return beer
// })
// console.log(r)

// const r = beers.map(beer=>{
//     beer.available = true
//     return beer
// })
// console.log(r)

// # Javascript 비동기(Asynchronous) 프로그래밍
// 작업 과정에서 blocking(막힘)을 다루기 위한 방법이다
// 예) 서버로부터 데이터를 요청 하는 것과 그 처리

// function f(callback){
//     callback()
// }
// // f함수는 동기(synchronous)함수 이다
// // 호출된 순서대로 실행된다
// f(() => {
//     console.log("foo")
// })
// console.log("bar")

// setTimeout(callback, ms): ms후에 callback실행
// setTimeout(() => {
//     console.log("foo")
// }, 1000);

// setTimeout: 대표적인 비동기 함수이다
// 비동기 함수는 가장 마지막에 실행된다
// setTimeout(()=>{
//     console.log("foo")
// },0)
// console.log("bar")

// real world 예제
// 서버에게 데이터 요청하기

// 비동기 함수
// 서버에 데이터를 요청하는 함수이다
// function fetchData(callback) {
//     const o ={foo:"bar"};

//     setTimeout(() => {
//         callback(o)
//     },1000);
// }

// //데이터를 가져오는데 1초가 걸린다고 가정
// fetchData(data => {
//     console.log("data",data)
// })

// console.log("다른 작업")

// 비동기에서 에러 다루기
// 서버에 데이터 요청하는 예제
// function fetchData(id, callback){
//     if (id === null) { // !null = true ,!undefined = true, !"" = true
//         const err = new Error("id is required") 

//         setTimeout(() => {
//            callback(err, null) 
//         }, 0);
//         return;
//     }
//     const o ={foo : "bar"}

//     setTimeout(() => {
//        callback(null, o) 
//     });
// }

// //fetchData() 함수 호출
// fetchData(null, (err, data) => { // null을 바꾸면 정상적으로 반응
//     if (err){
//         throw err;
//     }
//     console.log("data", data)
// })

// function f(callback) {
//     callback()
// }

// f(() => { //동기(synchronous)함수: 호출된 순서대로 실행된다
//     console.log("foo")
// })

// console.log("bar")

// function f(callback) {
//     setTimeout(() => {
//        callback() 
//     },0);
// }

// f(() => { // f는 비동기(asynchronous)함수: 호출순서와 상관없이 가장 마지막에 실행된다
//     console.log("foo")
// })

// console.log("bar")

// 실제 사용예시

// function fetchData(callback) {
//     const o = { foo:"bar"}

//     setTimeout(() => { // 서버에 데이터 요청
//       callback(o)  
//     }, 1000);
// }

// fetchData((data) => {
//     console.log("data", data)
// })
// console.log("다음 작업")

// 비동기 함수에서 에러 처리

// function fetchData(id, callback)  {
//     if(!id) {
//         const err = new Error("id is required");
        
//         setTimeout(() => {
//            callback(err, null)  
//         }, 0);
//     }
//     return;
// }

// const o = {foo:"bar"}

// setTimeout(() => {
//    callback(null, o) 
// }, 0);


// // 서버에 데이터를 요청함
// fetchData(null, (err, data) => { 
//     try {
//      if (err) {
//         throw err;
//      }
//     console.log("data", data)
//     } catch (error) {
//     console.error(error)
// }
// })

// # Pormise
// Promise 객체는 비동기 작업의 성공/실패 여부와 그 결과값을 나타낸다
// 비동기 작업의 가독성을 높이기 위해 사용된다

// 구조
// Promise class를 이용하여 인스턴스 만들기

// const o = new Promise((res, rej) => {
//     //res: resolve(fullfilled)
//     // 비동기 작업의 성공
//     // res("foo")

//     // rej: rejected
//     // 비동기 작업의 실패
//     rej("bar")
// })
// console.log(o); // 상태: fullfilled , 결과값 : "foo"
// console.log(o); // 상태: rejected, 결과값 : "bar"

// async function을 사용해서 인스턴스 만들기

// async function f() {
//     // 비동기 작업의 성공
//     // return  "foo"
    
//     // rejected
//     // 비동기 작업의 실패
//     throw "bar"
// }

// console.log(f()) // 상태: fullfilled, 결과값:"foo"
// console.log(f()) // 상태: rejected , 결과값: "bar"

// // 실제 사용 예시
// async function fetchdata() {
//     const o = {foo:"bar"}
//     return o;
// }

//  서버에 데이터를 요청한다
// fetchdata() // Promise 객체는 비동기적으로 작동한다
// .then(data => { // 데이터를 처리 
//     console.log(data)
// })

// console.log("다음 작업")

// Promise 객체에서 에러 처리
// async function fetchData(id) {
//     if (!id) {
//         const err = new Error("id is required");
//         throw err;
//     }

//     const o = {foo:"bar"}
//     return o;
// }

// Promise를 사용한 방법
// fetchData(null)
// .then(data => { // 데이터를 처리한다
//     console.log("data", data)
// })
// .catch(err => { // 에러처리
//     console.error(err);
// })

// // 비동기 함수를 사용한 방법
// fetchData(null, (err, data) => { 
//     try {
//      if (err) {
//         throw err;
//      }
//     console.log("data", data)
//     } catch (error) {
//     console.error(error)
// }
// })

// Promise의 async/await 문법
// 비동기 작업을 동기 작업처럼 할 수 있게 만든다

// async function fetchData(id) {
//     if (!id) {
//         const err = new Error("id is required");
//         throw err;
//     }

//     const o = {foo:"bar"}
//     return o;
// }

// f()
// async function f() {
//     try {
//         // await: 비동기작업이 끝날 때까지 기다린다
//         // await은 async 함수 내부에서만 사용할수 있다
//         const data = await fetchData("a1");
//         console.log(data);

//         console.log("다음 작업")

//     } catch (error) {
//         console.error(error)
//     }
// }


// # JSON
// javascript Object Notation (Javascript 객체 표기법)
// Javascript 객체를 저장하거나 전송하기 위한 텍스트 포멧

// const o = {foo:"bar"}
// const json = '{"foo": "bar"}'

// console.log(o) // Object
// console.log(json) // json포멧(텍스트)
// console.log(typeof json) // string

// const o = {foo: "bar"}
// // JSON.stringify(): object를 json 포멧으로 변환한다
// const r = JSON.stringify(o)

// console.log(r)

// const json = '{"foo" : "bar"}'
// //JSON.parse(json): json 포멧을 object로 변환한다
// const r =JSON.parse(json);

// console.log(r)
// console.log(typeof r) // object

// const arr ='[{"prop1": "foo", "prop2": "bar"}]'

// const r =JSON.parse(arr);
// console.log(r)
