import { Button, Input } from '@headlessui/react';
import { SubmitHandler, useForm } from 'react-hook-form';

type TodoInput = {
  todo: string;
};

export const ToDoDashboard = () => {
  const { register, handleSubmit } = useForm<TodoInput>();

  const onSubmit: SubmitHandler<TodoInput> = (data) => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        id: 1,
        title: data.todo,
        userId: 2,
        completed: false,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-[700px] w-full space-x-[10px] items-center"
      >
        <Input
          {...register('todo')}
          className="w-5/6 py-3 rounded-lg border-none bg-base-60 px-3 text-sm text-white"
        />
        <Button className="bg-base-90 w-1/6 text-white rounded-lg py-3" type="submit">
          add todo
        </Button>
      </form>
    </>
  );
};
