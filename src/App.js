import { ReactComponent as Logo } from './logo.svg';
import './App.scss';
import Button from './component/Button';
import Content from './component/ContentItem';

function App() {
  return (
    <div className="App">
      <div className="Background">
        <section className="Sidebar">
            <Button active>Home</Button>
            <Button inactive>Services</Button>
            <Button target>News</Button>
            <Button inactive>Blog</Button>
            <Button inactive>Contact</Button>
        </section>
        <div className='wrapper'>

            <article className="content">
            <a href="home" className="logo" >
              <Logo></Logo>
            </a>
            <span className="intro">
                <h3 >Lorem ipsum dolor sit asmet?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
            </span>
            </article>
            <Content></Content>
            <footer >
            <p className="footer">Copyright © 2021</p>
            </footer>
        </div>
      </div>      
    </div> 
  );
}

export default App;
