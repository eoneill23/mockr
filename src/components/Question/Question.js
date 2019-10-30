import React from 'react';

export const Question = ({ body, notes, id, showDetails, detailed }) => {

  const isDetailed = () => {if (detailed) {return ' shown'} else {return ''}}
  return (
    <section className='question-card' onClick={e => showDetails(id)}>
      <h3>{body}</h3>
      <div className={'details' + isDetailed()}>
        <p>{notes}</p>
      </div>
    </section>
  )
}

export default Question;
