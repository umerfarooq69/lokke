import Form from "./form";

const Signup = ({ formType }) =>
  <div className=" bg-background-tertiary p-8 min-h-[715px] rounded-[20px]">
    <h4 className="text-[48px] text-center text-black mb-8">{'Register'}</h4>

    <div className={formType === 'professional' ? 'flex gap-1' : ''}>
      <div className="flex-1">
        <Form formType={formType} />
      </div>
      {
        formType === 'professional' ?
          <div className="flex-1">
            <Form formType={formType} />
          </div>
          : undefined
      }

    </div>

    <div className="text-center">
      <button className=" bg-background-primary py-2 px-6 mt-8 text-[14px] text-white rounded-lg" type="button">{'Register'}</button>
    </div>
  </div>;

export default Signup;
