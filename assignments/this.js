/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window or Global Binding: 'this' keyword defaults to window object because the function is in the global scope.

* 2. Implicit Binding: (uses object literals) The 'this' keyword references the object to the left of dot when the method is being invoked. (objectName.method, this = objectName)

* 3. New Keyword Binding: uses constructor functions (capitalized first letter) to build reusable object literals that bind the 'this' keyword to new objects.
    (When a function is invoked with a new keyword, the 'this' keyword inside that function is bound to the new object being constructed.)

* 4. Explicit Binging: uses specific function methods .call .apply and .bind (also the spread operator) to bind and define the 'this' keyword to an outside context/object
*
* write out a code example of each explanation above
*/

// Principle 1

        // code example for Window Binding
        function sayName(name) {
            console.log(this);
            return name;
        }
        sayName("D'Artagnan");


// Principle 2

        // code example for Implicit Binding
        const amarachi = {
            name: "Amarachi",
            hairColor: "black",
            type: "curly",
            length: "medium",
            speak: function () {
            return `My name is ${this.name} and I have ${this.hairColor}, ${this.type} hair.`;
            }
        }
        
        console.log(amarachi.speak());


// Principle 3

        // code example for New Binding
        //create constructor function
        function Animal(food) {
            this.food = food;
            this.eat = function() {
            console.log(`This animal likes to eat ${this.food}`);
            }
        }
        
        //invoke constructor function and set to a new object
        const zebra = new Animal('grass');
        const lion = new Animal('meat');

        console.log(zebra);
        console.log(lion);

        //invoke method inside constructor function
        zebra.eat();
        lion.eat();



// Principle 4

        // code example for Explicit Binding
        // create a function
        function sayName (params) {
            console.log(`My name is ${this.name} and these are my skills: ${params}.`);
        }

        // create an object to use a context for function
        const nelly = {
            name: "Nelly",
            age: 54
        };

        // create array to pass as arguments for functions parameters
        const skills = ['cooking', 'praying', 'fashion'];

        // invoke the function
        // functionName.call(object for context, array for arguments);
        sayName.call(nelly, skills);

/* 
for better spacing, can use .apply or .call and separate the parameters of the function:

function sayName (param1, param2, param3) {
  console.log(`My name is ${this.name} and these are my skills: ${params1}, ${params2}, and ${params3}.`);
}

nelly object stays the same

skills stays the same

sayName.call(nelly, skills[0], skills[1], skills[2]);

*/