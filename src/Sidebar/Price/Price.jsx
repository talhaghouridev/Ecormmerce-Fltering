import Input from "../../components/Input";
import { PRICE } from "../../constants";
import "./Price.scss";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml priced">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        {PRICE?.map((item) => (
          <Input key={item.name} handleChange={handleChange} {...item} />
        ))}
      </div>
    </>
  );
};

export default Price;
