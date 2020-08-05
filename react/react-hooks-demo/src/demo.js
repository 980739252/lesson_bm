import React, { memo, useState } from 'react';
export const MyComponent = () => {
  const [userInfo, setUserInfo] = useState({
    name: ' john ',
    lastname: 'Doe'
  })
  setTimeout(() => {
    setUserInfo({
      ...userInfo,
      name: ' john ',
      lastname: 'Doe'
    })
  },2000)
  return (
    <>
      <DisplayUsername name={userInfo.name} />
      <input
        type="text"
        value={userInfo.name}
        onChange={e => setUserInfo({
          ...userInfo,
          name: e.target.value
        }
        )}
      />

    </>
  )
}

export const DisplayUsername = memo(props => {
  console.log('只在name发生改变时才更新')
  return <h1>{props.name}</h1>  
})


// export const MyComponent = () => {
//   const [filter, setFilter] = React.useState("");
//   const [userCollection, setUserCollection] = React.useState([]);

//   React.useEffect(() => {
//     fetch(`http://jsonplaceholder.typicode.com/users?name_like=${filter}`)
//       .then(response => response.json())
//       .then(json => setUserCollection(json));
//   }, [filter])
//   return (
//     <div>
//       <input value={filter} onChange={e => setFilter(e.target.value)} />
//       <ul>
//         {
//           userCollection.map((user, index) => (
//             <li key={index}>
//               {user.name}
//             </li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }
