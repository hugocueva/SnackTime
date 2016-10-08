import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      /* <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */
      <div>

        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Project name</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                  <form className="navbar-form navbar-right">
                    <button type="submit" className="btn btn-success" id="signInButton">Sign in</button>
                  </form>
                </div> //.navbar-collapse -->
            </div>
          </nav>

          // Main jumbotron for a primary marketing message or call to action -->
          <div className="jumbotron">
            <div className="container">
              <h1>Hello, world!</h1>
              <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
              <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
            </div>
          </div>

          <div className="container">
            // Example row of columns -->
            <div className="row">
              <div className="col-md-4">
                <h2>Heading</h2>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
              </div>
              <div className="col-md-4">
                <h2>Heading</h2>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
             </div>
              <div className="col-md-4">
                <h2>Heading</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
              </div>
            </div>

            <hr />

            <footer>
              <p>&copy; 2016 Company, Inc.</p>
            </footer>
          </div> // /container -->

        </div>

    );
  }
}

export default App;
