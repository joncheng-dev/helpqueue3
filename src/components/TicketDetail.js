import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props) {
  const { ticket, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3>{ticket.names}</h3>
      <p>{ticket.location}</p>
      <p>
        <em>{ticket.issue}</em>
      </p>
      <button onClick={props.onClickingEdit}>Edit Ticket</button>
      <button onClick={() => onClickingDelete(ticket.id)}>Delete Ticket</button>
      <hr />
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default TicketDetail;
