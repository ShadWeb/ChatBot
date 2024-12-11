import logoChat from "../assets/images 1.svg"
import iconice from "../assets/Component 209.svg"
import iconkey from "../assets/First.svg"
import iconemail from "../assets/email.svg"
import iconga from "../assets/Google__G__logo.svg"
import iconfa from "../assets/Facebook-f_Logo-Blue-Logo.wine 1.svg"
import {  useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom"
function PeageLogin() {
    const initialValues = {email: "", password: "" };
    const [formVal,setFormval]=useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate =useNavigate();
    const inputsHanelcheng =(e)=>{
    const {name ,value}=e.target;
      setFormval({...formVal, [name]: value});
      
    }
  const formhandelsubmit = (e)=>{
    e.preventDefault();
    setFormErrors(validate(formVal));
    setIsSubmit(true);

  
  }


const validate =(values)=>{
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
}

useEffect(()=>{
  if (Object.keys(formErrors).length === 0 && isSubmit) {
   
    
   navigate('/app')
  }
})

  return (
    <form onSubmit={formhandelsubmit}>
    <div className="py-16 px-8 flex flex-col gap-10">
      <div>
        <img  src={logoChat} alt="" />
        <h1 className="font-semibold text-5xl">Login to your account</h1>
        <span className=" font-normal text-base">Don’t have an account?<a className="font-semibold text-base text-[#01CD98]" > Sign Up</a></span>
      </div>
        <div>
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-center border border-gray-300 rounded-lg p-2">  
                    <span className="text-gray-500 mr-2">  
                    
                        <img src={iconemail} alt="" />
                    </span>  
                    <input onChange={inputsHanelcheng} type="email" value={formVal.email}
                     name="email" placeholder="Email" className="flex-1 focus:outline-none" />  
                  
                </div>  
                <span className="text-red-700">{formErrors.email}</span>    
              </div>
              <div>
                    <div className="flex items-center border border-gray-300 rounded-lg p-2">  
                    <span className="text-gray-500 mr-2">  
                    
                        <img src={iconkey} alt="" />
                    </span>  
                    <input onChange={inputsHanelcheng} type="password" value={formVal.password} name="password" placeholder="Password" className="flex-1 focus:outline-none" />  
                    <button className="ml-2 text-teal-500">  
                        
                    <img src={iconice} alt="" />
                    </button>  
                </div>  
                <span className="text-red-700">{formErrors.password}</span>
                </div>
                <h2 className="font-semibold text-sm text-[#01CD98] text-right">
                Forgot Password?
                </h2>
            </div>
        </div>
        <div>
            <button className="w-full bg-[#01CD98] rounded-full py-[18px]">Login</button>
            <div className="flex items-center my-4">  
                <hr className="flex-1 border-gray-300"/>  
                <span className="px-4 text-gray-500">Or login with</span>  
                <hr className="flex-1 border-gray-300"/>  
            </div>  
            <div></div>
        </div>

        <div className="flex justify-between gap-4 ">
          <button className=" w-full flex items-center justify-center font-semibold text-base gap-2 py-[18px] rounded-full bg-[#6464641F] " ><img src={iconga} alt="" />Google</button>
          <button className="w-full justify-center flex items-center font-semibold text-base gap-2 py-[18px] rounded-full bg-[#6464641F] "><img src={iconfa} alt="" />Facebook</button>
        </div>


   
    </div>


       <div className="absolute bottom-6 w-full  flex items-center justify-center">
          <h2 className="font-normal text-sm text-[#616161] border-r border-[#616161] pr-4">Terms of use</h2>
          <h2 className="font-normal text-sm text-[#616161] pl-4">Privacy policy</h2>
       </div>



     </form>
  )
}

export default PeageLogin
