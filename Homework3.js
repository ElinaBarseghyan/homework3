//A function that takes at least three arguments and returns the result of some set of operations using those arguments.//
const numOperations= function(a,b,c) {
      const result=(a*b-c)/2;
      return result;  
};
//A function that takes no arguments, and returns something.//
const myCity= function ( ) {
      return "Yerevan";
};
//A function that takes arguments, does something, but does not return anything.//
const multiply= function (a,b,c) {
      const result= a*b*c;
};
//A function called fullName that takes as argument first name and last name and returns the full name of the person.//
const fullName= function (firstName, lastName) {
      const result= firstName+" "+lastName;
      return result;
};
//A function that takes three strings and returns the string that is the longest.//
const thelongeststring= function(s1,s2,s3){
      if(s1.lenght>s2.lenght && s1.lenght>s3.lenght)
         return s1;
      if(s2.lenght>s1.lenght && s2.lenght>s3.lenght)
         return s2;
      return s3;
};
//A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger.//
const theBiggestNum= function(num1,num2) {
      if(num1===num2)
         return 0;
      if(num1>num2) 
         return 1;
      
         return -1;
};
// A function that takes three inputs and returns the first truethy value.//
const theFirstTruethy= function(a,b,c) {
      if(!!a===true)
         return a;
      if(!!b===true)
         return b;
      return c;
};
