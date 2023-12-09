import FormTile from "./form-tile";

const Form = () =>
  <div className="grid gap-8">
    <FormTile label="Email" />
    <FormTile label="Password" />
    <div className="text-center">
      <button className=" bg-background-primary py-2 px-6 text-[14px] text-white rounded-lg" type="button">{'Login'}</button>
    </div>
  </div>;

export default Form;
