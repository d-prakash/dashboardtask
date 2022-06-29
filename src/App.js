import './App.css'
import Chart from './components/Chart';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <Profile/>
      <Chart />
    </div>
  );
}

export default App;
