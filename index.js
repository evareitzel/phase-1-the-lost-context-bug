
const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
      "Thor": "Admiration, respect, and love",
      "Loki": "Your son"
  },
  signatories: [
      "Thor",
      "Loki"
  ]
};

// Solution 1: thisArg

/*
const printCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);

  // console.log("Debug Before forEach: " + this);
  this.signatories.forEach(function (signatory) {
    // console.log("Debug Inside: " + this);
    const message = `${this.closing[signatory]}, ${signatory}`;
    console.log(message);
  }, this); // In the call to forEach, we tell it to use (as its own context) the context that printCard has as printCard's this.
};

// console.log(messageConfig.closing.Thor); // => Admiration, respect, and love

printCard.call(messageConfig);
*/

/*
Happy Birthday, Odin One-Eye!
From Asgard to Nifelheim, you're the best all-father ever.

Love,
Admiration, respect, and love, Thor
Your son, Loki
*/

// Bind variation -->
// const printCard = function () {
//   console.log(this.frontContent);
//   console.log(this.insideContent);
//   const contextBoundForEachExpr = function (signatory) {
//     const message = `${this.closing[signatory]}, ${signatory}`;
//     console.log(message);
//   }.bind(this);

//   this.signatories.forEach(contextBoundForEachExpr);
// };

// printCard.call(messageConfig);


// Solution 2: Use a closure

// const printCard = function () {
//   console.log(this.frontContent);
//   console.log(this.insideContent);

//   const outerContext = this; // variable is often defined as self

//   this.signatories.forEach(function (signatory) {
//     const message = `${outerContext.closing[signatory]}, ${signatory}`;
//     console.log(message);
//   });
// };

// printCard.call(messageConfig);


// Solution 3: Arrow function expression (preferred)

const printCard = function() {
  console.log(this.frontContent);
  console.log(this.insideContent);
  // Wow! Elegant! And notice the arrow function's `this` is the same `this`
  // that printCard has; specifically, the `thisArg` that was passed to it
  this.signatories.forEach((signatory) => 
    console.log(`${this.closing[signatory]}, ${signatory}`)
  );
};

printCard.call(messageConfig);