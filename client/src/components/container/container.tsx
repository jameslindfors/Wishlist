import React from "react";

const Container = (props: any) => {
  return (
    <div className="flex justify-center items-center flex-col py-5">
      {props.children}
    </div>
  );
};

export default Container;
