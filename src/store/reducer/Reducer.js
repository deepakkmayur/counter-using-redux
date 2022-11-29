 const reducer=(state=0,action)=>{
   switch(action.type){
      case "INCREMANT":
   console.log(action,"reducer action INCREMANT");

         return {
            ...state,payload:action.payload
         }


      case "DECREMENT":

   console.log(action,"reducer action DECREMENT");

       return {
          ...state,payload:action.payload
        }

         default :
         return state
      
   }
}

export default reducer