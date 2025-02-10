/*/ Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes 
aprueban con 48Ptos. 
Se desea procesar a varios estudiantes y determinar la siguiente estadística: cantidad de 
aprobados, cantidad de reprobados y nota promedio de la sección. 
Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos), 
777 (50Ptos), 999 (40Ptos), 333 (80Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y 
222 (60Ptos) /*/
import Cl_estudiantes from "./Cl_estudiantes.js";
import Cl_salon from "./Cl_salon.js";

let estudiante1 = new Cl_estudiantes(888, 60);
let estudiante2 = new Cl_estudiantes(777, 50);
let estudiante3 = new Cl_estudiantes(999, 40);
let estudiante4 = new Cl_estudiantes(333, 80);
let estudiante5 = new Cl_estudiantes(111, 30);
let estudiante6 = new Cl_estudiantes(666, 90);
let estudiante7 = new Cl_estudiantes(444, 48);
let estudiante8 = new Cl_estudiantes(222, 60);

let salon = new Cl_salon()

salon.procesarEstudiante(estudiante1);
salon.procesarEstudiante(estudiante2);
salon.procesarEstudiante(estudiante3);
salon.procesarEstudiante(estudiante4);
salon.procesarEstudiante(estudiante5);
salon.procesarEstudiante(estudiante6);
salon.procesarEstudiante(estudiante7);
salon.procesarEstudiante(estudiante8);

alert("Cantidad de aprobados: " + salon.totalAprobados());
alert("Cantidad de reprobados: " + salon.totalReprobados());
alert("Nota promedio de la seccion: " + salon.promedio());