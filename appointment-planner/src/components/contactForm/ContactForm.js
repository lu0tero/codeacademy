import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
          <input type="tel" name="phone" value={phone} onChange={e => setPhone(e.target.value)} pattern="[0-9]{9}"/>
          <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
          <button type="submit">Add contact</button>
      </form>
    </>
  );
};

