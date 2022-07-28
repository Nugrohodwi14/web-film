import './App.css';
import "./style/landingPage.css"
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Superhero from './components/Superhero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div>

        {/* Intro & Navbar Section */}
        <div className='myBG'>
          {/*  Navbar Fixed Section */}
          {/* <Navbar /> */}
          {/* End of Navbar Fixed */}

          {/*  Navbar Biasa Section */}
          <NavigationBar />
          {/* End of Navbar Biasa */}

          {/*  Intro Section */}
          <Intro />
          {/* End of Intro */}

        </div>
        {/* End of Intro & Navbar */}

        {/* Trending Section */}
        <div className='trending' >
          <Trending />
        </div>
        {/* End of Trending Section */}

        {/* Superhero Section */}
        <div className='superhero' >
          <Superhero />
        </div>
        {/* End of Superhero Section */}

      </div >
    </Router >
  );
}

export default App;
