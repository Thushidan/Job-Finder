import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import type { GetUserProps } from "../../types/functions.types";

const usersCollection = collection(db, "users");

const getUser = async (props: GetUserProps) => {
  try {
    const q = query(usersCollection, where("email", "==", props.email));
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      return false;
    }

    const user = snapshot.docs[0].data();
    const data = {
      user: user,
      hasUser: true,
    };
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getUser;