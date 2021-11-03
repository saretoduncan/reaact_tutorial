import logo from './logo.svg';
import './App.css';
import CountButton from './components/Countbutton';
const App=()=> {
    return ( <
        div className = "App" >
              <CountButton incrementBy={5} buttonBackgroundColor={"red"}/>
              <CountButton incrementBy={3} buttonBackgroundColor={"blue"}/>
              <CountButton incrementBy={2} buttonBackgroundColor={"green"}/>
              <CountButton incrementBy={1} buttonBackgroundColor={"yellow"}/>
           
        </div>
    );
}

export default App;