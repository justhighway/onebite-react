export default function Controller({ onClick }) {
  return (
    <div>
      <button
        onClick={() => {
          onClick(1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          onClick(10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          onClick(10);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          onClick(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onClick(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onClick(-100);
        }}
      >
        -100
      </button>
    </div>
  );
}
