import React from 'react'

function index() {


  const handelAlert = (a,b) => {
    alert('Adding The Repo....');
    console.log("Good Request");
    console.log(a+b);
  }

  return (
    <div>
      Happy Frontend.
      <p>This is the Home page</p>
      <button>Drop File Here</button>
      <button onClick={handelAlert}>Click Here</button>

    </div>
  )
}

export default index
