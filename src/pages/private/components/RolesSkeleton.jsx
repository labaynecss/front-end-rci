import Skeleton from "./../../../components/skeleton/Skeleton";
import React from "react";

import Box from "../../../components/skeleton/Box";

const RolesSkeleton = () => {
  return (
    <div className="container mx-auto">
      <Skeleton>
        <div className=" flex flex-wrap">
          <Box height="200px" width="200px" />
          <Box />
        </div>
      </Skeleton>
    </div>
  );
};

export default RolesSkeleton;
