import React, { useEffect, useState } from 'react'
// we can also do this loader - in loader it will start fetching data when we hover over gitHub navigation
//                              and keep it in caches memory , it is more optimized then useEffect
//                              because useEffect is invoked when we click it (or call it)

function Github() {
      const [data,setData] = useState([])

      useEffect(()=>{
        fetch('https://api.github.com/users/nikhilrajmali003')
        .then((response)=>response.json())
        .then((data)=>{
             setData(data);

        })
      })
      let follower;
      let location;
       if(data.followers == 0){
        follower = "0 , 😂";
       }
       else {
        follower = data.followers;
       }
       if(data.location){
        location = data.location;
       }
       else{
           location = "no location provided";
       }

  return (
    <div className='h-[80vh] bg-gray-500 flex justify-center items-center gap-6'>
           <img src={data.avatar_url} width={300} />
           <div className='flex flex-col gap-2 font-serif'>

           <h1>Your Name is : {data.name}</h1>    <br />
            <h1>Your GitHub username is : {data.login}</h1>   <br />
            <h1>Your GitHub location is : {location}</h1>     <br />
            <h1>Your GitHub followers is : {follower}</h1>    <br />  
           </div>
    </div>   
  )
}

export default Github