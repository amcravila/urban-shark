$(document).ready(() => {
  $('#signup-button').click((event) => {
    event.preventDefault();
    const database = firebase.database();
    const name = $('.signup-name').val();
    const mail = $('.signup-email').val();
    const pass = $('.signup-pass').val();

    // Sign Up
    firebase.auth().createUserWithEmailAndPassword(mail, pass)
      .then((response) => {
        database.ref('user/' + response.user.uid).set({
          email: mail,
          password: pass
        });
      $('form').append(`<span class='message'>Success!</span>`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/email-already-in-use') {
          alert('This e-mail already exists.');
        } else {
          alert(errorMessage);
        }
      });
  });

  $('#login-button').click((event) => {
    event.preventDefault();
    const mail = $('.signup-email').val();
    const pass = $('.signup-pass').val();

    // Login
    firebase.auth().signInWithEmailAndPassword(mail, pass)
      .then((response) => {
        window.location = 'home.html?id=' + response.user.uid + '&';
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        $('form').append(`<span class='message'>${errorMessage}</span>`);
      });
  });
});
