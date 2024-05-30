import React from 'react'

const borderThinkness = 4
const borderRadius = 10

const BorderCard = props => (
  <div
    className={`h-full bg-gradient-to-br from-blue to-green`}
    style={{ borderRadius: 10, padding: borderThinkness }}
  >
    <div
      style={{
        borderRadius: borderRadius - borderThinkness,
        backgroundColor: 'white',
      }}
      {...props}
    />
  </div>
)

export default BorderCard
