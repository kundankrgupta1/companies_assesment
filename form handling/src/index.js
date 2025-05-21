// output = [0,1,2]
// function foo() {
//   let func = []
//   for(var i= 0; i<3; i++) {
//     func[i] = ((i)=> {
//       return function(){
//       return i
//     }
//   })(i)}
//   return func;
// }
// let func = foo()
// console.log(func[0]()) // 0
// console.log(func[1]()) // 1
// console.log(func[2]()) // 2



// output = [3,3,3]
// function foo() {
//   let func = []
//   for(var i= 0; i<3; i++) {
//     func[i] = function(){
//       return i
//     }
//   }
//   return func;
// }
// let func = foo()
// console.log(func[0]()) // 3
// console.log(func[1]()) // 3
// console.log(func[2]()) // 3


import os from 'os';
console.log(os.freemem() / (1024*1024));