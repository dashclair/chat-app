import { Button, Input } from '@headlessui/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { socket } from '../../../socket';

interface Score {
  name: string;
  score: string;
  id: string;
}

export const DashboardForm = () => {
  const [formValue, setValue] = useState({
    name: '',
    score: '',
  });
  const [scores, setScores] = useState<Score[]>();

  const connectSocket = () => {
    socket.on('connection', (socket) => {
      console.log(socket);
    });
  };

  const handleSubmitScore = () => {
    socket.emit('scores', formValue);

    socket.on('playerScores', (scores) => {
      console.log(scores);
      setScores(scores);
    });
  };

  console.log('scores', scores);

  useEffect(() => {
    connectSocket();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <>
      <form className="flex flex-col space-y-2">
        <Input className="p-2" name="name" placeholder="name" onChange={handleChange} />
        <Input className="p-2" name="score" placeholder="score" onChange={handleChange} />
        <Button onClick={handleSubmitScore}>Submit score</Button>
      </form>
      {scores?.map((score) => (
        <div key={score.score} className="flex space-x-2">
          <p>{score.name}</p>
          <p>{score.score}</p>
        </div>
      ))}
    </>
  );
};
