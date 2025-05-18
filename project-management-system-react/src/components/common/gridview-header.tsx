// import type { Team } from "../../types/team";
// import GridviewList from "./gridview-list";

// import { GrFormViewHide } from "react-icons/gr";
import GridviewList from "./gridview-list";
// import Button from "./button";
// import type { Team } from "../../types/team";

// interface GridviewHeaderProps{
//     datas?: Team[];
// }

// const GridviewHeader: React.FC<GridviewHeaderProps> = ({datas}) => {

//   const formatKey = (key: string) => {
//     return key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
//   };

//     return(
//       <>
//       <div className="overflow-x-auto rounded-3xl">
//       <table className="min-w-full border border-gray-300 rounded-xl shadow-md">
//         <thead>
//           <tr className="bg-neutral-800 text-white rounded-xl">
//               <th className="px-4 py-2 text-center justify-center">Action</th>
//               {datas?.[0] && Object.keys(datas[0]).map((key) => (
//                 <th key={key} className="px-4 py-2 text-left">{formatKey(key)}</th>
//               ))}
//           </tr>
//         </thead>
//         <tbody className="justify-center">
//             <GridviewList data={datas}></GridviewList>
//         </tbody>
//       </table>
//       </div>
//       </>
//     );
// };

interface GridviewHeaderProps<T extends object>{
    datas: T[];
}

function GridviewHeader<T extends object>({datas}: GridviewHeaderProps<T>) {

  const formatKey = (key: string) => {
    return key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
  };

  const keys = Object.keys(datas[0]) as (keyof T)[];

  return (
    <div className="overflow-x-auto rounded-xl">
      <table className="min-w-full border border-gray-300 rounded-xl shadow-md">
        <thead>
          <tr className="bg-neutral-800 text-white">
            <th className="px-4 py-2 text-center">Action</th>
            {keys.map((key) => (
              <th key={String(key)} className="px-4 py-2 text-left">
                {formatKey(String(key))}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <GridviewList data={datas}></GridviewList>
        </tbody>
      </table>
    </div>
  );

};


export default GridviewHeader;