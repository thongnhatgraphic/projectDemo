import './App.css';
import Header from './Containers/Header';
import MainContent from './Containers/MainContent';
import Sidebar from "./Containers/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App--separate">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
