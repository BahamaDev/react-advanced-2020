import React, { useState } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople(() => {
      people.filter((person) => person.id !== id);
    });
  };

  return (
    <>
      <section>
        <h3>Prop Drilling</h3>
        {/* Below we are passing removePerson as an property to List. Functions can be passed as properties. */}
        <List people={people} removePerson={removePerson} />
      </section>
    </>
  );
};

const List = ({ people }) => {
  return (
    <>
      {/* Below we saying "get removePerson() from my props and make it accessible to SinglePerson" */}
      {people.map((person, removePerson) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};
export default PropDrilling;
