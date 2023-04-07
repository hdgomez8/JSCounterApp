// Pasos Para Ejecutar JS
let count = 0;
// 1 - Encontrar el elemento html.
const contador = document.getElementById("contador");
const aumentar = document.getElementById("aumentar");
const disminuir = document.getElementById("disminuir");
// 2 - Decirle a esos elementos lo que queremos que haga,
// en este caso escuchar un evento click.
// 3 - Ejecutar la logica
aumentar.addEventListener("click", () => {
    count++;
    contador.innerHTML = count;
});
disminuir.addEventListener("click", () => {
    count--;
    contador.innerHTML = count;
});