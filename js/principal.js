/*/ Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes 
aprueban con 48Ptos. 
Se desea procesar a varios estudiantes y determinar la siguiente estadística: cantidad de 
aprobados, cantidad de reprobados y nota promedio de la sección. 
Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos), 
777 (50Ptos), 999 (40Ptos), 333 (80Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y 
222 (60Ptos) /*/
import Cl_vSalon from "./Cl_vSalon.js";
import Cl_mSalon from "./Cl_mSalon.js";
import Cl_controlador from "./Cl_controlador.js";

export default class principal {
    constructor() {
        let vista = new Cl_vSalon();
        let modelo = new Cl_mSalon();
        let controlador = new Cl_controlador(modelo, vista);
        vista.controlador = controlador
        }
}