import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
	const [user, setUser] = useState({});
	const [authLoginError, setAuthLoginError] = useState('');
	const [authSignUpError, setAuthSignUpError] = useState('');
	const [authGoogleError, setAuthGoogleError] = useState('');
	const [authSuccess, setAuthSuccess] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [admin, setAdmin] = useState(false);

	const auth = getAuth();

	// Email-Password Register Process

	const registerUser = (newUser, navigate) => {
		setIsLoading(true);

		createUserWithEmailAndPassword(auth, newUser.email, newUser.password)

			.then((userCredential) => {
				setAuthSignUpError('');
				saveUser(newUser);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				if (errorCode === 'auth/email-already-in-use') {
					setAuthSuccess('');
					setAuthSignUpError("User already exists!");
					return;
				} else if (errorCode === 'auth/internal-error') {
					setAuthSuccess('');
					setAuthSignUpError("Something went wrong!");
					return;
				} else {
					setAuthSuccess('');
					setAuthLoginError(errorMessage);
					return;
				}
			})
			.finally(() => setIsLoading(false));

		navigate('/');
	}


	// Email-Password LogIn Process
	const loginUser = (email, password, navigate) => {
		setIsLoading(true);

		signInWithEmailAndPassword(auth, email, password)
			.then((user) => {
				navigate('/');
				setAuthLoginError('');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				if (errorCode === 'auth/wrong-password') {
					setAuthSuccess('');
					setAuthLoginError("Wrong Password!");
					return;
				} else if (errorCode === 'auth/user-not-found') {
					setAuthSuccess('');
					setAuthLoginError("User not found! Please Sign Up first!");
					return;
				} else if (errorCode === 'auth/too-many-requests') {
					setAuthSuccess('');
					setAuthLoginError("This user temporarily disabled due to many failed requests!");
					return;
				} else {
					setAuthSuccess('');
					setAuthLoginError(errorMessage);
					return;
				}
			})
			.finally(() => setIsLoading(false));

	}


	// Observe User State Process
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {

				setUser(user);

			} else {
				setUser({});
			}
			setIsLoading(false);

		});
		return () => unsubscribe;
	}, [])



	// // Check isAdmin
	// useEffect(() => {
	// 	const url = `https://natural-honey.herokuapp.com/users/${user?.email}`;
	// 	fetch(url)
	// 		.then(res => res.json())
	// 		.then(data => setAdmin(data.admin));

	// }, [user?.email]);

	// SignOut Process
	const logOut = () => {
		signOut(auth).then(() => {
			// window.confirm('Please Confirm Log-Out Request!');

		}).catch((error) => {
			setAuthGoogleError(error.message);
		});
	}

	// Save Registered User Data to Database
	const saveUser = (newUser) => {
		// const user = newUser;
		fetch('', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newUser)
		})
	}

	return {
		user,
		admin,
		authLoginError,
		authSignUpError,
		authGoogleError,
		isLoading,
		authSuccess,
		setAuthSuccess,
		setAuthSignUpError,
		setAuthLoginError,
		setIsLoading,
		registerUser,
		loginUser,
		logOut
	}
}

export default useFirebase;