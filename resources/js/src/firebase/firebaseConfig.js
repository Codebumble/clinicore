// NOTE
// Please use your own firebase details below. For more details visit: https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/development/firebaseIntegration.html


import firebase from 'firebase/app'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCQKDXjoxx6BfAWP4iCR97IJOA8boNVVAs',
  authDomain: 'hospih-devs.firebaseapp.com',
  databaseURL: 'https://vhospih-devs.firebaseio.com',
  projectId: 'hospih-devs',
  storageBucket: 'hospih-devs.appspot.com',
  messagingSenderId: '707176766258'
}

firebase.initializeApp(config)
