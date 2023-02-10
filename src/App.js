import { ReactComponent as Logo } from './logo.svg';
import './App.scss';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
      <div className="Background">
        <aside className="Sidebar">
            <Button active>Home</Button>
            <Button inactive>Services</Button>
            <Button target>News</Button>
            <Button inactive>Blog</Button>
            <Button inactive>Contact</Button>
        </aside>
        <div className="Content">
            <div className="logo">
              <Logo></Logo>
            </div>
            <div className="content">
              <span className="introduce"></span>
              <div className="contentItems"></div>
            </div>
        </div>
        <footer className="Footer">

        </footer>
      </div>      
    </div> 
  );
}

export default App;
