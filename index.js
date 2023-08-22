// Receives a function and calls it
function receivesAFunction(callback) {
  callback(); // Call the provided callback function
}

// Returns a named function
function returnsANamedFunction() {
  // Define a named function
  function namedFunction() {
    // Function body can be empty or contain code
  }
  
  return namedFunction;
}

// Returns an anonymous function
function returnsAnAnonymousFunction() {
  // Define an anonymous function directly
  return function() {
    // Function body can contain code
  };
}

module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction,
};