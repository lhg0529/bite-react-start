import { useState } from 'react'

const ViewerComponent = ({ count }: { count: number }) => {
  return (
    <div className="viewer-main">
      <div className="viewer-count">현재 카운트 :</div>
      <div className="viewer-number">{count}</div>
    </div>
  )
}

export default ViewerComponent
