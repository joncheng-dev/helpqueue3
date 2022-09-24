import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainTicketList: [],
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      formVisible: !prevState.formVisible,
    }));
  };

  handleMakeNewTicket = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({
      formVisible: false,
      mainTicketList: newMainTicketList,
    });
  };

  render() {
    let visibleState = null;
    let buttonText = null;

    if (this.state.formVisible) {
      visibleState = <NewTicketForm onNewTicketCreation={this.handleMakeNewTicket} />;
      buttonText = "Return to Ticket List";
    } else {
      visibleState = <TicketList ticketList={this.state.mainTicketList} />;
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
