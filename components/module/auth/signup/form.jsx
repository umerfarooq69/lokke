import FormTile from "./form-tile";

const Form = () =>
  <div className="grid gap-8">
    <FormTile label="Email" />
    <FormTile label="Password" />
    <FormTile label="Phone Number" />
  </div>;

export default Form;
