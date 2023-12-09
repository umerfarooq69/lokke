// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/no-static-element-interactions */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useRef, useState } from 'react';

const DropDown = ({ children, className, label, buttonClass }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null); // Create a ref for the dropdown component

  // Function to close the dropdown when a click occurs outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-20" ref={dropdownRef}>
      <div className={`cursor-pointer ${buttonClass || ''} leading-[0px]`}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open)
        }}
      >
        {label}
      </div>
      <div className={open ? className || '' : 'hidden'}>{children}</div>
    </div>
  );
};

export default DropDown;
