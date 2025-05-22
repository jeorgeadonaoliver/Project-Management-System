// import React from "react";
import GridviewHeader from "./gridview-header";
// import type { Team } from "../../types/team";

interface GridViewProps<T> {
  gridviewTitle: string;
  data: T[];
  onSelectedId: (id: number) => void;
}

function Gridview<T extends object>({ gridviewTitle, data, onSelectedId }: GridViewProps<T>) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 text-center">{gridviewTitle}</h2>

      <div className="rounded-xl">
        <GridviewHeader<T> datas={data} onSelectedId={onSelectedId} />
      </div>
    </>
  );
}

export default Gridview;
