import React from "react";
import "./Main.css";
import Description from "./Descriptions/Description";
import MyPosts from "./MyPosts/MyPosts";

function Main(props) {
  const submit = (values) => {
    let elements = document.getElementsByClassName("descr");
            let obj = {
              aboutMe: elements[0].value,
              fullName: elements[1].value,
              lookingForAJob: elements[2].value,
              lookingForAJobDescription: elements[3].value,
              contacts: {
                facebook: elements[4].value,
                github: elements[5].value,
                instagram: elements[6].value,
                twitter: elements[7].value,
                vk: elements[8].value,
                website: elements[9].value,
                youtube: elements[10].value,
                mainLink: elements[11].value,
              },
            };
            props.setMyProfileDescription(props.id, obj);
  };
  return (
    <main className="content">
      <Description
        onSubmit={submit}
        id={props.id}
        getMyProfile={props.getMyProfile}
        setPhoto={props.setPhoto}
        myProfile={props.myProfile}
      />
      <MyPosts posts={props.posts} text={props.text} />
    </main>
  );
}

export default Main;
