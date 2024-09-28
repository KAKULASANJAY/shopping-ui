import React,{useState} from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Collection from '../components/Collection';
import Footer from '../components/Footer';
import Womencollection from '../components/Womencollection';

import { Gents,Ladies } from '../data';
const Mainpage = () => {
  const[gentsfashion,setgentsfashion]=useState(Gents)
  const[ladiesfashion,setladiesfashion]=useState(Ladies)
  console.log(Gents)
  console.log(Ladies)
  console.log(setgentsfashion)
  console.log(setladiesfashion)
  return (
    <div>
      <Header />
      <Banner />
      <Collection gentsfashion={gentsfashion} />
      <Womencollection ladiesfashion={ladiesfashion} />
      <Footer />
    </div>
  );
};

export default Mainpage;
