function fibonacci(num) {
	
// your code here
	let a = 0, b = 1, c;
  console.log(a);
  console.log(b);
  for (let i = 2; i < num; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }

}

module.exports = fibonacci;
