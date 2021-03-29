import { connect } from "react-redux";
import { compose } from "redux";
import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import {
  setActiveItem,
  setData,
  deleteDataItem,
} from "../store/action-creators/data";

function Sidebar_Container({ data, setActiveItem, setData, deleteDataItem }) {
  const [activeLink, setActiveLink] = useState(0);
  const setActive = (num) => {
    setActiveItem(num);
    setActiveLink(num);
  };
  return (
    <Sidebar
      data={data.sort((a, b) => a.id - b.id)}
      setActive={setActive}
      activeLink={activeLink}
      setData={setData}
      deleteDataItem={deleteDataItem}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data.data,
  };
};
export default compose(
  connect(mapStateToProps, { setActiveItem, setData, deleteDataItem })
)(Sidebar_Container);
