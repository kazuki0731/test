import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCc0xOKcFv-4UROXCeVUgKM1bB6XCwSQE",
  authDomain: "example-23a99.firebaseapp.com",
  projectId: "example-23a99",
  storageBucket: "example-23a99.appspot.com",
  messagingSenderId: "558819997507",
  appId: "1:558819997507:web:d0a133df0c623558bca1f6",
  measurementId: "G-1D9L6DWBVM",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

function App() {
  const handleClickFetchButton = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912,
      });
      console.log(docRef);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <button onClick={handleClickFetchButton}>取得</button>
    </div>
  );
}

export default App;
