import React from "react";
import { DropdownProps, Form } from "semantic-ui-react";
import startCase from "lodash-es/startCase";

interface PropTypes extends DropdownProps {
  dropdownOpts: string[];
}

const SelectDropdown: React.FC<PropTypes> = ({
  dropdownOpts,
  ...otherProps
}) => {
  const mapOptions = (val: string) => ({
    text: startCase(val),
    key: val,
    value: val,
  });

  return (
    <Form.Dropdown
      {...otherProps}
      options={Object.values(dropdownOpts).map(mapOptions)}
    />
  );
};

export default SelectDropdown;
