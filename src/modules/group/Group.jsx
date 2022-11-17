/* eslint-disable no-unused-vars */
import { debounce } from "@mui/material";
import React, { useState } from "react";
import Search from "../../components/input/Search";
import LeftOptionGroup from "../../components/layout/LeftOptionGroup";
import GroupBar from "../../components/menu/GroupBar";
import GroupList from "./GroupList";

function Group() {
  const [filter, setFilter] = useState("");
  const handleSetFilter = debounce(e => setFilter(e.target.value), 500);
  return (
    <div className="flex">
      <GroupBar />
      <div className="p-8 px-40 flex-1 bg-gray-50">
        <div className="flex justify-between">
          <Search handleSetFilter={handleSetFilter} />
          <LeftOptionGroup />
        </div>
        <GroupList />
      </div>
    </div>
  );
}

export default Group;
