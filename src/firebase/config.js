import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAFsVbrjBD1psKSDJzrd3esauWiO2pmDfE",
  authDomain: "fir-project-bda79.firebaseapp.com",
  databaseURL: "https://fir-project-bda79.firebaseio.com",
  projectId: "fir-project-bda79",
  storageBucket: "fir-project-bda79.appspot.com",
  messagingSenderId: "247403217939",
  appId: "1:247403217939:web:9fbdfc85bf993c97e8abe6"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
