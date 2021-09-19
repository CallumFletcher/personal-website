import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  withStyles,
} from "@material-ui/core";
import React from "react";
import FilterData from "./FilterData";

const StyledCheckbox = withStyles({
  root: {
    color: "#ffb7f3",
    "&$checked": {
      color: "#ffb7f3",
    },
  },
  checked: {},
})((props: any) => <Checkbox color="default" {...props} />);

interface Props {
  filter: FilterData;
  setFilter: React.Dispatch<React.SetStateAction<FilterData>>;
}

const FilterPopover: React.FC<Props> = ({ filter, setFilter }) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    section: keyof FilterData
  ) => {
    setFilter((prev: FilterData) => ({
      ...prev,
      page: false,
      [section]: {
        ...(prev[section] as object),
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
          {Object.keys(filter.type).map((element: string, index: number) => (
            <FormControlLabel
              key={index}
              style={{ color: "white" }}
              control={
                <StyledCheckbox
                  checked={filter.type[element as keyof typeof filter.type]}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e, "type")
                  }
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
                  checked={
                    filter.language[element as keyof typeof filter.language]
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e, "language")
                  }
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
                  checked={
                    filter.framework[element as keyof typeof filter.framework]
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e, "framework")
                  }
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
};

export default FilterPopover;
