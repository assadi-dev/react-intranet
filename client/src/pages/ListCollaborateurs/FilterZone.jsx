import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFilterCollaborateurAsync } from "../../features/collaborateurs/collaborateurAsyncAction";
import { getError } from "../../features/collaborateurs/collaborateurSlice";
import { isEmpty } from "../../services/utils";
import { RowActionsFilter } from "./ListCollaborateur.styled";
import SearchBar from "./SearchBar";
import SelectFilter from "./SelectFilter";

const FilterZone = () => {
  const dispatch = useDispatch();

  const [filterState, setFilterState] = useState({
    term: "",
    service: "",
    categorie: "",
  });

  useEffect(() => {
    if (
      !isEmpty(filterState.term) ||
      !isEmpty(filterState.service) ||
      !isEmpty(filterState.categorie)
    ) {
      dispatch(fetchFilterCollaborateurAsync(filterState))
        .unwrap()
        .catch((error) => {
          console.log(error);
          let errormessage = "";
          if (error.response) {
            errormessage = error.response.data.errors;
          } else {
            errormessage = error.message;
          }
          dispatch(getError(errormessage));
        });
    }
  }, [filterState.term, filterState.service, filterState.categorie]);

  const handleFilterParams = (data) => {
    setFilterState((prevState) => ({ ...prevState, ...data }));
  };
  const handleTermSearch = (data) => {
    setFilterState((prevState) => ({ ...prevState, term: data }));
  };

  return (
    <RowActionsFilter>
      <SearchBar getSearchTerm={handleTermSearch} />
      <SelectFilter setFilterPraram={handleFilterParams} />
    </RowActionsFilter>
  );
};

export default FilterZone;
