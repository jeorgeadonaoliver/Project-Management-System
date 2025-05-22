
// import { useQueryClient } from "@tanstack/react-query";
import Button from "./button";
import { FaEye } from "react-icons/fa";

interface GridviewListProps<T>{
  data: T[];
  onSelectedId: (id:number) => void;
}

function GridviewList<T extends object>({data, onSelectedId}: GridviewListProps<T>){

    const handleClick = (id:number) => {
        onSelectedId(id); 
    };

   return (
    <>
      {data.map((item, rowIndex) => {
        const selectedid = Object.entries(item)[0]?.[1];

        return (
          <tr key={String(rowIndex)}>
            <td className="px-4 py-2 text-left">
              <Button
                icon={<FaEye size="15" />}
                text=""
                onClick={() => handleClick(selectedid)}
              />
            </td>
            {Object.entries(item).map(([key, value]) => (
              <td key={key} className="px-4 py-2 text-left">
                {String(value)}
              </td>
            ))}
          </tr>
        );
      })}
    </>
  );
};

export default GridviewList;