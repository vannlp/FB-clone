import { Button } from "@mui/material";
import "./Login.css";
import { provider, auth } from "./firebase";
import {signInWithPopup} from "firebase/auth";
import { useStateValue } from "./StateProvider";
import {actionTypes} from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            }).catch(err=>alert(err.message));
    }

    return ( 
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"
                    alt="facebook-logo"
                />
                <img 
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                />
            </div>

            <Button type="submit" onClick={signIn}>
                SignIn
            </Button>
        </div>
     );
}

export default Login;