import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFilterCollaborateurAsync } from "../../features/collaborateurs/collaborateurAsyncAction";
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
    dispatch(fetchFilterCollaborateurAsync(filterState));
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
