import React, { useState, useEffect } from 'react';

const Pager = ({ count, initialSize = 10, onChange }) => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(initialSize);
  const pages = Math.ceil(count / size);

  const emit = page => {
    setPage(page);
    const offset = (page - 1) * 10;
    onChange && onChange(page, { start: offset, end: offset + size });
  };

  useEffect(() => {
    emit(1);
  }, [count]);

  const prev = n => {
    return <li><button disabled={page <= 1} onClick={() => emit(page - 1)} >上一页</button></li>
  }
  const next = n => {
    return <li><button disabled={page + 1 >= pages} onClick={() => emit(page + 1)} >下一页</button></li>
  };

  return (
    <div className="pager">
      <ul >
        {prev(page)}
        <li><input type="number" value={page} onChange={e => emit(e.target.value)} /></li>
        {next(page)}
      </ul>
      <input type="number" value="10" onChange={ e => setSize(e.target.value) } />
    </div>
  );
};


export default Pager;