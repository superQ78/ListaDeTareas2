const botonAgregar = document.getElementById("agregar");
const tabla = document.getElementById("tabla").getElementsByTagName('tbody')[0];

botonAgregar.onclick = function() {
    agregarPelicula();
};

function agregarPelicula() {
    const titulo = document.getElementById("titulo").value;
    const genero = document.getElementById("genero").value;
    const duracion = document.getElementById("duracion").value;

    if (titulo && genero && duracion) {
        let nuevaFila = tabla.insertRow();
        let celdaTitulo = nuevaFila.insertCell(0);
        let celdaGenero = nuevaFila.insertCell(1);
        let celdaDuracion = nuevaFila.insertCell(2);
        let celdaAcciones = nuevaFila.insertCell(3);

        celdaTitulo.textContent = titulo;
        celdaGenero.textContent = genero;
        celdaDuracion.textContent = duracion;
        celdaAcciones.innerHTML = '<button class="editar">Editar</button> <button class="eliminar">Eliminar</button>';

        document.getElementById("titulo").value = "";
        document.getElementById("genero").value = "";
        document.getElementById("duracion").value = "";

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
            let titulo = fila.cells[0].textContent;
            let genero = fila.cells[1].textContent;
            let duracion = fila.cells[2].textContent;

            fila.cells[0].innerHTML = '<input type="text" value="' + titulo + '">';
            fila.cells[1].innerHTML = '<input type="text" value="' + genero + '">';
            fila.cells[2].innerHTML = '<input type="text" value="' + duracion + '">';
            fila.cells[3].innerHTML = '<button class="guardar">Guardar</button>';

            let botonGuardar = fila.getElementsByClassName("guardar")[0];
            botonGuardar.onclick = function() {
                fila.cells[0].textContent = fila.cells[0].firstChild.value;
                fila.cells[1].textContent = fila.cells[1].firstChild.value;
                fila.cells[2].textContent = fila.cells[2].firstChild.value;
                fila.cells[3].innerHTML = '<button class="editar">Editar</button> <button class="eliminar">Eliminar</button>';
                agregarFuncionalidadBotones();
            };
        };
    }
}