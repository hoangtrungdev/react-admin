import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDGUYSLmWfXhgV5xS1wXx9oc--REhbRJfg",
  authDomain: "halley-hoangtrungdev.firebaseapp.com",
  databaseURL: "https://halley-hoangtrungdev.firebaseio.com",
  projectId: "halley-hoangtrungdev",
  storageBucket: "halley-hoangtrungdev.appspot.com",
  messagingSenderId: "716358595273"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const snapshotToArray = (snapshot)=> {
  let returnArr = [];

  snapshot.forEach(function(childSnapshot) {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });
  return returnArr;
};