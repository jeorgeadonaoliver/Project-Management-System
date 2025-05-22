import GridviewList from "./gridview-list";

interface GridviewHeaderProps<T extends object>{
    datas: T[];
    onSelectedId: (id:number) => void;
}

function GridviewHeader<T extends object>({datas, onSelectedId}: GridviewHeaderProps<T>) {

  const formatKey = (key: string) => {
    return key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
  };

  const keys = Object.keys(datas[0]) as (keyof T)[];

  return (
    <div className="overflow-x-auto rounded-xl">
      <table className="min-w-full border border-gray-300 rounded-xl shadow-md">
        <thead>
          <tr className="bg-neutral-800 text-white text-sm">
            <th className="px-4 py-2 text-center">Action</th>
            {keys.map((key) => (
              <th key={String(key)} className="px-4 py-2 text-center">
                {formatKey(String(key))}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <GridviewList data={datas} onSelectedId={onSelectedId}></GridviewList>
        </tbody>
      </table>
    </div>
  );

};


export default GridviewHeader;