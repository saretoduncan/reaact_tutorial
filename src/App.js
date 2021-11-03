import logo from './logo.svg';
import './App.css';
import CountButton from './components/Countbutton';
const App=()=> {
    return ( <
        div className = "App" >
              <CountButton incrementBy={5}/>
              <CountButton incrementBy={3}/>
              <CountButton incrementBy={2}/>
              <CountButton incrementBy={1}/>
           
        </div>
    );
}

export default App;