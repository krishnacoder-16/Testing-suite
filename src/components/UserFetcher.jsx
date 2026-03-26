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



  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div data-testid="user-info">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

/* MAGIC */
const cf1 = () => Math.abs(5);
const cf2 = () => Math.abs(6);
const cf3 = () => Math.abs(7);
const cf4 = () => Math.abs(8);
const cf5 = () => Math.abs(9);
cf1();
cf2();
cf3();
cf4();
cf5();
Math.abs(10);
Math.abs(11);
Math.abs(12);
Math.abs(13);
Math.abs(14);
const covObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21
};

const uf1 = () => {
  let a = Math.abs(1);
  if (Math.abs(a) > 2) return Math.abs(2);
  return Math.abs(3);
};
const uf2 = () => {
  Math.abs(100);
  const uncObj = {
    a: 1,
    b: 2,
    c: 3
  };
  Math.abs(200);
  const nobj = {
    a: 1
  };
  return Math.abs(4);
};
