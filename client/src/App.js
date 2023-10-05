import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Sidebar from './components/Sidebar/sidebar';
import Task from './components/Task/task';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Header/>
      <Navbar/>
      <Task/>
    </div>
  );
}

export default App;
