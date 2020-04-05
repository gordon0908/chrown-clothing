import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAaV2UBk7aFXuLrzmpMQxLx0Phl9Kqstxw",
    authDomain: "chrown-db.firebaseapp.com",
    databaseURL: "https://chrown-db.firebaseio.com",
    projectId: "chrown-db",
    storageBucket: "chrown-db.appspot.com",
    messagingSenderId: "981695326663",
    appId: "1:981695326663:web:46d5863199763a8b63d1e2",
    measurementId: "G-P6H73ZV9PC"
  };

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const SignInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export const createUser = async (userAuth, otherData) => {
    if (!userAuth) {
        return;
    }

    const userProfile = firestore.doc('/users/' + userAuth.uid);
    const snapShot = await userProfile.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userProfile.set({
                displayName,
                email,
                createAt,
                ...otherData
            })
        }catch(e) {
            console.log('error creating user', e.message);
        }
    }
    return userProfile;

}
export default firebase;