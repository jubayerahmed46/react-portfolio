function Textarea({
  label,
  onChange = () => {},
  value,
  className = "",
  placeholder = "enter input",
  name = "input",
}) {
  const classes = `${className} w-full py-2.5 px-4 outline-none rounded-md bg-white/5 border-none   focus:ring-1 focus:ring-[#007BFF] placeholder:font-light shadow-lg shadow-black/20`;

  const labelClasses = `mb-1.5 dark-gray `;
  if (value) {
    return (
      <label>
        <p className={labelClasses}>{label} </p>
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          className={classes}
        />
      </label>
    );
  }
  return (
    <label>
      <p className={labelClasses}> {label} </p>
      <textarea
        rows={5}
        placeholder={placeholder}
        name={name}
        className={classes}
      />
    </label>
  );
}

export default Textarea;
