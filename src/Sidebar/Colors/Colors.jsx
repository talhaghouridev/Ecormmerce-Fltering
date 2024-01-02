import "./Colors.scss";
import Input from "../../components/Input";
import { COLORS } from "../../constants";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div className="colors">
        <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>
        {COLORS?.map((item) => (
          <Input key={item.name} handleChange={handleChange} {...item} />
        ))}
       

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;
