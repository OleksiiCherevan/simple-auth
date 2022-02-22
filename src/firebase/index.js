
import { initializeApp } from "firebase/app";

// Я решил оставить ключи здесь чтобы вы проверили!
// ТАК ДЕЛАТЬ НЕЛЬЗЯ.

const firebaseConfig = {
  apiKey: "AIzaSyDaI71vJagv3WeSYystDlvAXaAJEgTgtY0",
  authDomain: "simple-auth-f4319.firebaseapp.com",
  projectId: "simple-auth-f4319",
  storageBucket: "simple-auth-f4319.appspot.com",
  messagingSenderId: "356488622850",
  appId: "1:356488622850:web:5dbb5be7a69e210a54881b"
};

const app = initializeApp(firebaseConfig);