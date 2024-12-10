import React, { FC } from "react";

interface IInputFormControlProps {
  parkingtype: string;
}

const InputFormControl: FC<IInputFormControlProps> = (
  props: IInputFormControlProps
) => {
  const { parkingtype } = props;

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        data-cy="parking-options"
        id={parkingtype}
        type="radio"
        name={parkingtype}
      />
      <label className="form-check-label" htmlFor={parkingtype}>
        {parkingtype}
      </label>
    </div>
  );
};

export default InputFormControl;
