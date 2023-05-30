import './App.css';

// components
import SidebarWrapper from './components/Sidebar/SidebarWrapper';

function App() {
  return (
    <div className="App">
      <SidebarWrapper />
      <div id="shell">
        <h1 style={{ color: "white", marginLeft: "50px" }}>Brendan Farrell</h1>
      </div>
    </div>
  );
}

export default App;
