import React from "react";
import ProfileStatusContainer from "./ProfileStatusContainer";
import DescriptionAvatar from "./Description_Components/DescriptionAvatar";
import AvatarLoader from "./Description_Components/AvatarLoader";
import { useEffect } from "react";
import { inputDescr } from "../../assets/InputValidate";
import { Field, reduxForm } from "redux-form";
import { required, aboutMeValidate } from "../../../utils/validate";

function Description({ id, getMyProfile, myProfile, setPhoto, handleSubmit, error }) {
  useEffect(() => {
    getMyProfile(id);
  }, [id, getMyProfile]);

  let {
    lookingForAJob,
    lookingForAJobDescription,
    fullName,
    aboutMe,
  } = myProfile;
  let {
    facebook,
    github,
    instagram,
    twitter,
    vk,
    website,
    youtube,
    mainLink,
  } = myProfile.contacts;
  if(error === 'Could not convert string to boolean: asdsad. Path \'lookingForAJob\' (lookingForAJob)'){
    error = 'write true or false'
  }
  return (
    // avatar, loader, status
    <div>
      <div className="description">
        <DescriptionAvatar
          avatar={
            myProfile.avatar ||
            "https://sun9-58.userapi.com/LA8GEcGKOMA6hBB2OrEu7EC4FhWRYX_Vkl7VhA/XtiUVoelf2c.jpg"
          }
        />
        <AvatarLoader setPhoto={setPhoto} />
        <div>{fullName + ""}</div>
        <ProfileStatusContainer />
        <div>{aboutMe + ""}</div>
        <div>{lookingForAJob ? "Ищу работу." : ""}</div>
        <div>{lookingForAJobDescription ? lookingForAJobDescription : ""}</div>
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
      <button
        onClick={() => {
          let el = document.getElementById("formWrapper");
          el.classList.toggle("formHidden");
        }}
      >
        Изменить данные
      </button>
      <form
        onSubmit={handleSubmit}
        id="formWrapper"
        className="descriptionForm formHidden"
      >
        {error && <div className="descriptionError">{error}</div>}
        <Field
          placeholder="about me"
          name="AboutME"
          component={inputDescr}
          validate={[required, aboutMeValidate]}
        />
        <Field
          placeholder="full name"
          name="fullName"
          component={inputDescr}
          validate={[required]}
        />
        <Field
          placeholder="are you looking a job?"
          name="areLooking"
          component={inputDescr}
          validate={[required]}
        />
        <Field
          placeholder="description about your skills"
          name="skillDescr"
          component={inputDescr}
          validate={[required]}
        />
        <Field
          placeholder="facebook"
          name="facebook"
          component={inputDescr}
          validate={[]}
        />
        <Field
          placeholder="github"
          name="github"
          component={inputDescr}
          validate={[]}
        />
        <Field
          placeholder="instagram"
          name="instagram"
          component={inputDescr}
          validate={[]}
        />
        <Field
          placeholder="twitter"
          name="twitter"
          component={inputDescr}
          validate={[]}
        />
        <Field
          placeholder="vk"
          name="vk"
          component={inputDescr}
          validate={[]}
        />
        <Field
          placeholder="website"
          name="website"
          component={inputDescr}
          validate={[]}
        />
        <Field
          placeholder="youtube"
          name="youtube"
          component={inputDescr}
          validate={[]}
        />
        <Field
          placeholder="mainLink"
          name="mainLink"
          component={inputDescr}
          validate={[]}
        />
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
}

export default reduxForm({
  // a unique name for the form
  form: "description",
})(Description);
