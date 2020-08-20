var animal="monkey";
animal;

var monkey="Animal";
monkey;

var x=15;
x;

var y=10;
y;

var name="abc";
name;

var boolean=false;
boolean;

var isTenEven=(10%2===0);
isTenEven;

var trueTest=boolean;
var boolean=true;
boolean;

var falseTest=false;
falseTest;

var luckyNumber=5;
luckyNumber;

var firstName="Rasha";
firstName;

var lastName="Alamleh";
lastName;

var fullName=firstName+lastName;
fullName;

var x=5;
x+10;
 
var x=17;
x=(x+1)/2;
x*4;

var x=5;
var y=20;
x=y;
y=y+7;
x;

var x=10;
var y=5;
x=x*4-3;
x+17;
x=x+y;
x;


var x=0;
function counter(){
  x=x+1;
  return x;
}
console.log(x);
console.log(counter());
console.log(counter());
console.log(counter());

var x=0;
function decrease(){
  x=x-1;
  return x;
}
console.log(x);
console.log(decrease());
console.log(decrease());
console.log(decrease());

var x=0;
function reassignVariable(){
  x=5;
  return x;
  }

  console.log(x);
  reassignVariable();
  console.log(x);


  var x="";
  function concatVariable(string1,string2){
    x=string1+string2;
    return x;
  }
  console.log(x);
  concatVariable("Hello", " World");

  console.log(x);


  var x=boolean;
  function oppositeBoolean(){
    x=!boolean;
    return x;
  }
  console.log(x);
  oppositeBoolean();
  console.log(x);
  oppositeBoolean();
  console.log(x);


  var x ="";
  function charAtIndex(string,index){
    x=string[index];
    return x; 
  }
  console.log(x);
  console.log(charAtIndex("Hello",2));
    console.log(charAtIndex("World",0)); 


    function returnUndefined(){
      var x="undefined";
      return x;
      
    }
    returnUndefined();



var x="";
function addString(string){
  x= x+" "+string;
  return x;

}
console.log(x);
addString("hello");
console.log(x);
addString("world");
console.log(x);

var sum=0;
function addSum(num1,num2){
  sum=sum+num1+num2;
  return sum;
}
console.log(sum);
addSum(1,2);
console.log(sum);
addSum(2,3);
console.log(sum);

function isABoolean(parm){
  if (typeof parm==="boolean"){
    return true;
  }
  return parm;
}
console.log(isABoolean(true));

function isAString(parm){
  if (typeof parm === "string"){
    return true;
  }
  return parm;
}
  isAString("Hello");

function isANumber (parm){
  if (typeof parm === "number"){
    return true;
  }
  return parm;
}
  isANumber(25);

function isUndefined(parm){
  if (typeof parm === "undefined"){
    return true;
  }
  return parm;
}
  isUndefined();












