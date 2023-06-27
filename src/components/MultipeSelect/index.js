import React, { useEffect, useState } from 'react';
import { Select, Spin } from 'antd';

function DebounceSelect({ ...props }) {
  const options = [
        {
            value: 1,
            label: "08:30"
        },
        {
            value: 2,
            label: "09:30"
        },
        {
            value: 3,
            label: "10:30"
        },
        {
            value: 4,
            label: "11:30"
        },
        {
            value: 5,
            label: "12:30"
        }
    ];

  return (
    <Select
      labelInValue
      filterOption={false}
      {...props}
      options={options}
    />
  );
}

const MultipeSelect = ({setArrivalId}) => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    if(value.length == 3){
        setArrivalId([value[0].value, value[1].value, value[2].value]);
    }
  }, [value]);

  // console.log(value);
  return (
    <DebounceSelect
      mode="multiple"
      value={value}
      placeholder="Select users"
      onChange={(newValue) => {
        setValue(newValue);
      }}
      style={{ width: '100%' }}
      disabled={value.length > 2 ? true : false}
    />
  );
};

export default MultipeSelect;