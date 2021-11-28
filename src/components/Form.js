import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    middleName: "E.",
    lastName: "Henry",
    admin: false,
  })

  // function handleFirstNameChange(event) {
  //   setFormData({...formData, firstName: event.target.value})
  // }

  // function handleLastNameChange(event) {
  //   setFormData({...formData, lastName: event.target.value})
  // }

  function handleChange(e) {
    const name = e.target.name
    let value = e.target.value

    if(e.target.type === "checkbox") {
      value = e.target.checked
    }

    setFormData({...formData, [name]: value})
  }

  return (
    <form>
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <input type="text" name="middleName" onChange={handleChange} value={formData.middleName} />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
