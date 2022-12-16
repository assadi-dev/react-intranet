import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { fetchFilterCollaborateurAsync } from "../../features/collaborateurs/collaborateurAsyncAction";
import { SelectFilterContainer } from "./ListCollaborateur.styled";

const optionService = [
  { label: "Client", value: "Client" },
  { label: "Technique", value: "Technique" },
  { label: "Marketing", value: "Marketing" },
];

const SelectFilter = ({ setFilterPraram }) => {
  const dispatch = useDispatch();

  const handleFilterCategorie = (e) => {
    const value = e.target.value;
    let data = { categorie: value };
    setFilterPraram(data);
  };

  const handleFilterService = (e) => {
    const value = e.target.value;
    let data = { service: value };
    setFilterPraram(data);
  };

  return (
    <SelectFilterContainer>
      <Form.Select
        className="selectInput"
        name="type"
        onChange={handleFilterCategorie}
      >
        <option value="nom">Nom</option>
        <option value="localisation">Localisation</option>
      </Form.Select>
      <Form.Select
        className="selectInput"
        name="categorie"
        onChange={handleFilterService}
      >
        <option value="">Aucun</option>
        {optionService.map((categorie, i) => (
          <option key={i} value={categorie.value}>
            {categorie.label}
          </option>
        ))}
      </Form.Select>
    </SelectFilterContainer>
  );
};

export default SelectFilter;
