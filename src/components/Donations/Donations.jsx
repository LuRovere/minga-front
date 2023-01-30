import React from 'react'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from "react-redux";
import donationActions from '../../store/donations/actions'; 
const { donation } = donationActions;

const modal =()=>{
    Swal.fire({
        title: 'Donations ♡',
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonColor: '#d33',
        denyButtonText: `Close`,
        imageUrl: 'https://donatepay.ru/uploads/donate/avatars/1659887974_730440.gif',
        imageWidth: 340,
        imageHeight: 290,
        imageAlt: 'Custom image',
        html: '<div>How much do you want to donate?  </div><a href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=735132460-daf2eaea-c90b-4ebd-a62f-998e82b6d9e0"> $1000 - </a><a href=""> $5000 - </a><a href=""> $10.000 </a>'
      })}

function Donations() {
  let { is_online,token } = useSelector(store => store.auth)
  const donationsStore = useSelector((state) => state.mercadopago)
  console.log(donationsStore)
  
  const dispatch = useDispatch();

  let donation1 = 1000
  let donation2 = 5000
  let donation3 = 10000

  const getDonations1 = () => {
    let token = localStorage.getItem("token")
    const data = {
      unit_price: donation1
    }
    dispatch(donation({data,token}))
    
    }
    const getDonations2 = () => {
      let token = localStorage.getItem("token")
      const data = {
        unit_price: donation2
      }
      dispatch(donation({data,token}))
      
      }
      const getDonations3 = () => {
        let token = localStorage.getItem("token")
        const data = {
          unit_price: donation3
        }
        dispatch(donation({data,token}))
        
        }

  return (
    <> {is_online?(<> <button onClick={modal} className='donations'>Donate ♡ </button>
   
    <button onClick={getDonations1}>1000</button>
    <button onClick={getDonations2}>5000</button>
    <button onClick={getDonations3}>1000</button>
    </>
    ):(<div></div>)
    }
   
    </>
  )
}

export default Donations


