import React, { Children } from "react";

const Group = (props: any) => {
  return <span className={props.styles}>{props.children}</span>;
};

export default Group;
