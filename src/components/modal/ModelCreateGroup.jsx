/* eslint-disable import/order */
/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import * as React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import Input from "../input/Input";
import ModalMain from "./ModalMain";
import { getCurrentUser } from "../../utils/constants";
import { createGroup, getGroupsCreatedByUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
import { getGroupsCreatedByUserStart } from "../../redux/groupSlice";
import { Navigate, useNavigate } from "react-router";

export default function ModalCreateGroup({ open, handleClose }) {
  const [textFieldValue, setTextFieldValue] = React.useState("");
  const handleOnChange = text => {
    setTextFieldValue(text);
  };
  const user = getCurrentUser();
  const dispatch = useDispatch();
  const handleAgree = text => {
    const groupName = {
      group_name: text,
    };
    createGroup(groupName, user.access_token, dispatch);
  };
  const navigate = useNavigate();
  const buttonList = [
    {
      id: uuid(),
      title: "Cancle",
      onClick: handleClose,
      className: "font-bold px-8 normal-case",
      bgColor: "bg-gray-100",
      hoverColor: "bg-gray-200",
      textColor: "text-gray-800",
    },
    {
      id: uuid(),
      title: "Agree",
      onClick: () => {
        handleAgree(textFieldValue);
        handleClose();
      },
      className: "font-bold px-8 normal-case",
      bgColor: "bg-green-700",
      hoverColor: "bg-green-800",
      textColor: "text-white",
    },
  ];
  return (
    <ModalMain open={open} handleClose={handleClose} title="Create group" buttonList={buttonList}>
      <Input name="name" label="Name" onChange={handleOnChange} />
    </ModalMain>
  );
}
ModalCreateGroup.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
