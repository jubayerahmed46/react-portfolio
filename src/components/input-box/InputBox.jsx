function InputBox({
  label,
  onChange = () => {},
  value,
  className = "",
  type = "text",
  placeholder = "enter input",
  name = "input",
}) {
  const classes = `${className} w-full py-2.5 px-4 outline-none rounded-md bg-white/5 border-none  focus:ring-1 focus:ring-[#007BFF] placeholder:font-light shadow-lg shadow-black/20`;

  const labelClasses = `mb-1.5 dark-gray `;
  if (value) {
    return (
      <label>
        <p className={labelClasses}>{label} </p>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          className={classes}
          required
        />
      </label>
    );
  }
  return (
    <label>
      <p className={labelClasses}> {label} </p>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={classes}
        required
      />
    </label>
  );
}

export default InputBox;
