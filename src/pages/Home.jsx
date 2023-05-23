import { useState, useEffect } from "react";
import GorevEkle from "../components/GorevEkle";
import GorevleriGoster from "../components/GorevleriGoster";

import Data from "../helper/Data";

const Home = () => {
  const [gorevler, setGorevler] = useState([]);

  useEffect(() => {
    setGorevler(Data);
  }, []);
  console.log(gorevler);

  const addGorev = (gorev) => {
    const yeniGorev = { ...gorevler, 
      id: gorevler.length + 1,
      text: gorev.text,
      day: gorev.day,
      bitti: gorev.bitti,
    };
    setGorevler([...gorevler, yeniGorev]);
  };


   const gorevDelete = (id) => {
     const guncelGorev = gorevler.filter((gorev) => gorev.id !== id);
     setGorevler(guncelGorev);
   };



  return (
    <div>
      <GorevEkle addGorev={addGorev} />

      <GorevleriGoster gorevler={gorevler} gorevDelete={gorevDelete} setGorevler={setGorevler} />
    </div>
  );
};

export default Home;
