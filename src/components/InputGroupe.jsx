export const FormControl = ({
  label,
  placeholder,
  type,
  name,
  handleChange,

}) => {
  return (
    <div className="flex flex-col gap-2 my-2">
      <div className="flex justify-between">
        <label>{label}</label>
        <label>{label}</label>
      </div>
      <input
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        name={name}
        className="rounded-md p-2 border-[0.5px] border-gray-cool outline-1 outline-blue-purplish"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
