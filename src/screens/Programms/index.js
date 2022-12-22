
import Image1 from '../../assests/images/programms/image1.jpg';
import Image2 from '../../assests/images/programms/image2.jpg';
import Image3 from '../../assests/images/programms/image3.jpg';
import Image4 from '../../assests/images/programms/image4.jpg';
import LeafSign from '../../assests/images/leafSign.png';
import '../../styles/home/programs.scss';



const Programms =()=>{
    const a=0
    return(
      <>
<div className="row">
  <h1>sdadad</h1>
  <h1>sdadad</h1>
    <div className="col-sm">

    <div className="row ">
    <div className="col-6 mb-3"><img src={Image1} alt='' className='img-fluid'></img></div>
    <div className="col-6"> <img src={Image2} alt='' className='img-fluid'></img></div>  
  </div>
  <div className="row">
    <div className="col-6"> <img src={Image3} alt='' className='img-fluid'></img></div>
    <div className="col-6"> <img src={Image4} alt='' className='img-fluid'></img></div>
    </div>
    </div>
    <div className="col-sm ">
    <div class="text-center row h-100 d-flex justify-content-center align-items-center">
      <div>
        <div>
      <img
          className='img-fluid'
style={{width: '10em', textAlign : 'center'}}
                src={LeafSign}
                alt="Card cap"
              />
              </div>
        <h1>Programms I Offered</h1>
        <h3 style={{ color: '#e29d78' }}>Health Transitioning Diet</h3>
        <p style={{ color: '#8c8685' }}>In our Health Coaching Programs, we plan your customized meals by considering your likes and dislikes, looking your overall health journey & make them correct with our best knowledge and guidance.
Healthy Lifestyle is a practice, its not a one week task, so choose wisely and bring your best levels by achieving your health goals with us !</p>
    </div>
    </div>
    </div>
  </div>
  <div className="pe-5" style={{ backgroundColor: '#E29D78' }}>
        <h1>
        Schedule your Consultation Today & Join our Program
        </h1>
      </div>
      <div class="row">
    <div class="col">
      <h1>coming soon </h1>
      <h1>coming soon </h1>
      <h1>coming soon </h1>
    </div>
    <div class="bg-image1 col">
      </div>
  </div>
  </>
    )
}

export default Programms