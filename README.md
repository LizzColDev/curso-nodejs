# Curso NodeJs y Express

Created: July 10, 2023 4:43 PM

<details>
<summary><b>Introducción a NodeJs</b></summary>
    
Node.js es un entorno de ejecución de código JavaScript del lado del servidor. A diferencia     de otros entornos de ejecución de JavaScript, como los navegadores web, Node.js permite         ejecutar código JavaScript fuera del contexto del navegador, lo que lo convierte en una         herramienta poderosa para desarrollar aplicaciones web y servicios de backend.

Node.js utiliza el motor de JavaScript de Google Chrome, llamado V8, para interpretar y         ejecutar el código JavaScript. Esto proporciona a Node.js un rendimiento rápido y               eficiente. Además, Node.js adopta un enfoque basado en eventos y no bloqueante, lo que          significa que puede manejar un gran número de conexiones simultáneas sin bloquear el hilo       principal de ejecución.

Una de las características más destacadas de Node.js es su capacidad para realizar operaciones de entrada y salida de manera asíncrona. Esto permite que las aplicaciones Node.js sean escalables y puedan manejar múltiples solicitudes simultáneas sin bloquearse. Además, Node.js cuenta con un sistema de módulos incorporado que facilita la modularidad y reutilización de código.

Node.js se utiliza comúnmente para desarrollar aplicaciones web y servicios de backend. Proporciona una gran cantidad de bibliotecas y frameworks que simplifican tareas comunes, como el manejo de solicitudes HTTP, la interacción con bases de datos y la creación de APIs RESTful.

</details>

<details>
<summary><b>Características de Node Js:</b></summary>
    
1. **JavaScript en el servidor**: Node.js permite ejecutar código JavaScript en el servidor, lo que proporciona coherencia en el lenguaje de programación tanto en el frontend como en el backend. Esto permite a los desarrolladores utilizar las mismas habilidades y bibliotecas para desarrollar aplicaciones tanto en el cliente como en el servidor.
2. **Arquitectura orientada a eventos**: Node.js utiliza un modelo de programación basado en eventos y devoluciones de llamada (callbacks), lo que significa que las operaciones no bloqueantes son manejadas mediante eventos. Esto permite un manejo eficiente de múltiples solicitudes simultáneas y un rendimiento escalable.
3. **Operaciones de entrada/salida no bloqueantes**: Node.js se basa en una arquitectura no bloqueante que permite que las operaciones de entrada/salida (E/S) se realicen de manera asíncrona. Esto significa que, en lugar de esperar a que se complete una operación E/S antes de pasar a la siguiente, Node.js puede continuar ejecutando otras tareas y notificar cuando la operación E/S haya finalizado. Esto es especialmente útil para aplicaciones con alta concurrencia y tiempos de respuesta rápidos.
4. **Módulos y paquetes**: Node.js cuenta con un sistema de módulos incorporado que permite la modularidad y reutilización de código. Los módulos de Node.js pueden ser compartidos y reutilizados a través del gestor de paquetes npm, que es uno de los mayores repositorios de paquetes de código abierto disponibles. Esto facilita la integración de bibliotecas y el desarrollo rápido de aplicaciones.
5. **Escalabilidad**: Node.js se ha diseñado para ser escalable. Gracias a su arquitectura no bloqueante y a su capacidad para manejar múltiples solicitudes simultáneas, Node.js es capaz de manejar una gran cantidad de conexiones concurrentes con un uso eficiente de los recursos del sistema.
6. **Amplio ecosistema**: Node.js cuenta con un amplio ecosistema de bibliotecas y frameworks que facilitan el desarrollo de aplicaciones. Desde frameworks web como Express.js hasta bibliotecas para el acceso a bases de datos como Mongoose, hay muchas opciones disponibles para simplificar y acelerar el desarrollo de aplicaciones con Node.js.

</details>

<details>
<summary><b>Conceptos importantes para trabajar con NodeJs y desarrollo backend</b></summary>

<details>
<summary><b>Conceptos Básicos</b></summary>

1. **Arquitectura cliente-servidor**: Es un modelo de diseño común en el desarrollo de aplicaciones y sistemas distribuidos. En esta arquitectura, hay dos componentes principales: el cliente y el servidor. El cliente es el dispositivo o aplicación que realiza solicitudes de servicios, y el servidor es el dispositivo o aplicación que responde a esas solicitudes proporcionando los servicios o recursos solicitados. La comunicación entre el cliente y el servidor se realiza a través de una red, como Internet. Por ejemplo, al acceder a un sitio web, el navegador actúa como el cliente y solicita los recursos al servidor web, que los entrega en respuesta.
2. **Desarrollo frontend y backend**: El desarrollo frontend se refiere a la creación de la interfaz de usuario y la interacción del usuario en una aplicación o sitio web. Implica el uso de tecnologías como HTML, CSS y JavaScript para construir la parte visual y funcional que los usuarios ven y con la que interactúan directamente en el navegador. Por otro lado, el desarrollo backend se enfoca en la implementación de la lógica de negocios y el procesamiento de datos detrás de escena. Involucra la creación de servidores, APIs y la gestión de bases de datos para manejar la lógica y el almacenamiento de los datos. El desarrollo frontend y backend trabajan juntos para crear una aplicación web completa.
3. **Protocolo**: En el contexto de las redes de computadoras, un protocolo es un conjunto de reglas y normas que define cómo se deben comunicar los dispositivos y sistemas. Establece la sintaxis, la semántica y los procedimientos de intercambio de datos entre las partes. Un protocolo puede incluir especificaciones sobre el formato de los mensajes, el control de flujo, la autenticación, la seguridad, la entrega de datos, entre otros aspectos. Algunos ejemplos de protocolos son HTTP, TCP, IP y SMTP, que se utilizan para diferentes propósitos de comunicación en Internet.
4. **Base de datos**: Una base de datos es un sistema organizado para almacenar, gestionar y recuperar información de manera estructurada. Proporciona un medio para almacenar datos de manera persistente, lo que significa que los datos se mantienen incluso cuando la aplicación o el sistema se detiene. Las bases de datos se utilizan para almacenar y gestionar grandes cantidades de datos de manera eficiente. Pueden ser de diferentes tipos, como bases de datos relacionales (como MySQL, PostgreSQL) o bases de datos NoSQL (como MongoDB, Redis), y se accede a ellas utilizando lenguajes de consulta, como SQL (Structured Query Language) en el caso de las bases de datos relacionales.
5. **Página web estática y dinámica**: Una página web estática es una página cuyo contenido no cambia dinámicamente, es decir, se muestra de la misma manera para todos los usuarios. La página se crea previamente y se entrega tal cual cuando se solicita. Estas páginas generalmente están escritas en HTML y CSS, y pueden contener imágenes y otros recursos estáticos. Por otro lado, una página web dinámica se genera en tiempo real en función de diferentes parámetros y condiciones. El contenido puede variar según la interacción del usuario, la base de datos o información externa. Estas páginas a menudo utilizan tecnologías del lado del servidor, como PHP, Python o Node.js, para generar contenido dinámico y responder a las solicitudes del usuario de manera personalizada.
</details>

<details>
<summary><b>Otros Conceptos importantes</b></summary>

1. **Módulos y paquetes**: Node.js utiliza un sistema de módulos incorporado para organizar y reutilizar código. Los módulos son archivos JavaScript que encapsulan funcionalidades específicas y se pueden importar/exportar en otros archivos. Además, puedes utilizar el gestor de paquetes npm (Node Package Manager) para instalar, administrar y compartir paquetes de código de terceros, lo que facilita la incorporación de funcionalidades adicionales en tu aplicación.
2. **Asincronía y devoluciones de llamada (callbacks)**: La asincronía es una característica clave de Node.js. Las operaciones de entrada/salida (E/S), como las solicitudes de red o las operaciones de archivo, se realizan de forma asíncrona mediante devoluciones de llamada (callbacks) o promesas. Esto significa que el código no se bloquea mientras se espera a que se complete una operación, lo que permite una mayor concurrencia y rendimiento. Es importante comprender cómo manejar las devoluciones de llamada y trabajar con la asincronía en Node.js.
3. **Eventos y emisores de eventos**: Node.js utiliza un sistema de eventos para manejar las interacciones asíncronas. Los objetos que emiten eventos son llamados "emisores de eventos" y se pueden registrar para escuchar eventos específicos. Esto es especialmente útil para manejar eventos relacionados con la red, como solicitudes HTTP o conexiones de sockets.
4. **APIs y módulos principales de Node.js**: Node.js proporciona una serie de módulos principales (core modules) que son parte de la instalación estándar y ofrecen funcionalidades esenciales. Algunos ejemplos incluyen **`http`** para crear servidores web, **`fs`** para trabajar con el sistema de archivos, **`path`** para manejar rutas de archivos y **`util`** para funciones de utilidad. Familiarizarse con estos módulos principales te permitirá aprovechar al máximo las capacidades de Node.js.
5. **Express.js y frameworks web**: Express.js es uno de los frameworks web más populares para Node.js. Proporciona una capa de abstracción sobre las funcionalidades básicas de Node.js, lo que facilita la creación de aplicaciones web y APIs RESTful. Aprender a trabajar con Express.js, entender sus conceptos y middleware te permitirá desarrollar aplicaciones web backend de manera más eficiente.
6. **Bases de datos**: Node.js es compatible con una amplia gama de bases de datos, tanto SQL como NoSQL. Algunas bases de datos populares son MongoDB, MySQL, PostgreSQL y Redis. Es importante entender cómo interactuar con estas bases de datos utilizando bibliotecas y módulos específicos, como Mongoose para MongoDB o Sequelize para bases de datos SQL.
7. **Seguridad**: Al desarrollar aplicaciones backend, es fundamental tener en cuenta la seguridad. Node.js tiene sus propias prácticas y recomendaciones de seguridad, como proteger contra ataques de inyección de código o manejar correctamente las contraseñas y la autenticación de usuarios. Es importante familiarizarse con las buenas prácticas de seguridad y aplicar medidas adecuadas en tu aplicación.
    </details>
</details>

<details>
<summary><b>Aplicaciones de NodeJs, es usado para?</b></summary>

1. **Desarrollo web y APIs**: Node.js es ampliamente utilizado para el desarrollo de aplicaciones web y la creación de APIs (Application Programming Interfaces) RESTful. Su enfoque no bloqueante y basado en eventos lo hace ideal para manejar una gran cantidad de solicitudes simultáneas y construir aplicaciones web escalables y de alto rendimiento. Frameworks populares como Express.js, Koa.js y Nest.js se basan en Node.js para facilitar el desarrollo web.
2. **Aplicaciones en tiempo real**: Node.js es una excelente opción para construir aplicaciones en tiempo real que requieren una comunicación bidireccional entre el cliente y el servidor. Esto incluye aplicaciones de chat en tiempo real, juegos multijugador, sistemas de colaboración en tiempo real, monitoreo en tiempo real, entre otros. Bibliotecas como Socket.IO y SockJS se utilizan con Node.js para habilitar la comunicación en tiempo real.
3. **Microservicios y arquitecturas orientadas a servicios**: Node.js es adecuado para implementar microservicios y sistemas basados en arquitecturas orientadas a servicios. Permite construir servicios pequeños e independientes que se pueden escalar y desplegar fácilmente. Además, su enfoque modular y su capacidad para manejar solicitudes simultáneas lo convierten en una buena opción para sistemas distribuidos y escalables.
4. **Automatización y scripting**: Node.js es una herramienta popular para la automatización de tareas y scripting en el lado del servidor. Puede utilizarse para crear scripts y herramientas personalizadas que automatizan tareas repetitivas, procesamiento de archivos, generación de informes, entre otros. Además, Node.js cuenta con una amplia gama de paquetes y módulos disponibles a través de npm que facilitan la automatización de diversas tareas.
5. **Internet de las cosas (IoT)**: Node.js también se utiliza en aplicaciones de Internet de las cosas (IoT). Su ligereza y eficiencia lo hacen adecuado para ejecutarse en dispositivos con recursos limitados, como sensores, controladores y gateways. Node.js puede utilizarse para recopilar datos de sensores, controlar dispositivos y coordinar la comunicación entre ellos en una red IoT.
</details>
    
<details>
<summary><b>Descargar e instalar NodeJs*</b></summary>

1. **Ir al sitio oficial**: Accede al sitio oficial de Node.js en **[https://nodejs.org/](https://nodejs.org/)**. Esto te llevará a la página de descargas.
2. **Seleccionar la versión**: En la página de descargas, verás las diferentes versiones de Node.js disponibles. Se recomienda elegir la versión LTS (Long-Term Support) para obtener la versión más estable y con soporte a largo plazo. Sin embargo, también puedes optar por la última versión si deseas acceder a las características más recientes.
3. **Seleccionar el sistema operativo**: A continuación, debes seleccionar tu sistema operativo. Node.js está disponible para Windows, macOS y Linux. Haz clic en el botón de descarga correspondiente a tu sistema operativo.
4. **Descargar el instalador**: Después de hacer clic en el botón de descarga, se descargará un archivo de instalación en tu computadora.
5. **Ejecutar el instalador**: Una vez que se haya completado la descarga, ejecuta el archivo de instalación haciendo doble clic en él. Esto iniciará el asistente de instalación de Node.js.
6. **Aceptar los términos de uso**: En el asistente de instalación, lee y acepta los términos de uso y licencia de Node.js.
7. **Seleccionar la ubicación de instalación**: A continuación, elige la ubicación donde deseas instalar Node.js. La ubicación predeterminada generalmente es adecuada para la mayoría de los usuarios, pero puedes cambiarla si lo deseas.
8. **Seleccionar componentes adicionales**: Durante el proceso de instalación, puedes seleccionar componentes adicionales, como la herramienta npm (Node Package Manager), que se instala junto con Node.js. Se recomienda mantener las opciones predeterminadas seleccionadas.
9. **Iniciar la instalación**: Una vez que hayas seleccionado los componentes adicionales, haz clic en el botón "Install" o "Next" para iniciar la instalación de Node.js.
10. **Esperar a que se complete la instalación**: El instalador copiará los archivos necesarios y configurará Node.js en tu sistema. Esto puede llevar unos minutos.
11. **Verificar la instalación**: Una vez que la instalación se haya completado con éxito, puedes verificar si Node.js se ha instalado correctamente abriendo una ventana de terminal (o símbolo del sistema) y escribiendo el comando **`node -v`**. Esto mostrará la versión de Node.js instalada. También puedes ejecutar **`npm -v`** para verificar la versión de npm.

¡Y eso es todo! Ahora tienes Node.js instalado en tu sistema y estás listo para comenzar a desarrollar aplicaciones con él.
</details>

<details>
<summary><b>El REPL de Node</b></summary>

El REPL (Read-Eval-Print Loop) de Node.js es una herramienta interactiva que permite probar y ejecutar código JavaScript de forma interactiva en tiempo real. Proporciona una forma rápida y conveniente de experimentar con el código y explorar las características del lenguaje.

Para iniciar el REPL de Node.js, sigue estos pasos:

1. Abre una ventana de terminal (o símbolo del sistema) en tu sistema operativo.
2. Escribe el comando **`node`** y presiona Enter. Esto iniciará el REPL de Node.js y verás el indicador **`>`** que indica que estás en el modo de entrada del REPL.
3. A partir de ahora, puedes escribir y ejecutar código JavaScript directamente en el REPL. Cada vez que presiones Enter, el código ingresado se evaluará y el resultado se imprimirá en la siguiente línea.

Por ejemplo, puedes probar operaciones matemáticas simples:

```
> 2 + 3
5
> Math.sqrt(16)
4
```

También puedes definir variables y realizar operaciones más complejas:

```
> let x = 5
undefined
> let y = 3
undefined
> x * y
15
> x > y
true
```

El REPL también es útil para probar funciones y módulos. Puedes definir funciones y llamarlas en el mismo entorno:

```
> function greet(name) {
    console.log('Hello, ' + name + '!')
    }
undefined
> greet('John')
Hello, John!
undefined

```

Para salir del REPL, puedes presionar las teclas **`Ctrl + C`** dos veces o escribir **`.exit`** y presionar Enter.

![Untitled](Curso%20NodeJs%20y%20Express%2032e1fd3555bc4ae599268e873bba5489/Untitled.png)

El REPL de Node.js es una herramienta muy útil para probar ideas rápidamente, depurar código o explorar características del lenguaje. Te permite interactuar con el código de forma inmediata sin necesidad de crear archivos o ejecutar un programa completo.
</details>

<details>
<summary><b>Primer programa con Node.js</b></summary>

En Visual Studio Code (VSCode), puedes ejecutar un archivo de JavaScript con Node.js utilizando la terminal integrada. Sigue estos pasos:

1. Abre Visual Studio Code.
2. Abre la carpeta que contiene el archivo de JavaScript que deseas ejecutar. Puedes hacerlo seleccionando "File" en la barra de menú superior y luego seleccionando "Open Folder". O bien, puedes arrastrar y soltar la carpeta en la ventana de VSCode.
3. En la barra de menú superior, selecciona "View" y luego "Terminal" (o usa el atajo de teclado **`Ctrl +`** ).
4. Aparecerá una terminal en la parte inferior de la ventana de VSCode. Asegúrate de que la terminal esté en el directorio correcto donde se encuentra el archivo de JavaScript que deseas ejecutar. Puedes utilizar el comando **`cd`** para cambiar al directorio adecuado.
5. Una vez que te encuentres en el directorio correcto, puedes ejecutar el archivo de JavaScript con el comando **`node`** seguido del nombre del archivo. Por ejemplo:

```
node archivo.js
```

Asegúrate de reemplazar "archivo.js" con el nombre real de tu archivo de JavaScript.

1. Presiona Enter para ejecutar el comando. Node.js ejecutará el archivo de JavaScript y mostrará cualquier salida o resultado en la terminal de VSCode.

Recuerda guardar los cambios en el archivo de JavaScript antes de ejecutarlo para asegurarte de que estás ejecutando la versión más reciente del código.

Utilizando la terminal integrada en Visual Studio Code, puedes ejecutar archivos de JavaScript con Node.js sin tener que salir del editor. Esto te permite depurar y probar tu código directamente en el entorno de desarrollo.

![Untitled](Curso%20NodeJs%20y%20Express%2032e1fd3555bc4ae599268e873bba5489/Untitled%201.png)
</details>

<details>
<summary><b>Módulos en Node.js</b></summary>
<details>
<summary><b>Qué son?</b></summary>
En Node.js, los módulos son unidades independientes de código que encapsulan funcionalidades específicas y se pueden reutilizar en diferentes partes de una aplicación. Los módulos permiten organizar y modularizar el código, lo que facilita el mantenimiento, la reutilización y la colaboración en proyectos de Node.js.
</details>
<details>
<summary><b>Ventajas</b></summary>

Los módulos en Node.js proporcionan varias ventajas que mejoran la organización, reutilización y mantenibilidad del código. Algunas de las ventajas de utilizar módulos en Node.js son:

1. **Modularidad**: Los módulos permiten organizar el código en unidades independientes y autónomas. Esto facilita la comprensión y el mantenimiento del código, ya que cada módulo se enfoca en una funcionalidad específica. Los módulos también promueven la separación de responsabilidades y el principio de una sola responsabilidad (SRP), lo que facilita la evolución y escalabilidad de la aplicación.
2. **Reutilización**: Los módulos permiten encapsular funcionalidades específicas y reutilizarlas en diferentes partes de una aplicación. Esto evita la duplicación de código y mejora la eficiencia en el desarrollo, ya que no es necesario escribir el mismo código una y otra vez. Además, los módulos externos disponibles a través de npm proporcionan una amplia gama de funcionalidades predefinidas que se pueden utilizar en proyectos.
3. **Colaboración y compartición**: Los módulos facilitan la colaboración entre desarrolladores. Cada desarrollador puede trabajar en un módulo específico sin interferir con el trabajo de los demás. Además, los módulos externos pueden compartirse y distribuirse fácilmente a través del registro público de npm. Esto fomenta la comunidad y el intercambio de código entre desarrolladores, lo que acelera el desarrollo de aplicaciones.
4. **Abstracción y ocultamiento de información**: Los módulos permiten definir interfaces claras y abstraer detalles internos de implementación. Esto significa que los módulos pueden exponer solo las funciones y propiedades necesarias para utilizarlos, ocultando los detalles internos de implementación. Esto mejora la seguridad y reduce la complejidad al interactuar con los módulos.
5. **Facilidad de prueba**: Los módulos independientes son más fáciles de probar de forma aislada. Al encapsular la funcionalidad en módulos, se puede realizar pruebas unitarias más específicas y centradas en cada módulo. Esto mejora la calidad del código y facilita la detección y corrección de errores.
6. **Mejora el rendimiento**: Los módulos en Node.js se cargan de forma diferida, lo que significa que solo se cargan cuando se requieren. Esto permite una mejor gestión de los recursos y un mejor rendimiento de la aplicación, ya que solo se cargan los módulos necesarios en un momento dado.
</details>

<details>
<summary><b>Crear un módulo</b></summary>
Para crear un módulo en Node.js, debes seguir los siguientes pasos:

1. Crea un nuevo archivo JavaScript con la extensión **`.js`**. Por ejemplo, puedes llamarlo **`miModulo.js`**.
2. Abre el archivo **`miModulo.js`** en tu editor de código preferido.
3. Define las funcionalidades que deseas incluir en el módulo. Por ejemplo, puedes declarar variables, funciones u objetos. Aquí hay un ejemplo básico de cómo podrías definir un módulo con una función de saludo:

```
javascriptCopy code
// miModulo.js

function saludar(nombre) {
    console.log('¡Hola, ' + nombre + '!');
}

// Exporta la función para que esté disponible para otros archivos
module.exports = {
    saludar: saludar
};

```

En este ejemplo, el módulo **`miModulo`** tiene una función llamada **`saludar`** que toma un nombre como argumento y muestra un saludo por consola.

1. Guarda el archivo **`miModulo.js`**.
2. Ahora puedes utilizar el módulo en otro archivo de JavaScript. Por ejemplo, crea un nuevo archivo llamado **`index.js`** y requiere el módulo **`miModulo`** utilizando la función **`require`**:

```
javascriptCopy code
// index.js

const miModulo = require('./miModulo');

miModulo.saludar('Juan');

```

En este ejemplo, estamos requiriendo el módulo **`miModulo`** y utilizando la función **`saludar`** que exportamos desde ese módulo.

1. Guarda el archivo **`index.js`**.
2. Abre una terminal en la ubicación donde se encuentran los archivos **`miModulo.js`** y **`index.js`**.
3. Ejecuta el archivo **`index.js`** utilizando Node.js con el siguiente comando:

```
Copy code
node index.js

```

Verás el saludo impreso en la consola.

¡Y eso es todo! Has creado y utilizado un módulo en Node.js. Puedes seguir expandiendo tu módulo agregando más funcionalidades y exportándolas según sea necesario. Recuerda que puedes exportar variables, funciones o cualquier objeto que desees hacer disponible para otros archivos de JavaScript.
</details>

<details>
<summary><b>Exportar Varios Elementos</b></summary>
Para exportar varios elementos desde un módulo en Node.js, puedes utilizar la asignación al objeto **`module.exports`** para agregar propiedades individuales o asignar un objeto que contenga los elementos que deseas exportar. Aquí tienes un ejemplo de cómo puedes exportar varios elementos:

En el archivo **`greetings.js`**, se definen dos funciones: **`greeting`** y **`greetingHelloWorld`**. La función **`greeting`** toma un parámetro **`name`** y devuelve un saludo personalizado. La función **`greetingHelloWorld`** no toma parámetros y devuelve un saludo genérico "Hello World!".

Luego, se utiliza la asignación directa a **`module.exports`** para exportar un objeto que contiene las funciones **`greeting`** y **`greetingHelloWorld`**.

```jsx
function greeting(name) {
    return `Hi ${name}`
}

function greetingHelloWorld(){
    return 'Hello World!'
}

module.exports = {
    greeting: greeting,
    greetingHelloWorld: greetingHelloWorld
}
```

En este caso, **`module.exports`** se establece como un objeto que tiene dos propiedades: **`greeting`** y **`greetingHelloWorld`**. Estas propiedades hacen referencia a las funciones definidas anteriormente.

En el archivo **`app.js`**, se requiere el módulo **`greetings.js`** utilizando **`require`**:

Esto carga el módulo **`greetings.js`** y asigna su contenido al objeto **`greetings`**.

Finalmente, se utilizan las funciones exportadas **`greeting`** y **`greetingHelloWorld`** desde el módulo **`greetings.js`**:

```jsx
function greeting(name) {
    return `Hi ${name}`
}

function greetingHelloWorld(){
    return 'Hello World!'
}

module.exports = {
    greeting: greeting,
    greetingHelloWorld: greetingHelloWorld
}
```

Aquí, **`greetings.greeting('Samantha')`** llama a la función **`greeting`** exportada desde el módulo **`greetings.js`** y pasa el argumento **`'Samantha'`**. El resultado se imprime en la consola.

De manera similar, **`greetings.greetingHelloWorld()`** llama a la función **`greetingHelloWorld`** exportada desde el módulo **`greetings.js`**. Como esta función no toma ningún argumento, simplemente devuelve el saludo "Hello World!". Nuevamente, el resultado se imprime en la consola.

![Untitled](Curso%20NodeJs%20y%20Express%2032e1fd3555bc4ae599268e873bba5489/Untitled%202.png)
</details>

<details>
<summary><b>Sintaxis de desestructuración y require()</b></summary>

**Require y Exportación de Módulos**:
En Node.js, puedes utilizar **`require`** para cargar módulos y la exportación e importación de módulos se realiza a través de **`module.exports`** y **`require`**.

1. **Exportación de módulos**:

```
javascriptCopy code
// módulo.js
const greeting = 'Hello';

function sayHello(name) {
    console.log(`${greeting}, ${name}!`);
}

module.exports = { sayHello };

```

En este ejemplo, estamos exportando la función **`sayHello`** desde el módulo **`módulo.js`** utilizando **`module.exports`**.

1. **Importación de módulos**:

```
javascriptCopy code
const { sayHello } = require('./módulo.js');

sayHello('John'); // Output: Hello, John!

```

Aquí, estamos importando la función **`sayHello`** desde el módulo **`módulo.js`** utilizando la sintaxis de desestructuración. Luego, podemos llamar a la función **`sayHello`** y pasar un argumento para obtener el saludo correspondiente.

Es importante tener en cuenta que la ruta **`./módulo.js`** en el ejemplo es un ejemplo de ruta relativa al archivo actual. Asegúrate de proporcionar la ruta correcta al módulo que deseas importar.

Estos ejemplos te muestran cómo utilizar la desestructuración, **`require`** y la exportación e importación de módulos en JavaScript. Utilizando estas sintaxis, puedes estructurar y modularizar tu código de manera efectiva y reutilizable en diferentes partes de tu aplicación.
</details>

</details>

<details>
<summary><b>Módulos principales de Node.js:</b></summary>
<details>
<summary><b>Módulos integrados (built-in modules)</b></summary>
<summary><b>Concepto</b></summary>
Node.js incluye varios módulos integrados (built-in modules) que están disponibles de forma predeterminada sin necesidad de instalar nada adicional. Estos módulos proporcionan funcionalidades esenciales para el desarrollo de aplicaciones en Node.js.
</details>
<details>
<summary><b>Más utilizados:</b></summary>

1. **fs**: El módulo **`fs`** (File System) proporciona funciones para interactuar con el sistema de archivos, permitiendo leer, escribir, modificar, borrar archivos y directorios, entre otras operaciones relacionadas con el sistema de archivos.
2. **http**: El módulo **`http`** permite crear y manejar servidores HTTP. Proporciona funciones y clases para crear servidores web, realizar solicitudes y respuestas HTTP, manipular cabeceras, rutas, entre otros.
3. **path**: El módulo **`path`** proporciona utilidades para trabajar con rutas de archivos y directorios. Ayuda a manejar rutas de forma segura y portátil, uniendo, normalizando o resolviendo rutas, entre otras operaciones.
4. **os**: El módulo **`os`** proporciona funciones para interactuar con el sistema operativo. Permite obtener información sobre el sistema operativo, como el nombre del sistema operativo, la arquitectura, la memoria, la información del usuario, entre otros.
5. **util**: El módulo **`util`** contiene funciones y utilidades diversas que son útiles para el desarrollo de aplicaciones en Node.js. Proporciona funciones para la herencia de objetos, la promisificación de funciones, la manipulación de objetos, la gestión de errores, entre otras funcionalidades.
6. **events**: El módulo **`events`** permite la implementación y el manejo de eventos en Node.js. Permite la comunicación asíncrona entre diferentes partes de una aplicación a través de la emisión y escucha de eventos.

Estos son solo algunos ejemplos de los módulos integrados que están disponibles en Node.js. Existen otros módulos incorporados como **`crypto`** para funcionalidades criptográficas, **`stream`** para trabajar con flujos de datos, **`child_process`** para la ejecución de procesos secundarios, entre otros. Puedes explorar la documentación oficial de Node.js para obtener más información sobre estos módulos y sus funcionalidades específicas: **[https://nodejs.org/api/](https://nodejs.org/api/)**.
</details>
<details>
<summary><b>Módulo Console:</b></summary>

El módulo **`console`** es un módulo integrado en Node.js que proporciona funciones para imprimir mensajes y depurar en la consola. Permite mostrar información, mensajes de depuración, advertencias y errores en la salida de la consola.

Aquí hay algunos métodos comunes proporcionados por el módulo **`console`**:

1. **console.log()**: Imprime un mensaje en la consola. Puede aceptar varios argumentos y los muestra como una cadena formateada.

```jsx
console.log('Hola, mundo!');
// Output: Hola, mundo!

const nombre = 'Juan';
console.log('Hola,', nombre);
// Output: Hola, Juan
```

1. **console.error()**: Imprime un mensaje de error en la consola. Al igual que **`console.log()`**, puede aceptar varios argumentos.

```jsx
console.error('Ocurrió un error');
// Output: Ocurrió un error

const errorCode = 404;
console.error('Error', errorCode, ': Página no encontrada');
// Output: Error 404: Página no encontrada
```

1. **console.warn()**: Imprime un mensaje de advertencia en la consola. Similar a **`console.log()`** y **`console.error()`**, puede aceptar varios argumentos.

```jsx
console.warn('Advertencia: Esta acción es irreversible');
// Output: Advertencia: Esta acción es irreversible

const warningMessage = 'Falta información';
console.warn('Advertencia:', warningMessage);
// Output: Advertencia: Falta información
```

1. **console.info()**: Imprime un mensaje informativo en la consola. Funciona de manera similar a **`console.log()`** y **`console.error()`**.

```jsx
console.info('Información importante');
// Output: Información importante

const infoMessage = '¡La sesión ha iniciado correctamente!';
console.info('Información:', infoMessage);
// Output: Información: ¡La sesión ha iniciado correctamente!
```

Estos son solo algunos de los métodos proporcionados por el módulo **`console`**. También existen otros métodos, como **`console.debug()`**, **`console.trace()`**, entre otros. Puedes utilizarlos para imprimir mensajes y realizar tareas de depuración en tu aplicación Node.js.
</details>

<details>
<summary><b>Módulo Process</b></summary>

El módulo **`process`** es un módulo integrado en Node.js que proporciona información y control sobre el proceso en ejecución. Contiene propiedades y métodos que permiten acceder a los argumentos de línea de comandos, entorno, flujo de entrada y salida, entre otros aspectos del proceso en Node.js.

Aquí hay algunos aspectos clave del módulo **`process`**:

1. **process.argv**: Es un array que contiene los argumentos de línea de comandos pasados al script. El primer elemento (**`process.argv[0]`**) representa la ruta al ejecutable de Node.js y el segundo elemento (**`process.argv[1]`**) representa la ruta al archivo de script ejecutado. Los argumentos adicionales se encuentran en las posiciones siguientes.

```jsx
// node script.js arg1 arg2 arg3
console.log(process.argv);

// Output: ['node', '/ruta/al/script.js', 'arg1', 'arg2', 'arg3']
```

1. **process.env**: Es un objeto que contiene las variables de entorno del sistema operativo. Puedes acceder a las variables de entorno utilizando las claves del objeto **`process.env`**.

```jsx
console.log(process.env.HOME); 
// Output: '/home/user'

console.log(process.env.PATH); 
// Output: '/usr/local/bin:/usr/bin:/bin'
```

1. **process.stdin**: Es un stream que representa el flujo de entrada estándar (stdin). Puedes utilizarlo para leer la entrada del usuario desde la consola.

```jsx
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
    console.log('Entrada recibida:', data);
});

console.log('Ingrese algo:');
```

En este ejemplo, estamos configurando un controlador de eventos para el evento **`'data'`** en **`process.stdin`**. Cada vez que se ingresa algo en la consola, el controlador se activa y muestra la entrada recibida.

1. **process.stdout** y **process.stderr**: Representan los flujos de salida estándar (stdout) y error estándar (stderr), respectivamente. Puedes utilizarlos para mostrar mensajes y resultados en la consola.

```
javascriptCopy code
process.stdout.write('Esto es un mensaje en stdout\n');
// Output: Esto es un mensaje en stdout

process.stderr.write('Esto es un mensaje de error en stderr\n');
// Output: Esto es un mensaje de error en stderr

```

Estos son solo algunos ejemplos de las funcionalidades que proporciona el módulo **`process`**. También puedes utilizar **`process.exit()`** para terminar la ejecución del proceso, **`process.cwd()`** para obtener el directorio de trabajo actual, **`process.pid`** para obtener el ID del proceso, entre otros.

El módulo **`process`** es una parte integral de Node.js y proporciona información y control sobre el proceso en ejecución, permitiéndote interactuar con el entorno, la entrada/salida y otros aspectos del proceso. Puedes consultar la documentación oficial de Node.js para obtener más información sobre el módulo **`process`** y sus funcionalidades específicas: **[https://nodejs.org/api/process.html](https://nodejs.org/api/process.html)**.
            
</details>

<details>
<summary><b>Módulo OS:</b></summary>

El módulo **`os`** es un módulo integrado en Node.js que proporciona funciones y utilidades para interactuar con el sistema operativo. Permite acceder a información relacionada con el sistema operativo, como la arquitectura de la CPU, el nombre del sistema operativo, la información de red, la memoria, entre otros.

Aquí tienes algunos aspectos clave del módulo **`os`**:

1. **os.platform()**: Devuelve el nombre de la plataforma del sistema operativo en la que se está ejecutando Node.js, como **`"darwin"`** para macOS, **`"win32"`** para Windows, o **`"linux"`** para Linux.

```
javascriptCopy code
console.log(os.platform()); // Output: 'darwin'

```

1. **os.arch()**: Devuelve la arquitectura de la CPU del sistema, como **`"x64"`**, **`"arm"`**, **`"ia32"`**, etc.

```
javascriptCopy code
console.log(os.arch()); // Output: 'x64'

```

1. **os.hostname()**: Devuelve el nombre del host del sistema.

```
javascriptCopy code
console.log(os.hostname()); // Output: 'mi-pc'

```

1. **os.totalmem()** y **os.freemem()**: Devuelven la cantidad total de memoria del sistema y la cantidad de memoria libre, respectivamente, en bytes.

```
javascriptCopy code
console.log(os.totalmem()); // Output: 8589934592 (8 GB)
console.log(os.freemem()); // Output: 4294967296 (4 GB)

```

1. **os.cpus()**: Devuelve un arreglo de objetos que representan la información de cada núcleo de la CPU del sistema.

```
javascriptCopy code
console.log(os.cpus());
// Output:
// [
//   { model: 'Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz', speed: 2800 },
//   { model: 'Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz', speed: 2800 },
//   ...
// ]

```

Estos son solo algunos ejemplos de las funcionalidades que proporciona el módulo **`os`**. También puedes utilizar **`os.networkInterfaces()`** para obtener información sobre las interfaces de red del sistema, **`os.uptime()`** para obtener el tiempo de actividad del sistema, **`os.tmpdir()`** para obtener el directorio temporal predeterminado del sistema, entre otros.

El módulo **`os`** es muy útil para obtener información del sistema operativo y realizar operaciones relacionadas con el entorno en el que se está ejecutando tu aplicación Node.js. Puedes consultar la documentación oficial de Node.js para obtener más información sobre el módulo **`os`** y sus funcionalidades específicas: **[https://nodejs.org/api/os.html](https://nodejs.org/api/os.html)**.
</details>

<details>
<summary><b>Módulo Timers:</b></summary>

El módulo **`timers`** es un módulo integrado en Node.js que proporciona funciones y utilidades para trabajar con temporizadores. Permite programar la ejecución de funciones en un momento futuro o repetir la ejecución de funciones a intervalos regulares.

Aquí tienes algunos aspectos clave del módulo **`timers`**:

1. **setTimeout()**: La función **`setTimeout()`** se utiliza para programar la ejecución de una función después de un cierto período de tiempo, expresado en milisegundos.

```
javascriptCopy code
setTimeout(() => {
console.log('¡Han pasado 2 segundos!');
}, 2000);

```

En este ejemplo, la función **`console.log()`** se ejecutará después de 2 segundos.

1. **setInterval()**: La función **`setInterval()`** se utiliza para repetir la ejecución de una función a intervalos regulares, expresados en milisegundos.

```
javascriptCopy code
let counter = 0;

const intervalId = setInterval(() => {
console.log('Contador:', counter);
counter++;

if (counter === 5) {
clearInterval(intervalId);
console.log('Intervalo finalizado');
}
}, 1000);

```

En este ejemplo, la función **`console.log()`** se ejecutará cada segundo. Después de que el contador alcance el valor 5, se cancela el intervalo utilizando **`clearInterval()`**.

1. **setImmediate()**: La función **`setImmediate()`** se utiliza para programar la ejecución de una función en la siguiente iteración del bucle de eventos, después de que se hayan procesado los eventos actuales.

```
javascriptCopy code
setImmediate(() => {
console.log('¡Esto se ejecuta inmediatamente!');
});

```

En este ejemplo, la función se ejecutará en la siguiente iteración del bucle de eventos.

Estas son solo algunas de las funcionalidades proporcionadas por el módulo **`timers`**. También puedes utilizar **`clearTimeout()`** para cancelar un temporizador creado con **`setTimeout()`**, **`clearInterval()`** para cancelar un intervalo creado con **`setInterval()`**, entre otros.

El módulo **`timers`** es útil cuando necesitas programar la ejecución de funciones en un momento futuro o realizar tareas repetitivas en intervalos regulares en tu aplicación Node.js.
</details>
</details>
<details>
<summary><b>Módulos externos (third-party modules)</b></summary>

```jsx
const express = require('express');
```

Además de los módulos integrados, Node.js permite utilizar módulos externos desarrollados por la comunidad de desarrolladores. Estos módulos se encuentran disponibles a través del gestor de paquetes npm (Node Package Manager). npm es una herramienta que facilita la instalación, gestión y compartición de paquetes de código de terceros. Puedes explorar y buscar módulos en el registro público de npm en **[https://www.npmjs.com/](https://www.npmjs.com/)**. Para utilizar un módulo externo, primero debes instalarlo en tu proyecto utilizando el comando **`npm install`**. Luego, puedes requerirlo en tu código de la misma manera que con los módulos integrados. Por ejemplo:

Además de requerir módulos, Node.js también permite exportar código desde un módulo para que pueda ser utilizado en otros archivos. Esto se hace utilizando la variable **`module.exports`** o la función **`exports`**. Por ejemplo, en un archivo **`myModule.js`**:

```jsx
// Exportar una función
exports.saludar = function(nombre) {
    console.log('Hola, ' + nombre + '!');
};

// Exportar una variable
exports.numero = 42;
```

Luego, en otro archivo, puedes requerir y utilizar el módulo:

```jsx
const myModule = require('./myModule');

myModule.saludar('Juan'); // Imprime: Hola, Juan!
console.log(myModule.numero); // Imprime: 42
```
</details>

</details>
