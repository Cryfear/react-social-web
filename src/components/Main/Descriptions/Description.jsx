import React from "react";
import ProfileStatusContainer from "./ProfileStatusContainer";
import DescriptionAvatar from "./Description_Components/DescriptionAvatar";
import AvatarLoader from "./Description_Components/AvatarLoader";

class Description extends React.Component {
  componentDidMount() {
    this.props.getMyProfile(this.props.id);
  }

  render() {
    let {
      lookingForAJob,
      lookingForAJobDescription,
      fullName,
    } = this.props.myProfile;
    let {
      facebook,
      github,
      instagram,
      twitter,
      vk,
      website,
      youtube,
      mainLink,
    } = this.props.myProfile.contacts;
    console.log(fullName, this.props.myProfile)
    return (
      // avatar, loader, status
      <div>
        <div className="description">
          <DescriptionAvatar
            avatar={
              this.props.myProfile.avatar ||
              "https://sun9-58.userapi.com/LA8GEcGKOMA6hBB2OrEu7EC4FhWRYX_Vkl7VhA/XtiUVoelf2c.jpg"
            }
          />
          <AvatarLoader setPhoto={this.props.setPhoto} />
          <div>{fullName + ""}</div>
          <ProfileStatusContainer />
          <div>{lookingForAJob ? "Ищу работу." : ""}</div>
          <div>
            {lookingForAJobDescription ? lookingForAJobDescription : ""}
          </div>
          <div>
            Contacts:
            <div>
              <div>{facebook ? facebook : ""}</div>
              <div>{github ? github : ""} </div>
              <div>{instagram ? instagram : ""}</div>
              <div>{twitter ? twitter : ""}</div>
              <div>{vk ? vk : ""}</div>
              <div>{website ? website : ""}</div>
              <div>{youtube ? youtube : ""}</div>
              <div>{mainLink ? mainLink : ""}</div>
            </div>
          </div>
        </div>
        <button onClick={()=> {
          let el = document.getElementById('formWrapper');
          el.classList.toggle('formHidden');
        }}>Изменить данные</button>
        <div id="formWrapper" className="descriptionForm formHidden">
          <input className="descr" placeholder="full name" type="text" />
          <input
            className="descr"
            placeholder="are you looking a job?"
            type="text"
          />
          <input
            className="descr"
            placeholder="description about your skills"
            type="text"
          />
          <input className="descr" placeholder="facebook" type="text" />
          <input className="descr" placeholder="github" type="text" />
          <input className="descr" placeholder="instagram" type="text" />
          <input className="descr" placeholder="twitter" type="text" />
          <input className="descr" placeholder="vk" type="text" />
          <input className="descr" placeholder="website" type="text" />
          <input className="descr" placeholder="youtube" type="text" />
          <input className="descr" placeholder="mainLink" type="text" />
          <button
            onClick={() => {
              let elements = document.getElementsByClassName("descr");
              let obj = {
                fullName: elements[0].value,
                lookingForAJob: elements[1].value,
                lookingForAJobDescription: elements[2].value,
                contacts: {
                  facebook: elements[3].value,
                  github: elements[4].value,
                  instagram: elements[5].value,
                  twitter: elements[6].value,
                  vk: elements[7].value,
                  website: elements[8].value,
                  youtube: elements[9].value,
                  mainLink: elements[10].value,
                },
              };
              console.log(obj);
              this.props.setMyProfileDescription(this.props.id, obj);
            }}
          >
            Сохранить
          </button>
        </div>
      </div>
    );
  }
}

export default Description;
