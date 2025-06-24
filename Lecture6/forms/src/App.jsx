import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [errors, setErrors] = useState({ name: "", email: "", age: "" });

  const inputStyles = `border-2 border-gray-300 p-2 w-64 rounded`;

  const validate = () => {
    const newErrors = { name: "", email: "", age: "" };
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!email.includes("@")) {
      newErrors.email = "Email must contain '@'.";
      isValid = false;
    }

    if (Number(age) <= 0) {
      newErrors.age = "Age must be a positive number.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setName("");
      setEmail("");
      setAge("");
      setErrors({ name: "", email: "", age: "" });
    }
  };

  return (
    <div className="bg-pink-100 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-amber-50 w-fit p-10"
      >
        <h1 className="text-2xl font-bold">Welcome User</h1>

        <label>
          <p>Enter your name:</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputStyles}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </label>

        <label>
          <p>Enter your email:</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputStyles}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </label>

        <label>
          <p>Enter your age:</p>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={inputStyles}
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </label>

        <button
          type="submit"
          className="w-fit bg-blue-500 text-white rounded-full py-1 px-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
