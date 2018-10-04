const database = firebase.database();

$(document).ready(function() {
  $('#submit-register').click(signUpClick);
  $('#submit-login').click(signInClick);
});

function signUpClick(event) {
  event.preventDefault();

  const name = $('#nameRegister').val();
  const mail = $('#emailRegister').val();
  const pass = $('#passwordRegister').val();

  firebase.auth().createUserWithEmailAndPassword(mail, pass)
    .then((response) => {
      const userId = response.user.uid;
      database.ref('users/' + userId).set({
        name,
        email: mail
      });
    $('#form-register').append(`<span class='message'>Success!</span>`);
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
};

function signInClick(event) {
  event.preventDefault();
  const mail = $('#email').val();
  const pass = $('#password').val();

  firebase.auth().signInWithEmailAndPassword(mail, pass)
    .then((response) => {
      const userId = response.user.uid;
      localStorage.setItem('userID', userId);
      window.location = 'partners.html';
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      $('#formLogin').append(`<span class='message'>${errorMessage}</span>`);
    });
};
