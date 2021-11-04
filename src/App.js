import logo from './logo.svg';
import './App.css';
import CountButton from './components/counter/Countbutton';
import Search from './components/searchBar/search';
const App=()=> {
    return ( <
        div className = "App" >
        <Search/>
              <CountButton incrementBy={5} buttonBackgroundColor={"red"}/>
              <CountButton incrementBy={3} buttonBackgroundColor={"blue"}/>
              <CountButton incrementBy={2} buttonBackgroundColor={"green"}/>
              <CountButton incrementBy={1} buttonBackgroundColor={"yellow"}/>
           
        </div>
    );
}

export default App;