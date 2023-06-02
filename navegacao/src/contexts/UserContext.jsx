import { createContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB24hUkVyXK_vXDP92iBcHpcjsy04Utq8g",
    authDomain: "back-end-react2.firebaseapp.com",
    projectId: "back-end-react2",
    storageBucket: "back-end-react2.appspot.com",
    messagingSenderId: "841571748550",
    appId: "1:841571748550:web:cc8a00cf114d6f585ee5c7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth={app};

const UserContext = createContext({
    userID: null,
    logado: false,
    handleLogin: () => { },
    handleLogout: () => { },
})

export function UserContextProvider(props) {
    const [currentUser, setCurrentUser] = useState({ userID: null, logado: false })

    function login() {
        setCurrentUser({ userID: 100, logado: true })
    }

    function logout() {
        setCurrentUser({ userID: null, logado: false })
    }
    const contexto = {
        userID: currentUser.userID,
        logado: currentUser.logado,
        handleLogin: login,
        handleLogout: logout,
    }

    return (
        <UserContext.Provider value={contexto}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext