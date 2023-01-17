// Objeto literal

const natalia = {
	name: "Natalia", // Propiedades
	age: 20,
	cursosAprobados: [
		"Curso Definitivo de HTML y CSS",
		"Curso Práctico de HTML y CSS"
	],

	// Métodos
	// Forma 1
	// aprobarCurso: function() {

	// }

	// Forma 2
	aprobarCurso(nuevoCurso) {
		this.cursosAprobados.push(nuevoCurso);
	}
};

// Hacer que Natalia apruebe otro curso
// natalia.cursosAprobados.push("Curso de Responsive Design");

// En consola

// natalia
// natalia.name = "Nath"
// natalia
// natalia.age += 1 // output 21
// natalia

// natalia
// natalia.aprobarCurso
// natalia.aprobarCurso("Curso de CSS Grid")
// natalia


// Función/prototipo/clase/molde

function Student(name, age, cursosAprobados) {
	// Atributos/propiedades
	this.name = name;
	this.age = age;
	this.cursosAprobados = cursosAprobados;

	// Métodos
	// Forma 1
	// this.aprobarCurso = function (nuevoCurso) {
	// 	this.cursosAprobados.push(nuevoCurso);
	// }
}

// Forma 2
Student.prototype.aprobarCurso = function (nuevoCurso) {
	this.cursosAprobados.push(nuevoCurso);
}

// Objeto juanita que se creó como una instancia del prototipo Student() 
const juanita = new Student(
	"Juanita",
	15,
	[
		"Curso de Introducción a la Producción de Videojuegos",
		"Curso de Creación de Personajes"
	]
);

// En consola

// natalia
// juanita
// juanita.aprobarCurso("Curso de Unreal Engine")
// juanita  