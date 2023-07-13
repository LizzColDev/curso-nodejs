function ordenarProducto(producto){
    return new Promise((resolve, reject) =>{
        console.log(`Ordenando: ${producto} de Bombón & Caramelo`);
        setTimeout(()=>{
            if(producto === 'torta'){
                resolve('Ordenando una torta de vainilla a Bombón & Caramelo');
            }else{
                reject(`Lo lamento, ${producto} no está disponible`)
            }
        }, 2000)
    })
}

function procesarPedido(respuesta) {
    return new Promise(resolve =>{
        console.log('Procesando respuesta ...');
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(() =>{
            resolve('Gracias por tu compra. Disfruta tu deliciosa torta')
        }, 4000);
    });
};

ordenarProducto('torta')
    .then(respuesta =>{
        console.log('Respuesta recibida');
        console.log(respuesta);
        return procesarPedido(respuesta);
    })
    .then(respuestaProcesada =>{
        console.log(respuestaProcesada);
    })
    .catch(error =>{
        console.log(error);
    }) 