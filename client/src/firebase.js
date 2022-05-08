import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4fGuIRyBxN_y7yC7w52U2khIkRmR5Mug",
  authDomain: "ecommerce-dfd7a.firebaseapp.com",
  projectId: "ecommerce-dfd7a",
  storageBucket: "ecommerce-dfd7a.appspot.com",
  messagingSenderId: "737584817993",
  appId: "1:737584817993:web:d0f547537760b7217d1c98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
