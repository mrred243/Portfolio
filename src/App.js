import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

class App extends Component {
  constructor() {
    super();
    this.state = {displayBio: false};
    this.toggleBio = this.toggleBio.bind(this);
  };

  toggleBio() {
    this.setState({displayBio : !this.state.displayBio});
  };

  render() {
    return(
      <div>
        <h1>Hello!</h1>
        <p>My name is Thien An. I am a golden-rookie software engineer from Vietnam 🇻🇳.</p>
        <p>I'm always looking forward to meaningful and beautiful projects.</p>
        { this.state.displayBio ?
          (<div>
            <p>I live in Helsinki.</p>
            <p>My favorite language is Javascript and I think React is awesome.</p>
            <p>Besides coding, I also love movies and all of food in the world.</p>
            <button onClick={this.toggleBio}>Show less</button>
          </div>) : (<button onClick={this.toggleBio}>Read more</button>) }

          <hr />
          <Projects />
          <hr />

          <SocialProfiles />
        </div>
      )
    }
  }

  export default App;
