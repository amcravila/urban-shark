$(document).ready(function(){
  let movies = getMoviesInDB();
  console.log(movies);
})
function getMoviesInDB() {
  database.ref('/partners/').once('value')
  .then(function(snapshot){
    let banana = []
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      childSnapshot.forEach(function(d) {
        banana.push(d.val())

      })
      })
      return banana;
    })
}
