// fs - fyle System 
const fs = require('fs')

fs.readFile('./index.html', 'utf-8', (err, contenido)=>{
	if(err) {
		throw err;
	}else{
		console.log(contenido);
	}
});

fs.rename('index.html', 'main.html', (err) => {
	if(err){
		throw err;
	}
	console.log('nombre cambiado exitosamente')
})