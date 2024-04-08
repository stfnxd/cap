import React from 'react'

const Loading = () => {
  return (
    <div style={{position: 'relative'}}>
    <h3 
        style={{
            position: 'fixed', 
            top:'50%', 
            left:'50%', 
            transform:'translate(-50%, -50%)',
            }}>
                I'm Loading ...
    </h3>
</div>
  )
}

export default Loading