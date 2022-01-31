import "./App.css";
import img from "./assets/undraw_access_account_re_8spm.svg";
import { Signup } from "./components/Signup/Signup";

function App() {
  return (
    <>
      <main>
        <div className="wrapper">
          <div className="App">
            <Signup />
          </div>
          <img className="img" src={img} />
        </div>
      </main>
    </>
  );
}

export default App;
