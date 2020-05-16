import React from "react";
import ProfileStatusContainer from "./ProfileStatusContainer";

class Description extends React.Component {

  render() {
    return (
      <div className="description">
        <input type="file" id="axios"/>
        <button onClick={() =>{
          let files = document.getElementById('axios');
          this.props.setPhoto(files.files[0]);
        }}>Загрузить</button>
        <img className="avatar" alt="avatar" src={this.props.myProfile.avatar}></img>
        <ProfileStatusContainer />
        <div className="education">{this.props.myProfile.education}</div>
        <div className="birthday">{this.props.myProfile.birthday}</div>
      </div>
    );
  }
  
}

export default Description;
