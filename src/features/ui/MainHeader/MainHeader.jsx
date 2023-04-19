import React from "react";
import sass from "./MainHeader.module.sass";

import { Search, FastLinks, GroupLinks, BaseSettings } from "../../../entities/ui";

const MainHeader = () => {
  return (
    <div className={sass["MainHeader-wrap"]}>
      <div className={sass["header-inner"]}>
        <Search />
        <BaseSettings />
      </div>
      <div className={sass["header-inner"]}>
        <FastLinks />
        <GroupLinks />
      </div>
    </div>
  );
}

export { MainHeader };