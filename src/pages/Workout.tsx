// import { useState } from 'react';

import Counter from '../components/Counter';
import Body from '../components/Body';

export default function Workout() {
  const workouts = ['Pushups', 'Situps', 'Burpees', 'Squats', 'Jumping Jacks'];

  // const updateWorkouts = () =>{
  //   setWorkouts([...workouts])
  // }
  return (
    <Body sidebar>
      {workouts.map((workout) => (
        <Counter exercise={workout} key={workout}></Counter>
      ))}
    </Body>
  );
}
