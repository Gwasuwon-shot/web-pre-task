import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default function App() {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: `${import.meta.env.VITE_APP_API_KEY}`,
    authDomain: `${import.meta.env.VITE_APP_AUTH_DOMAIN}`,
    projectId: `${import.meta.env.VITE_APP_PROJECT_ID}`,
    storageBucket: `${import.meta.env.VITE_APP_STORAGE_BUCKET}`,
    messagingSenderId: `${import.meta.env.VITE_APP_MESSAGING_SENDER_ID}`,
    appId: `${import.meta.env.VITE_APP_APP_ID}`,
    measurementId: `${import.meta.env.VITE_APP_MEASUREMENT_ID}`,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </RecoilRoot>
  );
}
