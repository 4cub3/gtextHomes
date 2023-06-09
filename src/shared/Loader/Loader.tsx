import React from "react";
import Container from "../Container/Container";

const Loader: React.FC = () => {
  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <Container>
        <div className="flex items-center justify-center gap-4 py-2 ">
          <div className=" w-20 h-20  rounded-full border-t-2 border-t-blue-gtext animate-spin"></div>
        </div>
      </Container>
    </div>
  );
};

export default Loader;
