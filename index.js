// const database = firebase.database();
//
// $(document).ready(() => {
//
// database.ref('users/' + USER_ID).once('value')
//   .then(function(snapshot) {
//     let username = snapshot.val().name;
//     $('#user-name').html('Usuário: ' + name.toLowerCase());
//   });
//
// getAllMoviesFromDB();
//
//
//
// });

$(document).ready(function(){
  var movies = getMoviesInDB();
  console.log(movies);
  movies.filter( function (index) {

  })
})
function getMoviesInDB() {
  let banana = [];
  database.ref('/partners/').once('value')
  .then(function(snapshot){
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      childSnapshot.forEach(function(d) {
        banana.push(d.val());
      })
    })
  })
  return banana;
}

  // let template =`<div class="card" style="width: 18rem;">
  //   <div class="card-body d-flex justify-content-between">
  //     <h5 class="card-title">${movies.title}</h5>
  //     <h5 class="card-title">${movies.discount}</h5>
  //     <button type="button" data-id="${userCupon}" class="btn-list btn btn-secondary">Reserve</button>
  //   </div>
  // </div>`
  // $('#coupons').append(template);
      // database.ref('partners').once('value')
      // .then(function(snapshot) {
      //   snapshot.forEach(function(childSnapshot) {
      //     console.log(childSnapshot);
      //       getCoupons(childSnapshot);
      //     })
      //   })


  //   function getCoupons(childSnapshot) {
  //     console.log(childSnapshot);
  //     // database.ref ('users/' + idOwnerPosts).once('value')
  //     //   .then(function(snapshot) {
  //     //     var nameOwnerPosts = snapshot.val().name;
  //     //     var idOfPost = childSnapshot.key;
  //     //     var post = getTextPosts(childSnapshot);
  //     //     var postImg = getImgPosts(childSnapshot);
  //     //     var likesOfPost = childSnapshot.val().likes;
  //     //       printAllPosts(nameOwnerPosts, idOwnerPosts, idOfPost, post, postImg, likesOfPost);
  //     //   });
  //   }
  //
  // });


// var info = snapshot.val();
// for(user in info) {
//   for(userCupon of user) {
//     let template =`<div class="card" style="width: 18rem;">
//       <div class="card-body d-flex justify-content-between">
//         <h5 class="card-title">${userCupon.title}</h5>
//         <h5 class="card-title">${userCupon.discount}</h5>
//         <button type="button" data-id="${userCupon}" class="btn-list btn btn-secondary">Reserve</button>
//       </div>
//     </div>`
//     $('#coupons').append(template);
//     $(`.btnList[data-id=${user-userCupon}]`).on("click", () => {
//       localStorage.setItem('userCupon', userCupon);
//       localStorage.setItem('image', userCupon.image);
//       localStorage.setItem('cupons', userCupon.coupons);
//       localStorage.setItem('title', userCupon.title);
//       localStorage.setItem('description', userCupon.description);
//       localStorage.setItem('percent', userCupon.percent);
//       window.location = ".js";
//     })
//   }
// }
