import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: 'AIzaSyDIFtanriB_g9yeR4_zgaL63zyA9-Y0d5Y',
    authDomain: 'myhardcore-pizza.firebaseapp.com',
    projectId: 'myhardcore-pizza',
    storageBucket: 'myhardcore-pizza.appspot.com',
    messagingSenderId: '714955968983',
    appId: '1:714955968983:web:add5f81f0030e305993b92'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {
    db,
    auth
}