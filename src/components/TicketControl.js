import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      formVisible: !prevState.formVisible,
    }));
  };

  render() {
    let visibleState = null;
    let buttonText = null;

    if (this.state.formVisible) {
      visibleState = <NewTicketForm />;
      buttonText = "Return to Ticket List";
    } else {
      visibleState = <TicketList />;
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {visibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;
