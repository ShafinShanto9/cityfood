
import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { fireStore } from "../firebase.config"

export const saveData = async (data) => { // Save data on firebase cloud storage
    await setDoc( doc(fireStore, 'foodItems', `${Date.now()}`), data,   )
}

export const getAllFoodData = async () => { // get all fooddata from firebase cloud
    const foodData = await getDocs(
        query(collection(fireStore, 'foodItems'), orderBy("id", "desc"))
    )
    return foodData.docs.map((doc) => doc.data());
}