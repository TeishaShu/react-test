import './App.css';
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import Test1 from './pages/test1';
import Test2 from './pages/test2';

function App() {
  const [page, setPage] = useState('test1');
  return (
    <div style={{margin:"20px"}}>
      <div style={{marginBottom:"20px"}}>
        <Button onClick={() => setPage("test1")}>Test1</Button>
        <Button onClick={() => setPage("test2")}>Test2</Button>
      </div>

      {page === "test1" ? <Test1 /> : <Test2 />}
    </div>
  );
}

export default App;
