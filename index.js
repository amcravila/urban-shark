const database = firebase.database();

$(document).ready(() => {

database.ref('users/' + USER_ID).once('value')
  .then(function(snapshot) {
    let username = snapshot.val().name;
    $('#user-name').html('Usuário: ' + name.toLowerCase());
  });

getAllMoviesFromDB();



});
