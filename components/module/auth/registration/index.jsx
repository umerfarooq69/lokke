import { useState } from "react";

import Signin from "../signin";
import Signup from "../signup";

import TopButtons from "./top-buttons";

const RegistrationModule = () => {
  const [formType, setFormType] = useState('user');

  return (
    <div className="grid justify-center pt-5 pb-10 h-[calc(100vh-91.5px)] overflow-y-scroll overflow-x-hidden scrollbar-hide">
      <div>
        <div className="mb-5 w-fit mx-auto">
          <TopButtons setFormType={setFormType} />
        </div>

        <div className="flex w-fit">
          <div className={formType === 'user' ? 'min-w-[426px]' : 'min-w-[702px]'}>
            <Signup formType={formType} />
          </div>
          <div className="min-w-[342px]">
            <Signin />
          </div>
        </div>
      </div>
    </div>
  )
};

export default RegistrationModule;
