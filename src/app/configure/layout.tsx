import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React, { ReactNode } from "react";
import Steps from "./../../components/Steps";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default layout;
