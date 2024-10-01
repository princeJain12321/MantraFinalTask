import React from 'react';
import Cards from './Cards';
import Dashboards from './Dashboard';
import Icons from './Icons';
import Divv from './Divv';

function App() {
 return (
    <div>
      <Divv/>
          <Dashboards/>
        <div className='container'>
          <Icons/>
          <Cards/>
        </div>
    </div>
  );
}
export default App;