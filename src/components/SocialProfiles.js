import React, {Component} from 'react';
import SOCIAL_PROFILES from '../data/socialProfile.js';


class SocialProfile extends Component {
  render() {
    const {link, image} = this.props.socialProfile;
    return (
      <div>
      <a href={link}><img src={image} alt='social-profile' style={{width: 35, height: 35, margin: 10}} /></a>
      </div>
      )
  }
}
class SocialProfiles extends Component {
  render() {
    return (
      <div className="contact" id="contact" style={{fontSize: '20px'}}>
        <h2 className="title title__contact">Connect with me</h2>
        <div className="contact--section">
          <iframe src="https://giphy.com/embed/WNPtFzVXA8fi8" frameBorder="0" className="giphy-embed"></iframe>
          <div className="contact--details">
            {
              SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
              }
                )
            }
            <p><b>Email:</b> tranthie04@gmail.com<br/><b>Phone:</b> +358 45 7872 5818</p>
          </div>
        </div>

      </div>
      )
  }
}

export default SocialProfiles;
