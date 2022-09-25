import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";
import TicketDetail from "./TicketDetail";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainTicketList: [],
      selectedTicket: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedTicket !== null) {
      this.setState({
        formVisible: false,
        selectedTicket: null,
      });
    } else {
      this.setState((prevState) => ({
        formVisible: !prevState.formVisible,
      }));
    }
  };

  handleChangingSelectTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter((ticket) => ticket.id === id)[0];
    this.setState({ selectedTicket: selectedTicket });
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

    if (this.state.selectedTicket !== null) {
      visibleState = <TicketDetail ticket={this.state.selectedTicket} />;
      buttonText = "Return to Ticket List";
    } else if (this.state.formVisible) {
      visibleState = <NewTicketForm onNewTicketCreation={this.handleMakeNewTicket} />;
      buttonText = "Return to Ticket List";
    } else {
      visibleState = <TicketList ticketList={this.state.mainTicketList} onTicketSelection={this.handleChangingSelectTicket} />;
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
