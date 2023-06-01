import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';


const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
          <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Motivo de la cita"></input>
          <input type="date" name="date" min={getTodayString()} value={date} onChange={e => setDate(e.target.value)}></input>
          <input type="time" name="time" value={time} onChange={e => setTime(e.target.value)}></input>
          <ContactPicker name='contact' contacts={contacts} onChange={e => setContact(e.target.value)} value={contact}/>
          <button type="submit">Add appointment</button>
      </form>
    </>
  );
};
