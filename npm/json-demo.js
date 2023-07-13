const course = require('./curso.json');

console.log(typeof course);

// JSON.stringify

let infoCourse = {
    "title": "Aprende Node.js",
    "numViews": 45642,
    "numLikes": 21123,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "isPublic": true
}

let infoCourseJSON = JSON.stringify(infoCourse);

console.log(infoCourseJSON)
console.log(typeof infoCourseJSON)

// cadena de caractéres a objeto

let inforCourseObject = JSON.parse(infoCourseJSON)
console.log(typeof inforCourseObject)
console.log(inforCourseObject)

