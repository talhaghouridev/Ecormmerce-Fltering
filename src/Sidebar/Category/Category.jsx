import "./Category.scss";
import Input from "../../components/Input";
import { CATEGORY } from "../../constants";

function Category({ handleChange }) {
  return (
    <div className="category">
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        {CATEGORY?.map((item) => (
          <Input key={item.name} handleChange={handleChange} {...item}  />
        ))}
      </div>
    </div>
  );
}

export default Category;
