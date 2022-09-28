import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";
import TicketDetail from "./TicketDetail";
import EditTicketForm from "./EditTicketForm";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainTicketList: [],
      selectedTicket: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedTicket !== null) {
      this.setState({
        formVisible: false,
        selectedTicket: null,
        editing: false,
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

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditTicketInList = (ticketToEdit) => {
    const editMainTicketList = this.state.mainTicketList.filter((ticket) => ticket.id !== this.state.selectedTicket.id).concat(ticketToEdit);
    this.setState({
      mainTicketList: editMainTicketList,
      selectedTicket: null,
      editing: false,
    });
  };

  handleDeletingTicket = (id) => {
    const newMainTicketList = this.state.mainTicketList.filter((ticket) => ticket.id !== id);
    this.setState({
      mainTicketList: newMainTicketList,
      selectedTicket: null,
    });
  };

  render() {
    let visibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      visibleState = <EditTicketForm ticket={this.state.selectedTicket} onEditTicket={this.handleEditTicketInList} />;
      buttonText = "Return to Ticket List";
    } else if (this.state.selectedTicket !== null) {
      visibleState = (
        <TicketDetail ticket={this.state.selectedTicket} onClickingDelete={this.handleDeletingTicket} onClickingEdit={this.handleEditClick} />
      );
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
