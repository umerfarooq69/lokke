// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/no-static-element-interactions */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";

const Collapse = ({ children, className, label, buttonClass, initValue }) => {
  const [open, setOpen] = useState(initValue);

  return (
    <div className="relative z-20">
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

export default Collapse;
