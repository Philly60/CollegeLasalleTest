
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyARc1gDk9FhS5E0Yu3QSBGtzAM_XCq-UEM",
  authDomain: "project1-763db.firebaseapp.com",
  projectId: "project1-763db",
  storageBucket: "project1-763db.appspot.com",
  messagingSenderId: "731197059003",
  appId: "1:731197059003:web:c7aab0491b91adb2fbde9e",
  measurementId: "G-YR0L9GPN0M"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  
