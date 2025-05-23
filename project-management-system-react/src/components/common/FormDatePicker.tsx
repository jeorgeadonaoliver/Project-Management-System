import { format, parseISO } from "date-fns";
import type React from "react";
import DatePicker from "react-datepicker";
import { Controller } from 'react-hook-form';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface FormDatePickerProps {
  name: string;
  control: any;
  placeholder?: string;
  rules?: any;
  isDisabled: boolean;
}

const FormDatePicker: React.FC<FormDatePickerProps> = ({
  name,
  control,
  placeholder = 'Select date',
  rules,
  isDisabled
}) => {
    return(
        <>
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
                <DatePicker
                placeholderText={placeholder}
                selected={field.value ? parseISO(field.value) : null}
                onChange={(date: Date | null) => {
                    const formatted = date ? format(date, 'yyyy-MM-dd') : '';
                    field.onChange(formatted);
                }}
                className="!w-full p-2 border border-gray-300 rounded-md cursor-pointer"
                wrapperClassName="w-full"
                disabled={isDisabled}
                />
            )}
        />
        </>
    );
}


export default FormDatePicker;