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
      let valorItem = valor; 
      let coupons = valor.coupons;
      let description = valor.description;
      $('#coupons').css('display', 'flex');
      $('#coupons').css('flex-wrap', 'wrap');
      $('#coupons').css('justify-content', 'center');
      $('#coupons').append(
      `<div class="card" style="width: 18rem;">
       <img class="card-img-top" src="${image}" alt="Card image cap">
       <div class="card-body d-flex flex-column justify-content-around ">
         <h5 class="card-title">${title}</h5>
         <h5 class="card-title">Desconto: ${discount}%</h5>
       </div>
       <button type="button" data-id="${valorItem}" class="btn btn-secondary btn-sm btnList" style="width: 70px; height: 30px;">Reserve</button>
      </div>
      `);
      $(`.btnList[data-id="${valorItem}"]`).on("click", () => {
        $('#coupons').html('');
        $('#coupons').append(
          `
          <div class="container-fluid">
            <div class="row">
              <div class="col">
                <h5>Cinema</h5>
              </div>
            </div>
            <div class="d-flex justify-content-around row">
              <div class="col-4">
                <img src="${image}" alt="image">
              </div>
              <div class="col-8">
                <h5>${title}</h5>
                <p>Sinopse: ${description}</p>
                <p>Desconto: ${discount}%</p>
                <p>Quantidade de Cupons: ${coupons}</p>
                <button type="button" class="btn btn-primary">Reserve</button>
              </div>
            </div>
          </div>
          `)  
      })
    }
  })
}
