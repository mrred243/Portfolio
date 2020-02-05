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
      <div class="container">

        <h1>Hello!</h1>
        <p>My name is Thien An Tran. I am a golden-rookie software engineer from Vietnam 🇻🇳.</p>
        <p>I'm always looking forward to <span style={{fontWeight: 600}}>meaningful</span> and <span style={{fontWeight: 600}}>beautiful</span> projects.</p>
          <p>I live in Helsinki, Finland now.</p>

        { this.state.displayBio ?
          (<div>
            <p>Besides coding, I also love movies, football and all of food in the world.</p>
            <br />
            <div className="bio">
              <p><b>Occupation:</b> Student</p>
              <p><b>Current University:</b> Haaga-Helia University of Applied Sciences</p>
              <p><b>Skill: </b> JavaScript, Reactjs, MySQL, HTML, CSS and basic Nodejs, Java, Springboot</p>
            </div>



            <button onClick={this.toggleBio}>Thank you! ❤️</button>
          </div>) : (<button onClick={this.toggleBio}>Please click me! 👻</button>) }

          <hr />
          <Projects />
          <hr />

          <SocialProfiles />
        </div>
      )
    }
  }

  export default App;
