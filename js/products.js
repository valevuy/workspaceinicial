var productsArray = []; /* define una lista vacia*/

function showProductsList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < productsArray.length; i++){
        let product = productsArray[i];

        htmlContentToAppend += `
        <a href="category-info.html" class="list-group-item list-group-item-action">  
            <div class="row">
                <div class="col-3">
                    <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ product.name +`</h4>
                        <small class="text-muted">` + product.productCount + ` artículos</small>
                    </div>
                    <p class="mb-1">` + product.description + `</p>
                </div>
            </div>
        </a>
        ` //<a> </a> es para que en link sea todo clickeable. clase de boostrap. SE Puede utilizar la misma estructura para por eje productos
        
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){ /*funcion anonima*/
    showSpinner();
    getJSONData(PRODUCTS_URL).then(function(resultObj){  /*lo tengo que procesar con un then porque lo que me devuleve un then es una promisse que se tiene que trabajar dentro de un then. Nunca salgo de la cadena de then . Se nombra el paquete que se recibe con una funcion anomima*/
        if (resultObj.status === "ok") /* se consulta si el estatus está ok*/
        {
            productsArray = resultObj.data; /* a la lista vacia categoriesArray, la completa con el otro campo dle objeto que esta nombrado como resultObj y tiene un campo data*/
            //Muestro productos ordenados
            showProductsList(productsArray); /* muestra los elementos de la lista */
        }
        hideSpinner();
    });
});