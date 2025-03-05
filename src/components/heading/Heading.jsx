function Heading({ title, subTitle }) {
  return (
    <div className=" justify-center flex flex-col text-center  mb-12 items-center">
      <h2 className=" md:text-4xl  text-2xl font-bold ">
        {title}
        <span className="text-5xl ml-0.5  text-[#007BFF]">.</span>
      </h2>
      <p className="dark-gray  mt-2 text-sm">{subTitle} </p>
    </div>
  );
}

export default Heading;
