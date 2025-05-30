import { createUserWithEmailAndPassword } from "firebase/auth";
import type { RegisterProps } from "../../types/functions.types";
import getUser from "../getUser/getUser";
import { auth, db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const usersCollection = collection(db, "users");

const registerUser = async (props: RegisterProps) => {
  const newUser = {
    email: props.email,
    password: props.password,
    role: props.role,
  };
  props.setIsLoading(true);
  try {
    const data = await getUser({
      email: props.email,
    });
    console.log(data);
    if (data && data.hasUser) {
        props.setIsLoading(false);
        alert("User Already Exist");
        return;
    }
    await createUserWithEmailAndPassword(auth, props.email, props.password);
    await addDoc(usersCollection, newUser);
    props.setPassword("");
    props.setEmail("");
    props.setRole("");
    props.setIsSuccess(true);
    setTimeout(() => {
      props.setIsLoading(false);
      props.setIsSuccess(false);
    }, 3000);
    setTimeout(() => {
      props.navigate("/login");
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
};

export default registerUser;
