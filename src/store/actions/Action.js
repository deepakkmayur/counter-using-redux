
export const incAction=(data)=>{
   console.log(data,"in action INCREMANT");
   return {
      type:"INCREMANT",
      payload:data
   }
}  

export const decAction=(data)=>{
   console.log(data," in action DECREMENT");
  return {
      type:"DECREMENT",
      payload:data
  }
}
