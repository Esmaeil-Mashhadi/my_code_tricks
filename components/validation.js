function validate (state){

    
    let message ={}
   
    

    if(!state.email){
        message.emailMessage = "waiting to fill email input"
        delete  state.emailStatus
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email)){
        message.emailMessage = "Good! but not valid yet"
        delete  state.emailStatus
       
    } else{
        state.emailStatus = "valid" 
    }

     
    if(!state.password){ 
        delete state.passwordStatus
        message.passwordMessage = "set a Password"
    }else if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/.test(state.password)){
        message.passwordMessage = "at Least one uppercase , one special Character and 8 character"
        delete state.passwordStatus

    } else {
         state.passwordStatus = "valid"
    }

    
    if(!state.confirmPassword){

        message.confirmMessage = "Confirm The Password"
        delete state.confirmStatus
        
    } else if(state.confirmPassword !== state.password){
        delete state.confirmStatus
        message.confirmMessage = "Not the same yet"
    } else{
        state.confirmStatus = "valid"
    }

    if(!state.check){
      message.check = "Please Accept our terms and conditions"
    } else{
        state.check = true
    }

  return { message}
   
}

export default validate