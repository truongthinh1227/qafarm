import logo from './logo.svg';
import image from './image/logo1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img style={{width:"300px", marginTop:"-300px"}} src={image}/>
        
        <img  style={{marginTop:"30px"}}src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo1" alt="logo" />
        <p>
          Website đang trong quá trình xây dựng
          <br />Xin vui lòng quay lại sau<br />
      </p>
      
        
      </header>
    </div>
  );
}

export default App;
