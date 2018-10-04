const database = firebase.database();

$(document).ready(() => {
  $('#submit-form').click(addCoupons);

  function addCoupons(event) {
    event.preventDefault();

    let movieTitle = $('#movie-title').val();
    let movieImage = $('#movie-image').val();
    let movieDescription = $('#movie-description').val();
    let coupons = $('#movie-coupons').val();
    let discount = $('#movie-discount option:selected').val();
    let movieFromDB = addCouponsToDB(movieTitle, movieImage, movieDescription, coupons, discount);
  }

  function addCouponsToDB(movieTitle, movieImage, movieDescription, cupons, discount) {
    return database.ref('partners/' + userId).push({
      movieTitle: movieTitle,
      movieImage: movieImage,
      movieDescription: movieDescription,
      coupons: coupons,
      discount: discount
    });
  }
});
