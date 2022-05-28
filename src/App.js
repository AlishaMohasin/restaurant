import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Filters from './components/Filters';
import Restaurants from './components/Restaurants';
import userinfo from "./Data/userinfo.json"
import offer from "./Data/offers.json";
import Restaurant from "./Data/restaurants.json";
import { useState } from 'react';

const filters={
1:  "Cost High to Low",
2:  "Cost Low to High",
3:  " Ratings",
4:  "Delivery Time",
5:  "Relevance"







}

function App() {
  const [filterby,setfilterby]=useState("");
  const [data,setdata]=useState(Restaurant)
  const updatefilter =(newFilter)=>{
    console.log(newFilter)
    switch(newFilter)
    {
      case "1":{
        setfilterby(1);
        data.sort((a,b)=>b.costfortwo-a.costfortwo);
        setdata([...data]);
        break;
      };
      case "2":{
        setfilterby(2);
       
        data.sort((a,b)=>a.costfortwo-b.costfortwo);
        setdata([...data]);
        break;
      };
      default:{
        setdata(Restaurant);
        break;
      }


  }
}
  return (
    <div className={App}>

<section class="near-you">
<Filters  filters={filters}currentfilterby={filterby} updatefilter={updatefilter} />
<Restaurants Restaurant={Restaurant}/>
</section>

      
      
    </div>
  );
}

export default App;
