console.log(process.env)
console.log(process.memoryUsage())

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  console.log('Entrada recibida:', data);
});

console.log('Ingrese algo:');

// node script.js arg1 arg2 arg3
console.log(process.argv);

// Output: ['node', '/ruta/al/script.js', 'arg1', 'arg2', 'arg3']
