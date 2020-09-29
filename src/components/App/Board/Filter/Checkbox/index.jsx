import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import { StyledCheckbox } from "./Styles";

const FilterCheckbox = ({name,filter, mergeFilter}) => {


  return (
    <StyledCheckbox>
      <FormControlLabel
        value={name}
        control={<Checkbox color="primary" />}
        label={name}
        onChange={(event) => {
            if(event.currentTarget.checked){
                let {typeToppings} = {...filter};
                typeToppings.push(name);
                mergeFilter({typeToppings});
            }else{
                let {typeToppings} = {...filter};
                const index = typeToppings.findIndex(item => item === name);
                typeToppings.splice(index, 1);
                mergeFilter({typeToppings});
            }
            
        }}
      />
    </StyledCheckbox>
  );
};

export default FilterCheckbox;
