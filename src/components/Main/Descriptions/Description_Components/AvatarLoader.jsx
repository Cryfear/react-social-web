import React from "react";

function AvatarLoader(props) {
  return (
    <div>
      <input type="file" id="axios" />
      <button
        onClick={() => {
          let files = document.getElementById("axios");
          props.setPhoto(files.files[0]);
        }}
      >
        Загрузить
      </button>
    </div>
  );
}

export default AvatarLoader;
