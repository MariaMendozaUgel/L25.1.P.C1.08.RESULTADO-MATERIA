import Cl_mEstudiantes from "./Cl_mEstudiantes.js";
export default class Cl_mSalon {
    constructor() {
        this.cantEstudiantes = 0;
        this.acumNota = 0;
        this.cantAprobados = 0;
        this.cantReprobados = 0;
    }
    procesarEstudiante(e) {
        this.cantEstudiantes ++;
        this.acumNota += e.nota;
        if (e.nota >= 48) this.cantAprobados ++;
        else this.cantReprobados ++;
    }
    totalAprobados() {
        return this.cantAprobados;
    }
    totalReprobados() {
        return this.cantReprobados;
    }
    promedio() {
        return this.acumNota / this.cantEstudiantes;
    }
}