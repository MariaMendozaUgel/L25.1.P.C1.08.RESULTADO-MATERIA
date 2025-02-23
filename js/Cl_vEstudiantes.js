export default class Cl_vEstudiantes {
    constructor() {
        this.vista = document.getElementById("estudianteForm");
        this.inCedula = document.getElementById("estudianteForm_inCedula");
        this.inNota = document.getElementById("estudianteForm_inNota");
        this.btAceptar = document.getElementById("estudianteForm_btAceptar");
    }
    get cedula() {
        return +this.inCedula.value;
    }
    get nota() {
        return +this.inNota.value;
    }   
    mostrar () {
        this.vista.hidden = false;
    }
    ocultar () {
        this.vista.hidden = true;
    }
}