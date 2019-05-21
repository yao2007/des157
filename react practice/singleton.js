// let callback = () => {
//   return "Hello";
// };
// let b = () => {
//   let counter = 0;
//   return () => {
//     if (counter < 1) {
//       counter++;
//       return callback();
//     } else {
//       return 1;
//     }
//   };
// };
// var a = b(callback);

// console.log(a());
// console.log(a());
// console.log(a());

// let callback = () => {
//     retrun "hi";
// }
// let b = () => {
//     let counter = 0;
//     return () => {
//         if(counter < 1){
//             counter++;
//             return callback();
//         }else{
//             return 1;
//         }
//     }
// }

// var a = b(callback);
// console.log(a());
// console.log(a());

//两个相加
// function curriedAdd (x) {

//     return function(y) {
  
//       return x + y
  
//     }
// }

// console.log(curriedAdd(2)(2));
// function curriedAdd (x) {

//     return function(y) {
  
//       return x + y
  
//     }
//   }

// function trueCurrying(fn, ...args) {

//     if (args.length >= fn.length) {

//         return fn(...args)

//     }

//     return function (...args2) {

//         return trueCurrying(fn, ...args, ...args2)

//     }
// }

// console,log(trueCurrying(curriedAdd)(2)(2)(3));

/*-------------------*/
function commonCurry(fn) {
    var slice = Array.prototype.slice,
      storedArgs = slice.call(arguments, 1) //使用slice是为了把arguments转换成真正的数组，剥离此处第一个参数，是因为第一个参数是fn
    return function () {
      var newArgs = slice.call(arguments), //新传入的参数
        args = storedArgs.concat(newArgs)
      return fn.apply(null, args)
    }
  }

  //使用举例
  function add(a, b) {
    return a + b
  }
  var newAdd = commonCurry(add, 10)
  console.log(newAdd(5))
  
  // 多个参数
  function add2(a, b, c, d) {
    return a + b + c + d
  }
  var newAdd2 = commonCurry(add2, 10, 10)
  console.log(newAdd2(5, 4))//29

// 多次curry
var newAdd3 = commonCurry(newAdd2, 10)
console.log(newAdd3(10))//40
  