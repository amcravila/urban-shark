const userId = localStorage.getItem('userID');

$(document).ready(function(){
  let partnerMovies = getPartnerMoviesInDB();
});

function getPartnerMoviesInDB() {
  const database = firebase.database();
  database.ref('/partners/').once('value')
  .then(function(snapshot){
    let movies = []
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      if (childKey === userId) {
        childSnapshot.forEach(function(d) {
          movies.push(d.val())
        })
      }
    })
    for (var valor of movies) {
      let image = valor.image;
      let title = valor.title;
      let discount = valor.discount;
      let coupons = valor.coupons;
      $('#coupons').append(
      `<div class="container-fluid" style="width: 18rem;">
       <img class="card-img-top" src="${image}" alt="Card image cap">
       <div class="card-body justify-content-between">
         <h5 class="card-title">${title}</h5>
         <h5 class="card-title">Desconto: ${discount} %</h5>
         <h5 class="card-title">Cupons: ${coupons}</h5>
       </div>
      </div>
      `);
    }
  })
}
