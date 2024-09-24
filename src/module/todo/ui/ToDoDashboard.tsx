import { Button, Input } from '@headlessui/react';
import { ChangeEvent, useState } from 'react';

export const ToDoDashboard = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  console.log(value);
  return (
    <div className="max-w-[700px] w-[100%]">
      <div className="flex space-x-[10px]">
        <Input
          name="full_name"
          type="text"
          value={value}
          onChange={handleChange}
          className="mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white"
        />
        <Button className="bg-base-80">add todo</Button>
      </div>
    </div>
  );
};
