import React from "react";
import { Ticket } from "../../ui/organisms";
import data from "./tickets.json";

export class Tickets extends React.Component {
  state = {
    ticketsItem: []
  };

  componentDidMount() {}

  render() {
    const tickets = data.tickets.map(item => {
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
    return <React.Fragment>{tickets}</React.Fragment>;
  }
}
