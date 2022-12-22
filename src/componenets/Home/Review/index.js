// import React from "react"
import { useEffect, useState } from "react"
import Dhruv from '../../../assests/images/review/dhruv.jpg'
import Ankita from '../../../assests/images/review/ankita.png'
import Lucky from '../../../assests/images/review/lucky.jpeg'
import { getReviews } from "../../../utalities/review"
import '../../../styles/home/home.scss';

const Review =()=>{
    const a=0
    const [reviwerId, setReviewerId] = useState(1)
    const [reviewerData, setReviewerData] = useState({})

    useEffect(()=>{
       setReviewerData(getReviews(reviwerId))

    },[])
    useEffect(()=>{
        setReviewerData(getReviews(reviwerId))
 
     },[reviwerId])
    console.log("dsdsdssdsd",reviewerData)
    return(
        <div class="text-center bg-image5">
         <div style={{maxHeight: '10em'}}>
            <p style={{color :'white'}}>{reviewerData.text}</p>
        </div>
        {/* <div className="px-5"> */}
        <img
        className="rounded-circle img-fluid"
        onClick={()=>setReviewerId(1)}
        src={Dhruv}
        alt="Card cap"
      />
      <img
       className="rounded-circle img-fluid"
       onClick={()=>setReviewerId(2)}
        src={Lucky}
        alt="Card cap"
      />
      <img
       className="rounded-circle img-fluid"
       onClick={()=>setReviewerId(3)}
        src={Ankita}
        alt="Card cap"
      /> 
      <h3 style={{color :'white'}}>{reviewerData.name}</h3>
      <h3 className="fst-italic">{reviewerData.designation}</h3>
      {/* </div> */}
      </div>
    )
}

export default Review