$(document).ready(function () {
  $("#reserve").click(updateReserve);

})

var database = firebase.database();
//atualizar cupons no firebase
//atualizar numero de cupons na tela
function updateReserve() {
  getCuponsDB()
}

function getCuponsDB() {

}
