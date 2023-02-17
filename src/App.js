// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>
    
      <Navbar title="Somnath" aboutText="About TextUtils"></Navbar>
      {/* use of props in react */}
      <div className="container">
        <Textform heading="Enter the text to analyse below"/>
      </div>

    </>
  );
}

export default App;
