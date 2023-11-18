import { useState, useEffect } from 'react';

/**
*数据曲线等等
*/
const Status = () => {
  const [state, setState] = useState();
  useEffect(() => {
    console.log(state, setState);
  }, []);
  return (<div>sss</div>);
};

export default Status;
