import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  statusTypingTrue = () => {
    this.setState({
      editMode: true,
    });
  };

  statusTypingFalse = () => {
    this.setState({
      editMode: false,
    });
  };

  render = () => {
    return (
      <div>
        {!this.state.editMode && (
          <div onClick={this.statusTypingTrue}>{this.props.status}</div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onBlur={this.statusTypingFalse}
              type="text"
              value={this.props.status}
              onChange={this.props.lol}
            />
          </div>
        )}
      </div>
    );
  };
}

export default ProfileStatus;
