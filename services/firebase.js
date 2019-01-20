import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBvhiQan31wb2NstBcVplRFnCxw_QCexW0',
  authDomain: 'laarrc.firebaseapp.com',
  databaseURL: 'https://laarrc.firebaseio.com',
  projectId: 'laarrc',
  storageBucket: 'laarrc.appspot.com',
  // messagingSenderId: '587806808328',
};

firebase.initializeApp(config);

const version = 'v0';

class FireService {
  static db = firebase.database();

  static addObserver(path, event, callback) {
    FireService
      .db
      .ref()
      .child(version)
      .child(path)
      .on(event, callback);
  }

  static removeObserver(path, event, callback) {
    FireService
      .db
      .ref()
      .child(version)
      .child(path)
      .off(event, callback);
  }

  static async readOnce(path) {
    return (
      FireService
        .db
        .ref()
        .child(version)
        .child(path)
        .once('value')
    );
  }
}

export default FireService;
