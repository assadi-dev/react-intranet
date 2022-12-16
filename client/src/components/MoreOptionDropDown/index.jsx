import React from "react";
import { Link } from "react-router-dom";
import { PencilEditicon, TrashIcon } from "../../assets/svg/global";
import {
  DeleteButton,
  DropDonwContent,
  EditButton,
  MenuDropDown,
} from "./MoreOption.styled";

const MoreOptionDropDown = ({ id, ...props }) => {
  return (
    <MenuDropDown {...props}>
      <DropDonwContent>
        <Link to="modifier-collaborateur">
          <EditButton className="dropdown-button mb-1">
            <PencilEditicon /> Modifier
          </EditButton>
        </Link>
        <DeleteButton className="dropdown-button">
          <TrashIcon /> Supprimer
        </DeleteButton>
      </DropDonwContent>
    </MenuDropDown>
  );
};

export default MoreOptionDropDown;
