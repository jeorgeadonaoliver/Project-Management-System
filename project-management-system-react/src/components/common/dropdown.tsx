import type React from "react";

interface DropdownListProp<T>
{
    items: T[],
    getOptionKey: (item: T) => number;
    getOptionLabel: (item:T) => string;
    selectProps? : React.SelectHTMLAttributes<HTMLSelectElement>;
    placeHolder: string;
}


function DropdownList<T>({selectProps,items, getOptionKey, getOptionLabel, placeHolder}:DropdownListProp<T>){

    return(
        <>
        <select {...selectProps}>
            <option value="">-- {placeHolder} --</option>
            {items.map((item, index)=>(
                <option key={index} value={getOptionKey(item)}>
                    {getOptionLabel(item)}
                </option>
            ))}
        </select>
        </>
    );
}

export default DropdownList;