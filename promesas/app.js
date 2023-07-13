const promesaCumplida = false
const miPromesa = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        if(promesaCumplida){
            resolve('Promesa cumplida')
        }else{
            reject('Promesa rechazada...')
        }
    })
})

const manejarPromesaCumplida = (valor) =>{
    console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) =>{
    console.log(razonRechazo);
};

miPromesa.then(manejarPromesaCumplida,manejarPromesaRechazada )