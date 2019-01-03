import firebase from 'firebase/app';
import 'firebase/database';

import  config  from "../FirebaseConfig";

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