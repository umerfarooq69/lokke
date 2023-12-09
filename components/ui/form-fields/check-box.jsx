import { useState } from 'react';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <input
        checked={isChecked}
        className="hidden"
        onChange={handleCheckboxChange}
        type="checkbox"
      />
      <div
        className={`w-4 h-4 rounded flex items-center justify-center border transition-all duration-300 ${isChecked ? ' bg-background-primary border-border-quaternary' : 'bg-white border-border-primary'
          }`}
      >
        {isChecked && (
          <svg
            className="w-[10px] h-[10px]"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 13l4 4L19 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        )}
      </div>
    </label>
  );
};

export default Checkbox;
