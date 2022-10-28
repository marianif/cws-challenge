import "../../styles/Form.css";
import Input from "./Input";
import { useState } from "react";
import { geocode } from "../../helpers/geocode";
import { isValidAddress } from "../../helpers/form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BADGE_SUCCESS, BADGE_DEFAULT, BADGE_ERROR } from "../../constants";
import {
  setBadgeState,
  setMarkerState,
  setShowSuccess,
  resetState,
} from "../../store/uiSlice";

const formInitialState = {
  pickup: "",
  dropoff: "",
};

const Form = () => {
  const dispatch = useDispatch();
  const { validAddresses, markers, badges } = useSelector((state) => state.ui);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [values, setValues] = useState(formInitialState);

  // validate input value and change badge state accordingly
  const handleBlur = async (address, type) => {
    if (!address) {
      return;
    }

    const isValid = isValidAddress(validAddresses, address);
    if (isValid) {
      const coords = await geocode(address);
      dispatch(setMarkerState({ type, coords }));
      dispatch(setBadgeState({ type, value: BADGE_SUCCESS }));
    } else {
      dispatch(setBadgeState({ type, value: BADGE_ERROR }));
    }
  };

  const handleChange = (type, value) => {
    setValues({
      ...values,
      [type]: value,
    });
    // reset default on empty input
    if (!value) {
      dispatch(setBadgeState({ type, value: BADGE_DEFAULT }));
    }
  };

  const handleClick = () => {
    dispatch(setShowSuccess(true));
    dispatch(resetState());
    setValues(formInitialState);

    // hide success after few seconds
    setTimeout(() => {
      dispatch(setShowSuccess(false));
    }, 3500);
  };

  // enable button if conditions are matched
  useEffect(() => {
    const coordsReady = Object.values(markers).every((value) => value !== null);
    const hasInvalidFields = Object.values(badges).some(
      (value) => value === BADGE_ERROR
    );

    // make sure button gets enabled after geocode was successful
    if (coordsReady && !hasInvalidFields) {
      setButtonDisabled(false);
    } else if (!coordsReady || hasInvalidFields) {
      setButtonDisabled(true);
    }
  }, [markers, values, badges]);

  return (
    <div className="wrapper">
      <form className="form">
        <Input
          badgeState={badges.pickup}
          type="pickup"
          placeholder="Pick up address"
          value={values.pickup}
          handleBlur={handleBlur}
          onChange={handleChange}
        />
        <Input
          badgeState={badges.dropoff}
          type="dropoff"
          placeholder="Drop off address"
          value={values.dropoff}
          handleBlur={handleBlur}
          onChange={handleChange}
        />
        <button type="button" disabled={buttonDisabled} onClick={handleClick}>
          Create Job
        </button>
      </form>
    </div>
  );
};

export default Form;
