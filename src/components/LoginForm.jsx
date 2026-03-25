import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setSubmittedMessage(`Welcome, ${username}!`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Submit</button>
      
      {submittedMessage && <p data-testid="welcome-message">{submittedMessage}</p>}
    </form>
  );
}
