import { Citizen } from "./classes/Players.js";
let aab;
aab = 10;
aab = "hab";
// console.log(aab)
// Function 
let myFunc;
myFunc = () => {
    console.log("first");
};
// myFunc()
// set argument type
const func2 = (a, b) => {
    console.log(`Hello ${a} + ${b}`);
};
// func2("sa", "51")
// optional argument
const func3 = (a, b, c) => {
    console.log(`Hello ${a} + ${b} + ${c}`);
};
// func3("sa", "51")
// assign default value
const func4 = (a, b, c = "bayzid") => {
    console.log(`Hello ${a} + ${b} + ${c}`);
};
// func4("sa", "51")
//  note if a function don't return anything then JavaScript return undefined || typeScript return  void (that means nothing is here)
const func5 = (a, b, c = "bayzid") => {
    console.log(`Hello ${a} + ${b} + ${c}`);
    return a + b;
};
const userDetails = (id, user) => {
    console.log(`user if ${id}, name ${user.name}, adult user: ${user.adult}`);
};
const sayHello = (user) => {
    console.log(`say Hello ${user.age > 50 ? "sir" : "Mr"} ${user.name}`);
    return user;
};
// console.log(sayHello({name:"bayzid", age:26, adult:true}))
// Lesson 7 end  here let go
// ==================  Lession 8 Start ==================
let add;
add = (a, b) => {
    return a + b;
};
// console.log(add(10, 2)) 
let calculate;
calculate = (a, b, c) => {
    if (c == "add")
        return a + b;
    else {
        return a - b;
    }
};
console.log(calculate(5, 3, "add"));
let userDetail;
userDetail = (id, user) => {
    return user.name;
};
console.log(userDetail("12", { name: "Bayizd", age: 26 }));
// ==================  Lession 8 End ==================
// ==================  Lession 9 Start ==================
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const bayzid = new Player("bayzid", 26, "bangladesh");
const mikat = new Player("mikat", 20, "bangladesh");
// here we can see below we can change the name ob bayzid (bayzid.name) which is weird so now we ned to private this; (go lession - 10)
// bayzid.name
const Players = [];
Players.push(bayzid);
Players.push(mikat);
console.log(Players);
// ==================  Lession 9 End ==================
// ==================  Lession 10 Start ================== (Access Modifiers)
// note : when set access modifier don't need to use this and assign variable outer of constructor
let junaid;
junaid = new Citizen("Junaid", 28, "bangladesh");
let rafsan;
rafsan = new Citizen("rafsan", 20, "bangladesh");
const citizens = [];
citizens.push(junaid);
citizens.push(rafsan);
console.log("junaid + Rafsan", citizens);
function drawRactangular(options) {
    let width = options.width;
    let length = options.length;
}
let threeDoptions = {
    width: 50,
    length: 100,
    height: 10
};
/*
drawRactangular({
    width:50,
    length: 100,
    height:10
})
*/
drawRactangular(threeDoptions);
// node when pass data inside calling function then typeScript spreat data so that give error
// if I assign data outer of calling function (call by reference) then the program consider error
// ================= Lession 13 Start ====================== (Generics)
//==> const addId =  (obj:object)=>{
// this way u only get user.id propety
// This way you can get all property but the problem is that if you pass a string to addId then it don't give any error.
// ==> const addId =  <T>(obj:T)=>{
const addId = (obj) => {
    const id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addId({
    name: "Bayzid",
    age: 26
});
addId(user);
const response = {
    status: 200,
    type: "Success",
    data: { name: "text", price: 100 }
};
console.log("response", response);
/*
const response: APIResponse <string> = {
    status: 200,
    type: "Success",
    data: "response"
}
*/
// ================= Lession 13 End ====================== (Generics with interface)
// ================= Lession 14 Start ====================== (ENUM)
var ResponsType;
(function (ResponsType) {
    ResponsType[ResponsType["SUCCESS"] = 0] = "SUCCESS";
    ResponsType[ResponsType["FAILURE"] = 1] = "FAILURE";
    ResponsType[ResponsType["UNAUTHENTICATE"] = 2] = "UNAUTHENTICATE";
    ResponsType[ResponsType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(ResponsType || (ResponsType = {}));
const response2 = {
    status: 200,
    type: ResponsType.SUCCESS,
    data: "bayzid"
};
console.log("enum", response2);
// ================== Tuples =====================
let arr = [3, "bayzid", { a: 10 }];
arr[1] = 10;
// note we can see here we can place a number in string position
let arr2 = [10, "bayzid", { d: 65 }];
// arr2[1] = 152
// here cannot  place a number place of string thats call Tuples
