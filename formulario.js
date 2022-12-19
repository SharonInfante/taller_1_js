
function formu_html_js(){
    let formu_html = document.querySelector('#formularioObjet')

    let formulario_html =

    `<div>
    <form>
        <label>Ida y Vuelta</label>
        <select>
            <option>Ida</option>
            <option>Ida y Vuelya</option>
        </select>
        <label>Pasajeros</label>
        <select class="selec">
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>    
    </form>`;
    `</div>`;
    formu_html.innerHTML = formulario_html;
}

formu_html_js();

/*let formulario = document.createElement('form')
let imprimir_formulario = document.createElement(
    `<label>Ida y Vuelta</label>
    <select>
        <option>Ida</option>
        <option>Ida y Vuelya</option>
    </select>
        <label>Pasajeros</label>
    <select class="selec">
        <option>1</option>
        <option>2</option>
        <option>3</option>
    </select>`
);

/*imprimir_formulario.appendChild(formulario);

document.getElementById('formularioObjet').appendChild(formulario)

formulario.innerHTML = imprimir_formulario;*/

function tabla_html(params) {
    let body = document.getElementsByTagName("body")[0];
   
    let tabla = document.createElement("table");
    let tbl_body = document.createElement("tbody");

    for (let i = 0; i < 2; i++) {
        let hilera = document.createElement("tr");

        for (let j = 0; j < 2; j++){
        let celda = document.createElement("td")
        let texto_celda = document.createTextNode(`celda en la hilera ${i} columna ${j}`);
        
        celda.appendChild(texto_celda);
        hilera.appendChild(celda);
        }

        tbl_body.appendChild(hilera);
    }
    tabla.appendChild(tbl_body);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");

    document.getElementsById(genera_tabla).appendChild(body);
}


