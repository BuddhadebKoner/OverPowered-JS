function createCounter() {
   let count = 0; 
   
   function counter() {
     count += 1;  
   }
   
   return counter; 
 }
 
 const counter = createCounter(); 
 
 console.log(counter());
 console.log(counter());
 console.log(counter());
 