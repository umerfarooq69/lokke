import { useState } from 'react';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <button
      className={`relative w-10 h-6 flex items-center ${isOn ? 'justify-end' : 'justify-start'} rounded-full transition-colors duration-300 ${isOn ? 'bg-black' : 'bg-[#F2F4F7]'
        }`}
      onClick={handleToggle}
      type="button"
    >
      <span className={`absolute w-5 h-5 shadow-[0px_1px_2px_0px_rgba(29,41,57,0.08),0px_1px_2px_0px_rgba(29,41,57,0.12)] bg-white rounded-full transform ${isOn ? 'right-[2px]' : 'left-[2px]'}`} />
    </button>
  );
};

export default ToggleButton;
