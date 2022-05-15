// Save data on firebase cloud storage

import { doc, setDoc } from "firebase/firestore"
import { fireStore } from "../firebase.config"

export const saveData = async (data) => {
    await setDoc( doc(fireStore, 'foodItems', `${Date.now()}`), data, {merge: true}  )
}