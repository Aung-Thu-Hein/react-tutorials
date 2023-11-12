import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(JSON.stringify(formData));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" style={{ display: "block" }}>
          username
        </label>
        <input type="text" name="username" onChange={handleChange} />
        <br></br>
        <br></br>
        <label htmlFor="email" style={{ display: "block" }}>
          email
        </label>
        <input type="email" name="email" onChange={handleChange} />
        <br></br>
        <br></br>
        <label htmlFor="gender" style={{ display: "block" }}>
          Gender
        </label>
        <label id="male">
          Male
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
        </label>
        <label id="female">
          Female
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <select name="subjects" onChange={handleChange}>
          <option value="" defaultChecked>Choose subject</option>
          <option value="computerScience">Computer Science</option>
          <option value="foreignLanguages">Foreign Languages</option>
          <option value="science">Science</option>
          <option value="engineering">Engineering</option>
        </select>
        <br></br>
        <br></br>
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default App;
