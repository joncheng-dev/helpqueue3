import React from "react";
import { v4 } from "uuid";

function NewTicketForm(props) {
  function handleNewTicketSubmit(event) {
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
  }

  return (
    <React.Fragment>
      <h3>New Ticket Here</h3>
      <form onSubmit={handleNewTicketSubmit}>
        <input type="text" name="names" placeholder="Names" />
        <input type="text" name="location" placeholder="Location" />
        <textarea name="issue" placeholder="Describe your issue" />
        <button type="submit">Submit Ticket</button>
      </form>
    </React.Fragment>
  );
}

export default NewTicketForm;
