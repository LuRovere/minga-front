import React from "react";
import Swal from "sweetalert2";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import donationActions from "../../store/donations/actions";
const { donation } = donationActions;

function Donations() {
  let { is_online, token } = useSelector((store) => store.auth);
  const donationsStore = useSelector((state) => state.mercadopago);
  console.log(donationsStore);

  const dispatch = useDispatch();

  let donation1 = 1000;
  let donation2 = 5000;
  let donation3 = 10000;
  let donation4 = useRef();

  const getDonations1 = () => {
    let token = localStorage.getItem("token");
    const data = {
      unit_price: donation1,
    };
    dispatch(donation({ data, token }));
  };
  const getDonations2 = () => {
    let token = localStorage.getItem("token");
    const data = {
      unit_price: donation2,
    };
    dispatch(donation({ data, token }));
  };
  const getDonations3 = () => {
    let token = localStorage.getItem("token");
    const data = {
      unit_price: donation3,
    };
    dispatch(donation({ data, token }));
  };
  const getDonations4 = () => {
    let token = localStorage.getItem("token");
    let price4 = parseInt(donation4.current.value)
    
    const data = {
      unit_price: price4,
    };
    console.log(data)
    dispatch(donation({ data, token }));
  };
  return (
    <>
      {" "}
      {is_online ? (
        <>
          <input type="checkbox" id="btn-modal" />
          <label htmlFor="btn-modal" className="lbl-modal">
            Donations ♡
          </label>
          <div className="modal">
            <div className="contenedor">
              <img
                className="gifDonations"
                src="https://donatepay.ru/uploads/donate/avatars/1659887974_730440.gif"
                alt="gifDonations"
              />
              <header>Donations ♡</header>

              <p className="textModal">How much do you want to donate?</p>
              <div className="allModalButtons">
                <button className="modalButton" onClick={getDonations1}>
                  $1000
                </button>
                <button className="modalButton" onClick={getDonations2}>
                  $5000
                </button>
                <button className="modalButton" onClick={getDonations3}>
                  $10.000
                </button>
              </div>
             
              <p className="inputP">
                other: <input  className="inputDonation" type="number" ref={donation4} />
              
              <button className="donateSubmit" onClick={getDonations4} type="submit">
              Donate
              </button>
              </p>
              <label className="buttonClose" htmlFor="btn-modal">
                Close
              </label>
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Donations;
