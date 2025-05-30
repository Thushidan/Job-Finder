import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import type { UserLoginProps } from "../../types/functions.types";
import getUser from "../getUser/getUser";

const userLogin = async (props: UserLoginProps) => {
    props.setIsLoading(true);
    try {
        const userCredential = await signInWithEmailAndPassword(auth, props.email, props.password);
        console.log(userCredential);
        const data = await getUser({
          email: props.email
        });
        console.log(data);
        props.setIsSuccess(true);
        props.setIsLoggedIn(true);
        props.setLocalStorageItem('isLoggedIn', true);
        if(data) {
            props.setLocalStorageItem('role', data.user.role);
        }
        setTimeout(() => {
            props.setIsLoading(false);
            props.setIsSuccess(false);
        }, 3000);
        setTimeout(() => {
            props.navigate('/');
        }, 4000);
    } catch (error) {
        props.setIsError(true);
        console.log(error);
        setTimeout(() => {
            props.setIsLoading(false);
        }, 3000);
        setTimeout(() => {
            props.setIsError(false);
        }, 4000);
    }
}

export default userLogin;