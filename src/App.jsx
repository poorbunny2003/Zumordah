import logo from './logo.svg';
import './App.css';
import Acceuil from "./components/Acceuil";
import contact from "./components/contact";
import lemail from "./components/lemail";
import login from "./components/login";
import newpassword from "./components/newpassword";
import publication from "./components/publication";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        
        <Acceuil />
      </main>
    </div>
  );
};

export default App;
