const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAvkEGaqHHZSThNR5xgRhbcx8gX8czxaUk",
    authDomain: "ballongame-123.firebaseapp.com",
    projectId: "ballongame-123",
    storageBucket: "ballongame-123.appspot.com",
    messagingSenderId: "570407067882",
    appId: "1:570407067882:web:f55b5959d075e4174a7793",
    measurementId: "G-9L04P78HP9"
});

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
// SignUp As User
const userSignUp = () => {
  
    let email = document.getElementById('inputEmail').value;
    let pass = document.getElementById('inputPassword').value;
console.log(email)
    auth.createUserWithEmailAndPassword(email, pass)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log(user);
            window.location.href="./level1.html"
          
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}
const login = () => {
    let loginnameoremail = document.getElementById('userEmail').value;
    let loginpassword = document.getElementById('userPassword').value;

    auth.signInWithEmailAndPassword(loginnameoremail, loginpassword)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log(user.uid);
            window.location.href="./level1.html"
           
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}

// for log out


const logout = () =>{
    auth.signOut().then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
        window.location.href="./index.html"
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
}




