import React from 'react';

function numberOfSets(number){
  console.log(number)
  const arr = new Array(number).fill(null);
  const newArr = arr.map((item, index) => {
    return <input type="checkbox" key={'checkbox'+index}/>
  });
  return newArr;
};
const Exercise = ({name, weight, sets, reps, rest}) => (
  <div>
    <h3>Det här är Exercise: {name}</h3>
    <ul>
      <li>Vikt: {weight}</li>
      <li>Sets: {sets}</li>
      <li>Reps: {reps}</li>
      <li>Vila: {rest}</li>
    </ul>
    Checklista för set:
    {numberOfSets(3)}

  </div>

);

export default Exercise;
