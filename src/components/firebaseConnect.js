  // Initialize Firebase
  import * as firebase from 'firebase';
  var config = {
    apiKey: "AIzaSyCuZCRQXGGmRhN6Y_VW6VuBZ0Mu2ETiMxI",
    authDomain: "notereact-cdda2.firebaseapp.com",
    databaseURL: "https://notereact-cdda2.firebaseio.com",
    projectId: "notereact-cdda2",
    storageBucket: "notereact-cdda2.appspot.com",
    messagingSenderId: "664857131861"
  };
  // firebase.initializeApp(config);
  firebase.initializeApp(config);
  export const noteData = firebase.database().ref('dataForNote')

  // var data = firebase.database().ref('dataForNote/note3');
  //     data.set({
  //       id: 10,
  //       titleNote: 'Ghi chu ngay 2/11/2018',
  //       contentNote: 'Here is content of note 1 edited the second'
  //     })

      // data.once('value').then(function(snapshot){
      //   console.log(snapshot.val());
      // })
