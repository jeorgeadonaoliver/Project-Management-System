// import React from "react";
import GridviewHeader from "./gridview-header";
// import type { Team } from "../../types/team";

interface GridViewProps<T> {
  gridviewTitle: string;
  data: T[];
}

//<T,>({ gridviewTitle, data }: GridViewProps<T>): JSX.Element 

function Gridview<T extends object>({ gridviewTitle, data }: GridViewProps<T>) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 text-center">{gridviewTitle}</h2>

      <div className="rounded-xl">
        <GridviewHeader<T> datas={data} />
      </div>
    </>
  );
}

export default Gridview;
