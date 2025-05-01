import logo from './logo.svg';
import './App.css';
import User from './User';
function App() {
  return (
    <div className="App">
     
      <User data={{name: "ajay singh", age:"26", email:"ajaysingh98147@gmail.com"}} />
    </div>
  );
}

export default App;
