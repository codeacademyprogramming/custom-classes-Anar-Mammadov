//TASK 2
// Number.prototype.add=function(a){
//     return a+this;
// }
// console.log((5).add(8));


//Task 3

// Array.prototype.customForEach = function (cb) {
//     const arr = [];

//     for (let i = 0; i < this.length; i++) {
//         arr.push(cb(this[i], i, this))

//     }
//     return arr;
// }
// console.log([1, 2, 3, 4, 5].customForEach((value) => value));


// Array.prototype.customMap=function(cb){
//     const arr =[];
// for (let i = 0; i < this.length; i++) {
//     arr.push(cb(this[i],i,this));
    
// }
// return arr;
// }

//  console.log([1,2,3,4,5].customMap((value)=>value*2));




// Array.prototype.customReverse =function(cb){
//     const arr=[];
//     for (let i = this.length-1; i >= 0; i++) {
//        arr.push(cb(this[i],i,this));

//     }
//     return arr;

// }
// console.log([1,2,3,4,5].customReverse((value)=>value));







// Array.prototype.customSome = function (cb) {
    
//     for (let i = 0; i < this.length; i++) {
        
    
//       if(cb(this[i],i,this))
//       return true;
//      }
    
//     return false;
    
// }; 


// Array.prototype.customEvery = function (cb) {
    
//     for (let i = 0; i < this.length; i++) {
        
    
//       if(!(cb(this[i],i,this)))
//       return false;
//      }
    
//     return true;
    
// };  


// console.log([1,2,3,4,5].customEvery((value)=>value>0))


// Array.prototype.customFilter = function (cb) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this)==true) {

//             result.push(this[i])
//         }
//     }
//     return result;
// };


// console.log([1,2,3,4,5].customFilter((value)=>value>3))