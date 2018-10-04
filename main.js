const database = firebase.database();

$(document).ready(() => {
  $('#submitForm').click(addCoupons);

  function addCoupons(event) {
    event.preventDefault();

    let movieTitle = $('#movie-title').val();
    console.log(movieTitle);
    let movieImage = $('#movie-image').val();
    console.log(movieImage);
    let movieDescription = $('#movie-description').val();
    console.log(movieDescription);
    let coupons = $('#movie-coupons').val();
    console.log(coupons);
    let discount = $('#movie-discount option:selected').val();
    console.log(discount);
  //   let movieFromDB = addMovieToDB(movieTitle, movieImage, movieDescription, coupons, discount);
  // }
  //
  //
  // function addMovieToDB(movieTitle, movieImage, movieDescription, cupons, discount) {
  //   return database.ref('partners/' + userId).push({
  //     movieTitle: movieTitle,
  //     movieImage: movieImage,
  //     movieDescription: movieDescription,
  //     coupons: coupons,
  //     discount: discount
  //   });
  }

});
