import React from 'react';

//note props is an object
function Bookstable({id, created_at, title, image}) {

  let htmlString = (id, created_at, title, imageurl) => {
    return `
      <td>${id}</td>
      <td><img src=${imageurl} alt="bookimg" height="80" width="70"></td>
      <td>${title}</td>
      <td>${created_at}</td>
  `
  }

  return (
    <tr dangerouslySetInnerHTML={{ __html: htmlString(id, created_at, title, image) }}>
    </tr>
  )

}

export default Bookstable