import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, getData] = useState({});
  const [itm, getItem] = useState([]);
  const getList = async () => {
    const r = await axios.get(`https://apis.data.go.kr/4050000/libebook/getLibebook?serviceKey=nmPIjJ%2Bj0FufPiP6k4BLPlq3n%2B46QZN%2B6hgSINrrxqk3nNwnoHX2ynqX6Dlgr3xFeivGPus2vgmh6Ifx1vdu1g%3D%3D&pageNo=1&numOfRows=100`);
    getData(r.data);
    getItem(r.data.items);
    console.log(data, itm)
  };

  useEffect(() => {
    getList();
  }, []);




  return (
    <div>
      {
        itm.map((it, idx) => <li key={idx}>{it.ebk_nm}</li>)
      }

    </div>
  )
}

export default App
