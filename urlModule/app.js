const myUrl = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log(myUrl.hostname);  // www.ejemplo.org

console.log(myUrl.pathname); // /cursos/programacion

console.log(myUrl.searchParams); //URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' }

console.log(myUrl.searchParams.get('ordenar')) //vistas

console.log(myUrl.searchParams.get('nivel')) // 1

console.log(myUrl.query);
