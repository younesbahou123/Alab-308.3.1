// Declare an arbitrary number n
let n = 13; // You can set this to any starting value

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // Not a prime number
  }
  return true; // Prime number
}

// Loop to find the next prime number starting from n
while (true) {
  n++; // Increment n
  if (isPrime(n)) {
    console.log(`The next prime number is: ${n}`);
    break; // Exit the loop as soon as a prime is found
  }
}
