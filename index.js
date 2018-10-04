$(document).ready(function(){
  let movies = getMoviesInDB();
});

function getMoviesInDB() {
  database.ref('/partners/').once('value')
  .then(function(snapshot){
    let movies = []
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      childSnapshot.forEach(function(d) {
        movies.push(d.val())
      })
    })
    for (var valor of movies) {
      let image = valor.image;
      let title = valor.title;
      let discount = valor.discount;
      $('#coupons').append(
      `<div class="card" style="width: 18rem;">
       <img class="card-img-top" src="${image}" alt="Card image cap">
       <div class="card-body d-flex justify-content-between">
         <h5 class="card-title">${title}</h5>
         <h5 class="card-title">${discount}</h5>
         <button type="button" data-id="${valor}" class="btn btn-secondary btnList">Reserve</button>
       </div>
      </div>
      `);
      $(`.btnList[data-id="${valor}"]`).on("click", () => {
        localStorage.setItem('userCupon', valor);
        localStorage.setItem('image', valor.image);
        localStorage.setItem('cupons', valor.coupons);
        localStorage.setItem('title', valor.title);
        localStorage.setItem('description', valor.description);
        localStorage.setItem('percent', valor.percent);
        window.location = "ok.html";
      })
    }
  })
}
