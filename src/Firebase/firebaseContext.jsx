import { initializeApp } from "firebase/app";

import { createContext, useContext, useState, useEffect } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnMrqGsKn50imcWlv5qBcvZ5Mndliy06Y",
  authDomain: "the-cp-sphere.firebaseapp.com",
  projectId: "the-cp-sphere",
  storageBucket: "the-cp-sphere.appspot.com",
  messagingSenderId: "328512567300",
  appId: "1:328512567300:web:48bdec94956fe666fd1d51",
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const loginUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };
  const logOut = () => {
    return signOut(firebaseAuth);
  };
  const isLoggedIn = !!user;
  
  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        loginUserWithEmailAndPassword,
        isLoggedIn,
        user,
        logOut,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
