Array.prototype.myEach=function(callback){
    for(let i=0;i<arr.length;i++){
         callback(this[i],i,this);
    }
}

let arr =[1,2,3,4,5,6];
arr.myEach((ele)=>console.log(ele));

console.log("--------------------");

Array.prototype.myMap=function(callback){
  let result =[];
  for(let i=0;i<arr.length;i++){
      result.push(callback(this[i],i,this));
  }
  return result;
}
let newArray = arr.myMap((ele)=>ele*2);
console.log(newArray);

console.log("--------------------");

Array.prototype.myFilter = function(callback){
    let result =[];
    for(let i=0;i<arr.length;i++){
        if(callback(this[i],i,this)){
            result.push(this[i])
        }
    }
    
    return result;
}
let filterArray=arr.myFilter((ele)=>ele==3);
console.log(filterArray);

console.log("--------------------");

Function.prototype.debounce = function(ms=300){
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer=setTimeout(()=>this(...args),ms);
    }
}
const sayHi = (name)=>console.log(`Hi ${name}`);
const debounceHi = sayHi.debounce(3000);
debounceHi("Aakash");

console.log("--------------------");

Function.prototype.throttle = function(limit=1000){
    let lastCall=0;
    return (...args)=>{
        let now = Date.now();
        if(now-lastCall>=limit){
            lastCall = now;
            return this(...args);
        }
    }
}
const handleClicked=()=>console.log(`Button Clicked ${new Date().toLocaleString()}`);
const throttleClicked = handleClicked.throttle(3000);
throttleClicked();

console.log("--------------------");
class Subject {
    constructor(){
        this.observer =[];
    }
    subscribe(callback){
        this.observer.push(callback)
    }
    next(value){
        this.observer.forEach((cb)=>cb(value));
    }
}
const sub = new Subject();
sub.subscribe((val)=>console.log('User 1:',val));
sub.next(1);
sub.next(2);
sub.subscribe((val)=>console.log('User 2:',val));
sub.next(3);
sub.next(4);
console.log("--------------------");
class BSubject extends Subject {
    constructor(initialValue){
        super();
        this.value = initialValue;
    }
    subscribe(callback){
        callback(this.value);
        super.subscribe(callback);
    }
    next(value){
        this.value = value;
        super.next(value);
    }
}

const bsub = new BSubject(0);
bsub.subscribe((val)=>console.log('BS User 1:',val));
bsub.next(5);
bsub.next(6);
bsub.subscribe((val)=>console.log('BS User 2:',val));
bsub.next(7);
bsub.next(8);
console.log("--------------------");
class RSubject extends Subject {
    constructor(bufferSize=Infinity){
        super();
        this.bufferSize = bufferSize;
        this.history =[];
    }
    subscribe(callback){
        this.history.forEach(val=>callback(val));
        super.subscribe(callback);
    }
    next(value){
        this.history.push(value);
        if(this.history.length > this.bufferSize){
            this.history.shift();
        }
        super.next(value);
    }
}

const rsub = new RSubject();
rsub.subscribe((val)=>console.log('RS User 1:',val));
rsub.next(9);
rsub.next(11);
rsub.subscribe((val)=>console.log('RS User 2:',val));
rsub.next(12);
rsub.next(13);
