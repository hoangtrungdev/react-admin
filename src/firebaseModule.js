import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyCoXB4qBnPD5HOx3hTBQX1g28s4flhUUnY",
  authDomain: "hoangtrungdev-abcd.firebaseapp.com",
  databaseURL: "https://hoangtrungdev-abcd.firebaseio.com",
  projectId: "hoangtrungdev-abcd",
  storageBucket: "hoangtrungdev-abcd.appspot.com",
  messagingSenderId: "49361903745"
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