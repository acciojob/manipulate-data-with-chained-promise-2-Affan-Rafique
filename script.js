const output = document.getElementById("output");

function promise() {
  // Step 1: Start with initial promise
  Promise.resolve([1, 2, 3, 4])

    // Step 2: Filter even numbers after 1 second
    .then(arr => {
      return new Promise(resolve => {
        setTimeout(() => {
          const evens = arr.filter(num => num % 2 === 0);
          output.innerText = evens.join(","); // show [2, 4]
          resolve(evens); // pass evens to next .then
        }, 1000);
      });
    })

    // Step 3: Multiply evens by 2 after 2 seconds
    .then(evens => {
      return new Promise(resolve => {
        setTimeout(() => {
          const doubled = evens.map(num => num * 2);
          output.innerText = doubled.join(","); // show [4, 8]
          resolve(doubled);
        }, 2000);
      });
    });
}

// Run it
promise();
