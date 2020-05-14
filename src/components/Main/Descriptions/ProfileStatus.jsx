import React, { useState } from "react";

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status || "empty");

  const statusTypingTrue = () => {
    setEditMode(true);
  };

  const statusTypingFalse = () => {
    setEditMode(false);
    props.setStatus(status);
  };

  return (
    <div>
      {!editMode && <div onClick={statusTypingTrue}>{status}</div>}
      {editMode && (
        <div>
          <input
            onBlur={() => {
              if (!status) {
                setStatus("empty");
                statusTypingFalse();
              } else {
                statusTypingFalse();
              }
            }}
            type="text"
            value={status}
            autoFocus={true}
            onChange={(event) => {
              setStatus(event.target.value);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
