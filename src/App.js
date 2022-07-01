import './App.css'
import Chart from './components/Chart';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import ThirdSection from './components/ThirdSection';
function App() {
  return (
    <div className="main-container ">
      <div className='app-container'>
          <Sidebar />
          <Profile />
          <Chart/>
        <ThirdSection/>
      </div>
    </div>
  );
}

export default App;
