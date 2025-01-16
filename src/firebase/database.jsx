// firebase/database.js
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "./config";

const db = getFirestore(app);

export const saveMessage = async (messageData) => {
  const messagesCollection = collection(db, "messages"); // "messages" is the collection name
  await addDoc(messagesCollection, messageData);
};
