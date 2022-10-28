import { PickUpBadge, DropOffBadge } from "../../Icons";
import "../../../styles/Form.css";
import { theme } from "../../../theme";

const Input = ({
  type,
  placeholder,
  value,
  handleBlur,
  onChange,
  badgeState,
}) => {
  const { circle, path } = theme;
  const badge = {
    pickup: (
      <PickUpBadge
        circle={circle[badgeState]?.[type] || circle[badgeState]}
        path={path[badgeState]}
      />
    ),
    dropoff: (
      <DropOffBadge
        circle={circle[badgeState]?.[type] || circle[badgeState]}
        path={path[badgeState]}
      />
    ),
  };

  return (
    <div className="inputContainer">
      <span className="iconContainer">{badge[type]}</span>
      <input
        placeholder={placeholder}
        className="input"
        value={value}
        onChange={(e) => onChange(type, e.target.value)}
        // onMouseOut={() => handleBlur(value, type)}
        onBlur={() => handleBlur(value, type)}
      />
    </div>
  );
};

export default Input;
