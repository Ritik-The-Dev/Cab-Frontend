import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'animate.css/animate.min.css'; 
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


function Cab() {
  
  const[PickupLocation,setPickupLocation] = useState("")
  const[DropoffLocation,setDropoffLocation] = useState("")
  const[Loading,setLoading] = useState(false)
  const[PhoneNumber,setPhoneNumber] = useState("")
  const[Date,setDate] = useState("")
  const[error,setError] = useState(false)
  const[Time,setTime] = useState("")
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  toast("Sending Request")
  if(!PickupLocation,!DropoffLocation,!Date,!Time,!PhoneNumber){
    toast("All Fields are Required")
  }


  try {
    const response = await fetch('https://cabbooking-3jn8.onrender.com/api/v1/cab-booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Set the content type header to JSON
      },
      body: JSON.stringify({PickupLocation,DropoffLocation,Time,Date,PhoneNumber})
    });
    
    const data = await response.json()
    if (data.success === true) {
        setDropoffLocation("")
        setPickupLocation("")
        setDate("")
        setTime("")
        toast("Cab Booked Successfully")
        navigate("/CallCabDriver");
    } else {
      const text = await response.text();
      setError(true)
      console.error('Internal Server Error', text);
    }
  } catch (error) {
    setError(true)
    console.error('Error:', error);
  }
};
const BackEndLoading = async () => {
  try {
    const response = await fetch('https://cabbooking-3jn8.onrender.com');
    if (response.ok) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  } catch (error) {
    setLoading(true);
    console.error('Error checking backend status:', error);
  }
};

useEffect(() => {
  BackEndLoading();
}, []);

  return (
    <div>
        <header>
        <h1 className={`text-4xl mb-5  animate__animated animate__zoomIn`}>Your Taxi Service</h1>
        </header>
        <ToastContainer
        className="toast-container animate__animated animate__fadeInUp"
        closeButton={true}
        onClose={() => {
          document.querySelector('.toast-container').classList.remove('animate__fadeInUp');
          document.querySelector('.toast-container').classList.add('animate__fadeOut');
        }}
      />
    <section className="bg-gray-200 p-8 animate-drop duration-1000 ease-out animation-drop">
    {Loading ? (
        <h2 className='text-4xl mb-5'>Backend Loading...</h2>
      ) : (
        <h2 className='text-4xl mb-5'>Book a Taxi</h2>
      )}
        <form>
        <label for="PhoneNumber">Phone Number:</label>
            <input type="number" id="PhoneNumber" name="PhoneNumber" required value={PhoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
            
            <label for="pickupLocation">Pickup Location:</label>
            <input type="text" id="pickupLocation" name="PickupLocation" required value={PickupLocation} onChange={(e)=>setPickupLocation(e.target.value)}/>

            <label for="dropoffLocation">Dropoff Location:</label>
            <input type="text" id="dropoffLocation" name="DropoffLocation" required value={DropoffLocation} onChange={(e)=>setDropoffLocation(e.target.value)}/>

            <label for="date">Date:</label>
            <input type="date" id="date" name="Date" required value={Date} onChange={(e)=>setDate(e.target.value)}/>

            <label for="time">Time:</label>
            <input type="time" id="time" name="Time" required value={Time} onChange={(e)=>setTime(e.target.value)}/>

            <button
            type="submit"
            onClick={handleSubmit}
            className={`button animate__animated animate__shakeX ${error ? 'animate__error' : ''}`}
          >Book Now</button>
        </form>
    </section>
    </div>
  )
}

export default Cab
