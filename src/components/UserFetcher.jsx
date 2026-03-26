import { useState, useEffect } from "react";

export default function UserFetcher() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        if (!res.ok) {
          throw new Error("API is down");
        }
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => setError(err.message));
  }, []);

  // 🔴 Error State
  if (error) {
    return <p>Error: {error}</p>;
  }

  // 🟡 Loading State
  if (!user) {
    return <p>Loading...</p>;
  }

  // 🟢 Success State
  return (
    <div data-testid="user-info">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}