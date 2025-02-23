import Cl_mEstudiantes from "./Cl_mEstudiantes.js";
import Cl_vEstudiantes from "./Cl_vEstudiantes.js";

export default class Cl_vSalon {
    constructor() {
        this.controlador = null;
        this.mEstudiantes = null;
        this.vEstudiantes = new Cl_vEstudiantes();
        this.vista = document.getElementById("mainForm");
        this.tabla = document.createElement("mainForm_tabla");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.lblAprobados = document.getElementById("mainForm_lblAprobados");
        this.lblReprobados = document.getElementById("mainForm_lblReprobados");
        this.lblPromedio = document.getElementById("mainForm_lblPromedio");
        this.btAgregar.onclick = () => this.ocultar();
        this.vEstudiantes.btAceptar.onclick = () => this.controlador.agregarEstudiante();
        this.mostrar();
    }
    agregarEstudiante() {
        this.mEstudiantes = new Cl_mEstudiantes({
            cedula: this.vEstudiantes.cedula,
            nota: this.vEstudiantes.nota
        });
        this.mostrar();
        return this.mEstudiantes;
    }
    mostrar() {
        this.vista.hidden = false;
        this.vEstudiantes.ocultar();
    }
    ocultar() {
        this.vista.hidden = true;
        this.vEstudiantes.mostrar();
    }
    reportarEstudiante(totalAprobados, totalReprobados, promedio) {
        this.tabla.innerHTML = `<tr>
        <td>${this.vEstudiantes.cedula}</td>
        <td>${this.vEstudiantes.nota}</td>
        </tr>`;
        this.lblAprobados.innerHTML = totalAprobados;
        this.lblReprobados.innerHTML = totalReprobados;
        this.lblPromedio.innerHTML = promedio;
    }
}