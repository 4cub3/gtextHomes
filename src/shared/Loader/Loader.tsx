import React from "react";
import Container from "../Container/Container";

const Loader: React.FC = () => {
  return (
    <div className=" my-60">
      <Container>
        <div className="flex items-center justify-center gap-4 py-2">
          <div className="h-6 w-6 animate-pulse rounded-full  bg-red-gtext"></div>
          <div className="h-6 w-6 animate-pulse rounded-full bg-red-gtext"></div>
          <div className="h-6 w-6 animate-pulse rounded-full bg-red-gtext"></div>
        </div>
      </Container>
    </div>
  );
};

export default Loader;
