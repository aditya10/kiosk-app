import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDW89eDLDGApk53nM98YJh1iaggDX02ZhU",
  authDomain: "kiosk-smart-city.firebaseapp.com",
  databaseURL: "https://kiosk-smart-city.firebaseio.com",
  projectId: "kiosk-smart-city",
  storageBucket: "kiosk-smart-city.appspot.com",
  messagingSenderId: "99717802343"
};
firebase.initializeApp(config);
export default firebase;
