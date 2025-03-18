const botonAgregar = document.getElementById("agregar");
const tabla = document.getElementById("tabla").getElementsByTagName('tbody')[0];

botonAgregar.onclick = function() {
    agregarTarea();
};

function agregarTarea() {
    const descripcion = document.getElementById("descripcion").value;

    if (descripcion) {
        let nuevaFila = tabla.insertRow();
        let celdaDescripcion = nuevaFila.insertCell(0);
        let celdaAcciones = nuevaFila.insertCell(1);

        celdaDescripcion.textContent = descripcion;
        celdaAcciones.innerHTML = '<button class="editar">Editar</button> <button class="eliminar">Eliminar</button>';

        document.getElementById("descripcion").value = "";

        agregarFuncionalidadBotones();
    }
}

function agregarFuncionalidadBotones() {
    let botonesEliminar = document.getElementsByClassName("eliminar");
    for (let i = 0; i < botonesEliminar.length; i++) {
        botonesEliminar[i].onclick = function() {
            this.parentNode.parentNode.remove();
        };
    }

    let botonesEditar = document.getElementsByClassName("editar");
    for (let i = 0; i < botonesEditar.length; i++) {
        botonesEditar[i].onclick = function() {
            let fila = this.parentNode.parentNode;
            let descripcion = fila.cells[0].textContent;

            fila.cells[0].innerHTML = '<input type="text" value="' + descripcion + '">';
            fila.cells[1].innerHTML = '<button class="guardar">Guardar</button>';

            let botonGuardar = fila.getElementsByClassName("guardar")[0];
            botonGuardar.onclick = function() {
                fila.cells[0].textContent = fila.cells[0].firstChild.value;
                fila.cells[1].innerHTML = '<button class="editar">Editar</button> <button class="eliminar">Eliminar</button>';
                agregarFuncionalidadBotones();
            };
        };
    }
}