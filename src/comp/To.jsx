import React from 'react'
import { useState } from 'react'

export default function To() {
  const [activity,setActivity]=useState("");
  const [list,setlist]=useState([]);
  function addActivity(){
        // setlist([...list,activity])
        // console.log(list)
        setlist((list)=>{
          const updated=[...list,activity]
          console.log(updated)
          setActivity('');
          return updated;
        })
  }
  function removeActivity(i){
     const update=list.filter((elem,id)=>{
      return i!=id;
     })
     setlist(update);
  }
  function removeall(){
    setlist([]);
  }
  return (
    <>
    <div className=' bg-white justify-center  text-center p-5 rounded '>
      <div className='w-full text-2xl font-mono font-bold text-pink-700 '>TODO LIST</div>
      <input type='text' placeholder='ADD ACTIVITY' value={activity} onChange={(e)=>setActivity(e.target.value)} className='w-2/3 pt-1 pl-3 pb-1 inline-block rounded border-2 '/>
      <button onClick={addActivity} className='w-16 bg-lime-500 ml-0 pt-1 pb-1 rounded font-bold text-white'>ADD</button>
      <p className='text-xl  font-bold w-full text-left  text-pink-700 mt-1 mb-3'>Here is your List :{")"}</p>
      {list!=[]&& list.map((data,i)=> {
        return(
          < div className='flex  w-full bg-rose-200 rounded'>
          
            <div key={i} className='text-rose-700 text-left text-xl bg-pink-100 w-full flex justify-between rounded m-2 '>
                <div className='bg-black-700 p-2'>
                  {data}
                </div>
              <button onClick={()=>removeActivity(i)}className=' text-l  text-white  rounded  p-2 bg-red-500 font-bold'>remove(-)</button>
            </div>
          </div>
        
        )
      })}
      {list.length>=1 &&
      <button onClick={removeall} className='text-white p-3 mt-3 bg-rose-500   rounded font-bold'>Remove All</button>
      }
      </div>
    </>
   
  )
}
