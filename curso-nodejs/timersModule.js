//setTimeout(function, retraso, argumento)
//setTimeout(function, retraso, argumento1, argumento2)

function mostrarTema(tema){
	console.log(`Estoy aprendiendo ${tema}`)
}

setTimeout(mostrarTema, 3000, 'Node.js')

// setInterval(mostrarTema, 1500, 'Node.js')

// función con varios argumentos

function sum(a, b){
	console.log(a*b)
}

setTimeout(sum, 2000, 5, 6)

// setImmediate(función, argumento1, argumento2) - se ejecúta después del código síncrono
setImmediate(sum, 5,3)
