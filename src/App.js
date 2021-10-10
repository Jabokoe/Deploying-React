import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <HelloWorld />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Nav() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile/4">Eve's Profile</Link>
      </nav>
    </header>
  );
}

function HelloWorld() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>Hello World!</h3>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

function About() {
  return (
    <>
      <h1>About</h1>
      <p>
        This is a sandbox to practice React! None of this site will make sense.
        I'm testing GitHub Pages and react-router.
      </p>
    </>
  );
}

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <p>Stonks</p>
      <div class="lorge">&#128202;&#128200;</div>
    </>
  );
}

function Profile() {
  const profiles = ["Alice", "Bob", "Carol", "Dan", "Eve", "Faye"]; // pretend database
  const { id } = useParams(); // ID via react-router

  const prev_id = Math.max(Number(id) - 1, 0);
  const next_id = Math.min(Number(id) + 1, profiles.length - 1);
  return (
    <>
      <div class="profile">
        <p>Profile: {profiles[Number(id)]}</p>
        <span>ID: {id}</span>
      </div>
      <div class="profile-nav">
        <Link to={`/profile/${prev_id}`}> &lt;&lt; </Link>
        <Link to={`/profile/${next_id}`}> &gt;&gt; </Link>
      </div>
    </>
  );
}

function NoMatch() {
  return (
    <>
      <h3>HTTP 404</h3>
      <p>no matching page found :(</p>
    </>
  );
}

export default App;
