import React from 'react'

export const BadgeComponent = (props) => {
  return (
    <>
      <span className={"badge " + (props.status < 1 ? 'bg-danger' : 'bg-success')}>
        { props.status < 1 ? 'Inactivo' : 'Activo' }
      </span>
    </>
  )
}
