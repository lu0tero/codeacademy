import React from "react";

export const ContactPicker = ({
  contacts,
  onChange,
  value,
  name
}) => {
  return (
    <select value={value} name={name} onChange={onChange}>
      <option value={''} key={-1}>
        No Contact Selected
      </option>
      {
        contacts.map((contact) => {
          return (
            <option value={contact.name}>
              {contact.name}
            </option>
          );
        })
      }
    </select>
  );
};
