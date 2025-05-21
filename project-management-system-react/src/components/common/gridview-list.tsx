
import { useQueryClient } from "@tanstack/react-query";
import Button from "./button";
import { FaEye } from "react-icons/fa";

interface GridviewListProps<T>{
  data: T[];
}

function GridviewList<T extends object>({data}: GridviewListProps<T>){
  const queryClient = useQueryClient();
  const handleSelectedTeamId = (id: number)=> {
    queryClient.setQueryData(['TeamId'], id);
    console.log(queryClient.getQueryData(['TeamId']));
  };
  
  // const handleClick = (id: string | number) => {
  //   console.log("Clicked Id:", id);
  //   onClick(id);
  // };

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
                onClick={() => handleSelectedTeamId(selectedid)}
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