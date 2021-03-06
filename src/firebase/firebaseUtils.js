import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAcNM56ONUSOCh-gnrSYansFECqA_UIRtc",
	authDomain: "crown-db-0.firebaseapp.com",
	projectId: "crown-db-0",
	storageBucket: "crown-db-0.appspot.com",
	messagingSenderId: "560994836637",
	appId: "1:560994836637:web:762a9487c9e4b2a7547474",
	measurementId: "G-V85YV4B22P",
};


export const createUserProfileDocument = async (userAuth,additionalData)=>{
	if(! userAuth)
	return;
	const userRef =firestore.doc(`users/${userAuth.uid}`); 
	const snapshot = await userRef.get();
	
	if(!snapshot.exists)
	{
		const {displayName,email} = 	userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({displayName,
			email,
			createdAt,
			...additionalData
		})
		console.log('====================================');
		console.log(userRef);
		console.log('====================================');
		} catch (error) {
			console.log('error creating user',error.message);
		}
	}

	return userRef 
	  
}
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const sinInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
