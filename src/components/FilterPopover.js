import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  withStyles,
} from "@material-ui/core";
import React from "react";

const StyledCheckbox = withStyles({
  root: {
    color: "#ffb7f3",
    "&$checked": {
      color: "#ffb7f3",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function FilterPopover({ filter, setFilter }) {
  const handleChange = (event, section) => {
    setFilter((prev) => ({
      ...prev,
      page: false,
      [section]: {
        ...prev[section],
        [event.target.name]: event.target.checked,
      },
    }));
  };
  console.log(filter);
  return (
    <div
      style={{
        background: "rgba(13, 2, 33, 0.975",
        padding: 10,
      }}
    >
      <div>
        <FormLabel
          component="legend"
          style={{ color: "white", fontSize: 18, textDecoration: "underline" }}
        >
          Type
        </FormLabel>
        <FormGroup>
          {Object.keys(filter.type).map((element, index) => (
            <FormControlLabel
              key={index}
              style={{ color: "white" }}
              control={
                <StyledCheckbox
                  checked={filter.type[element]}
                  onChange={(e) => handleChange(e, "type")}
                  name={element}
                />
              }
              label={element}
            />
          ))}
        </FormGroup>
      </div>
      <div>
        <FormLabel
          component="legend"
          style={{ color: "white", fontSize: 18, textDecoration: "underline" }}
        >
          Languages
        </FormLabel>
        <FormGroup>
          {Object.keys(filter.language).map((element, index) => (
            <FormControlLabel
              key={index}
              style={{ color: "white" }}
              control={
                <StyledCheckbox
                  checked={filter.language[element]}
                  onChange={(e) => handleChange(e, "language")}
                  name={element}
                />
              }
              label={element}
            />
          ))}
        </FormGroup>
      </div>
      <div>
        <FormLabel
          component="legend"
          style={{ color: "white", fontSize: 18, textDecoration: "underline" }}
        >
          Frameworks / Tools
        </FormLabel>
        <FormGroup>
          {Object.keys(filter.framework).map((element, index) => (
            <FormControlLabel
              key={index}
              style={{ color: "white" }}
              control={
                <StyledCheckbox
                  checked={filter.framework[element]}
                  onChange={(e) => handleChange(e, "framework")}
                  name={element}
                />
              }
              label={element}
            />
          ))}
        </FormGroup>
      </div>
    </div>
  );
}

export default FilterPopover;
