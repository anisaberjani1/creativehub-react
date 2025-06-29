import React, { useRef } from "react";

const Assignment1 = () => {
  const inputRef = useRef(null);

  const focusInput = (element) => {
    if (element) {
      inputRef.current = element;
      element.focus();
    }
  };

  return (
    <div>
      <h3>User Form</h3>
      <form
        action="#"
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <label htmlFor="name">
          <span>Name: </span>
          <input ref={focusInput} type="text" placeholder="Name..." />
        </label>
        <label htmlFor="email">
          <span>Email: </span>
          <input type="email" placeholder="Email..." />
        </label>
        <label htmlFor="phone">
          <span>Phone: </span>
          <input type="text" placeholder="Phone..." />
        </label>
      </form>
    </div>
  );
};

export default Assignment1;
