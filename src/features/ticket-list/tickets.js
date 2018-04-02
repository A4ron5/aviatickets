import React from "react";
import { Ticket } from "../../ui/organisms";
import data from "./tickets.json";

export class Tickets extends React.Component {

  render() {
    const tickets = data.tickets;
    tickets.sort((a, b) => {
      if(a.price > b.price) {
        return 1;
      } else if(a.price < b.price) {
        return -1;
      }
      return 0;
    });
    const filteredTickets = tickets.filter((item) => {
      return item.stops !== -1
    })
    const ticketsRender = filteredTickets.map(item => {
      return (
        <Ticket
          price={item.price}
          timeFrom={item.departure_time}
          cityFrom={`${item.origin},${item.origin_name}`}
          dateFrom={item.departure_date}
          transfer={item.stops}
          timeTo={item.arrival_time}
          cityTo={`${item.destination_name},${item.destination}`}
          dateTo={item.arrival_date}
        />
      );
    });
    return <React.Fragment>{ticketsRender}</React.Fragment>;
  }
}
