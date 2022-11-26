import { useEffect, useState } from 'react';
import Dropdown from './components/dropdown';
import Table from './components/table';
import Chart from './components/Chart';
import Loading from './components/Loading'
import axios from 'axios';
import './App.css';




function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
     fetchData()  
  }, [])
  

  function fetchData(){
    axios.get("http://fetest.pangeatech.net/data").then((res)=>{
      setData(res.data)
      sessionStorage.setItem("local-cache", res.data);
    }) 
  }


  return (
    <div className="App">
      {data ? (
        <div className="App-Container">
          <nav className="App-header">
            <Dropdown />
            <p>Hi, John Doe</p>
          </nav>
          <div className="App-Body">
            <Chart data={data}/>
            <Table data={data}/>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
