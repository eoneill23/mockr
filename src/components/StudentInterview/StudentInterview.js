import React from 'react';

export const StudentInterview = ({ summary, id, showDetails, detailed }) => {

  const isDetailed = () => {if (detailed) {return ' shown'} else {return ''}}
  return (
    <section className='interview-card' onClick={e => showDetails(id)}>
      <h3>{id}</h3>
      <div className={'details' + isDetailed()}>
        {summary}
      </div>
    </section>
  )
}

export default StudentInterview;
