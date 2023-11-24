import React, { useState } from 'react'
import Accordion from './Accordion';

 const Contact = ({title,children}) => {

  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      
    <section className="panel">
      <h3>{title}</h3>
      { isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )
      }
    </section>
    </div>
  )
}

export default Contact;