import React from "react";
import Ticket from "./Ticket";

function TicketList() {
  return (
    <React.Fragment>
      <Ticket names="Homer and Bart" location="Moe's Tavern" issue="Cannot start TV" />
      <Ticket names="Barney Gumble" location="Barney's" issue="Out of beer" />
    </React.Fragment>
  );
}

export default TicketList;
