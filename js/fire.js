import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyANjQ6WAUfd8wjZEIUqsfFi_1uBHPNUFFg",
  authDomain: "expatpal-cd11e.firebaseapp.com",
  databaseURL: "https://expatpal-cd11e.firebaseio.com",
  projectId: "expatpal-cd11e",
  storageBucket: "expatpal-cd11e.appspot.com",
  messagingSenderId: "743307005991"
};
var fire = firebase.initializeApp(config);
export default fire;
