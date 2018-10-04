const database = firebase.database();

$(document).ready(function() {
  $('#login-button').click(signInClick);
  $('#signup-button').click(signUpClick);
});

function signUpClick(event) {
  event.preventDefault();

  const name = $('#name').val();
  const mail = $('#email').val();
  const pass = $('#password').val();

  firebase.auth().createUserWithEmailAndPassword(mail, pass)
    .then((response) => {
      const userId = response.user.uid;
      database.ref('partners/' + userId).set({
        name,
        email: mail
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
};

function signInClick(event) {
  event.preventDefault();
  const mail = $('#email').val();
  const pass = $('#password').val();

  firebase.auth().signInWithEmailAndPassword(mail, pass)
    .then((response) => {
      // localStorage.setItem('userID', USER_ID);
      window.location = 'home.html?id=' + response.user.uid + '&';
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      $('form').append(`<span class='message'>${errorMessage}</span>`);
    });
};
