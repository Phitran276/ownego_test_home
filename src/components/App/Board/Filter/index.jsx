import React, { useState, Fragment } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { Filter, FilterCheck, TitleCheck, ListCheckbox } from "./Styles";
import Checkbox from './Checkbox';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const BoardFilter = ({typeToppings, filterType, mergeFilter, mergeSort}) => {
  const classes = useStyles();
  const [filter, setFilter] = useState("");


  const [openCheckbox, setCheckbox] = useState(false)

  const handleChange = (event) => {
    mergeSort({name: event.target.value});
  };

  const renderTypeToppings = (typeToppings) => {
      return typeToppings.map(item => <Checkbox key={item.id} name={item.name} filter={filterType} mergeFilter={mergeFilter} /> )
  }

  return (
    <Fragment>
      <Filter>
        <button
          className="waves-effect waves-light btn-large"
          style={{ backgroundColor: "#1D2C53" }} 
          onClick={() => {setCheckbox(!openCheckbox)}}
        >
          Filter
        </button>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="sort-by-label">Sort by</InputLabel>
          <Select
            native
            labelId="sort-by-label"
            id="sort-by-outlined"
            value={filter}
            onChange={handleChange}
            label="Sort by" 
          >
            <option aria-label="None" value="" />
            <option value="">Default</option>
            <option value="name-asc">Name Asc (A-Z)</option>
            <option value="name-dsc">Name Dsc (Z-A)</option>
            <option value="price-asc">Price Asc &uarr;</option>
            <option value="price-dsc">Price Dsc &darr;</option>
          </Select>
        </FormControl>
        
      </Filter>
      {openCheckbox && <FilterCheck>
        <TitleCheck>Toppings:</TitleCheck>
        <ListCheckbox>
            {renderTypeToppings(typeToppings)}
        </ListCheckbox>
      </FilterCheck>}
    </Fragment>
  );
};

export default BoardFilter;
