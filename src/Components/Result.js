import React from 'react'

const Result = ({result,status}) => {
  return (
    <div>
        <h3 className={status != 'Success!' ? "red" : "blue" }>{status}</h3>
        <p>{result}</p>
    </div>
  )
}

export default Result