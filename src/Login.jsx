import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, db, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Login.css";
import { addDoc, collection, getDocs } from "firebase/firestore";

function Login() {
  const [{}, dispatch] = useStateValue();
  const login = () => {
    signInWithPopup(auth, provider)
      .then((response) => {
        console.log(response);
        dispatch({
          type: actionTypes.SET_USER,
          user: response.user,
        });

        const collref = collection(db, "users");
        let userList = [];
        getDocs(collref).then((snapchat) => {
          snapchat.docs.forEach((doc) => {
            userList.push({ ...doc.data() });
          });

          let isPresent = false;
          userList.forEach((u) => {
            if (u.email == response.user.email) {
              isPresent = "true";
            }
          });

          if (isPresent != "true") {
            addDoc(collref, {
              email: response.user.email,
            })
              .then((result) => {
                console.log(result);
                console.log("NEW USER CREATED!!!");
              })
              .catch((err) => {
                alert(err.message);
              });
          } else {
            console.log("EMAILLL EXISTS!!!");
          }
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="login">
      <div className="login__logo">
        <p>Log in to Connect</p>

        <div className="login__cover">
          <button onClick={login}> Login with Google</button>
          <img
            className="google"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-vector-graphic-pixabay-15.png"
          />
        </div>
      </div>
    </div>
  );
}
export default Login;
