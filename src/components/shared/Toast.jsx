export default function Toast({ type, message, show }) {

  if (!show) return null;

  return (
    <div className={`toast ${type}`}>
      <span>{message}</span>
    </div>
  );

}