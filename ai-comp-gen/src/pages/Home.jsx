import React from "react";
import Navbar from "../components/Navbar";
import Select from "react-select";

const Home = () => {
  const options = [
    { value: 'html-css', label: 'HTML + CSS' },
    { value: 'html-tailwind', label: 'HTML + Tailwind CSS' },
    { value: 'html-bootstrap', label: 'HTML + Bootstrap' },
    { value: 'html-css-js', label: 'HTML + CSS + JS' },
    { value: 'html-tailwind-bootstrap', label: 'HTML + Tailwind + Bootstrap' },
  ];

  // 🔥 Black Theme Styles for React-Select
  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "#141319",
      borderColor: "#2a2a2a",
      padding: "4px",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#444",
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#141319",
      border: "1px solid #2a2a2a",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#3a3a3a"
        : state.isFocused
        ? "#2a2a2a"
        : "#141319",
      color: "white",
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      color: "white",
    }),
    input: (base) => ({
      ...base,
      color: "white",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#888",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "white",
      "&:hover": { color: "#bbb" },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      backgroundColor: "#333",
    }),
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center px-[100px] justify-between gap-[30px]">

        {/* LEFT SECTION */}
        <div className="left w-[50%] h-[80vh] bg-[#141319] mt-5 p-[20px]">
          <h3 className="text-[25px] font-semibold sp-text">
            AI component generator
          </h3>

          <p className="text-gray mt-2 text-[16px]">
            Describe your component and let AI will code for you.
          </p>

          {/* 🔥 Black Theme Select Added */}
          <p className='text-[15px] font-[700] mt-4'>Framework</p>
          <div className="mt-5 w-[70%]">
            <Select className="mt-4"
              options={options}
              styles={customStyles}
              placeholder="Select a component type..."
            />
            <p className='text-[15px] font-[700] mt-5'>Describe your component</p> 
            <textarea className='w-full min-h-[200px] rounded-xl bg-[#09090B] mt-3 p-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 resize-none'
            placeholder="Describe your component in detail and AI will generate it..."></textarea>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="right left w-[50%] h-[80vh] bg-[#141319] mt-5"></div>
      </div>
    </>
  );
};

export default Home;
