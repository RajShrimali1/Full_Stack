
window.addEventListener("keydown",(e)=>{
         let mydiv = document.getElementById("insert");
         mydiv.innerHTML = `
           <div id="tableDiv">
             <table>
               <tr>
                     <th>Key</th>
                     <th>KeyCode</th>
                     <th>Code</th>
               </tr>   
            
               <tr>
                   <td>${e.key==" "?"space":e.key}</td>
                   <td>${e.keyCode}</td>
                   <td>${e.code}</td>
               </tr>
             </table>
           </div> 
         `;
})