export default function Input(props) {
  return (
    <div>
      <input
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
