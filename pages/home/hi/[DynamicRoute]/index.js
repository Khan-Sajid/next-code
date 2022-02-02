import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../../../components/Navbar";

// Dynamic Routing.
const index = () => {
  let router = useRouter();
  let userQuery = router.query.DynamicRoute;

  return (
    <>
      <Navbar />
      <h1>The query is {userQuery}</h1>
    </>
  );
};

export default index;
