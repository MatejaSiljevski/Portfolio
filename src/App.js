import './app.scss';
import React, {useState} from 'react'
import Contact from './components/contact/Contact';
import Testemonials from './components/testemonials/Testemonials';
import Topbar from './components/topbar/Topbar';
import Portfolio from './components/portfolio/Portfolio'
import Intro from './components/intro/Intro'
import Works from './components/works/Works'
import Menu from './menu/Menu'
function App() {
  const [menuOpen, setmenuOpen] = useState(false)



  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setmenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setmenuOpen}/>
      <section className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testemonials />
        <Contact />
      </section>
    </div>
  );
}

export default App;
