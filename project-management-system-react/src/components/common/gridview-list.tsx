
import Button from "./button";
import { FaEye } from "react-icons/fa";

interface GridviewListProps<T>{
  data: T[];
}

function GridviewList<T extends object>({data }: GridviewListProps<T>){
    
    const onClick = () => {"Clicked"};

    return(
      <>
      {data.map((item, rowIndex) => (
        <tr key={rowIndex}>
          <td className="px-4 py-2 text-left">
            <Button icon={<FaEye size="15" />} text="" onClick={onClick} />
          </td>
          {Object.entries(item).map(([key, value]) => (
            <td key={key} className="px-4 py-2 text-left">
              {String(value)}
            </td>
          ))}
        </tr>
      ))}
    </>
    );
};

export default GridviewList;