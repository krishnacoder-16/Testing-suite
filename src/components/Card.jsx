export default function Card({ title, content }) {
  return (
    <div data-testid="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
