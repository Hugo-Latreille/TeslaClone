import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBuFFx90aF_YeMBVUkUk4QSEHjtfxBnWrI",
	authDomain: "tesla-clone-356bb.firebaseapp.com",
	projectId: "tesla-clone-356bb",
	storageBucket: "tesla-clone-356bb.appspot.com",
	messagingSenderId: "179430395636",
	appId: "1:179430395636:web:5b4f4b6befd6ed5af998a1",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default auth;
