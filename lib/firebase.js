import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAajO3C4zuyBCgyYzTUxAQ6kPhjAqGfIxY",
    authDomain: "nextfire-f77a7.firebaseapp.com",
    projectId: "nextfire-f77a7",
    storageBucket: "nextfire-f77a7.appspot.com",
    messagingSenderId: "64965221534",
    appId: "1:64965221534:web:a529d05124c68f63c4ef8f"
}

if (!firebase.apps.length) { //avoid attempted second initialization due to Next running this code twice
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const increment = firebase.firestore.FieldValue.increment;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;

export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;


//helper functions

/**
 * Gets a users/{uid} documents with username
 * @param {string} username
 */
export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
}

/**
 * Converts a firestore document to JSON
 * @param {DocumentSnapshot} doc 
 */
export function postToJSON(doc) {
    const data = doc.data();
    return {
        ...data,
        createdAt: data.createdAt.toMillis(),
        updatedAt: data.updatedAt.toMillis(),
    }

}