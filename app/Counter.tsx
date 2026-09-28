"use client";

import { useEffect, useState } from "react";

export default function CounterNum({ target }: { target: number }) {
  const [num, setNum] = useState(0);

useEffect(function(){
    function count(){
            setNum((val)=>{
        if(val + 3 >= target){
            return target
        }
        
      return  val +3
        
    })
setTimeout(count , 50)
    }
    count()
} , [target])
  return <span>{num}</span>;
}