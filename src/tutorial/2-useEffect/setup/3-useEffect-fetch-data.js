import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

//Maind Component
const UseEffectFetchData = () => {
  //Set useState hook. At this point users = []
  const [users, setUsers] = useState([]);

  //Get user info from source or API using AJAX, and assign the value to users.
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();

    //sets new value users in useState
    setUsers(users);
    console.log(users);
  };
  //This is automatically called at initial render but not beyond. Otherwise there would be infinite loop.
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>Github Users</h2>
      <ul className="users">
        {/* Mapping out for each user in the users  */}
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;

          return (
            <li key={id}>
              <img src={avatar_url} alt={id} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
