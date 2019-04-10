// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function matryoshka_doll_1(){
  const flower= "Roses";
  console.log(`I'm Russian Doll 1, my favorite flowers are ${flower}`)

  function matryoshka_doll_2(){
    const color= "Green"
    console.log(`I'm Russian Doll 2, my favorite color is ${color}`)

    function matryoshka_doll_3(){
     
      console.log(`Hi, can you introduce yourself? ${flower}`)
    }
  } matryoshka_doll_3();
  matryoshka_doll_2();
};

matryoshka_doll_1();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
