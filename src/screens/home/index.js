import { useEffect } from 'react';
import Vegitable from '../../assests/images/homeImage2.jpg';
import CardImage1 from '../../assests/images/healthyRecipe.jpg';
import CardImage2 from '../../assests/images/cardImage2.jpg';
import CardImage3 from '../../assests/images/cardImage3.jpg';
import CardImage4 from '../../assests/images/cardImage4.jpg';
import LeafSign from '../../assests/images/leafSign.png';
import BlogImage1 from '../../assests/images/blogImage1.jpg';
import BlogImage2 from '../../assests/images/blogImage2.jpg';
import Facebook from '../../assests/svg/facebook.svg';
import Instagram from '../../assests/svg/instagram.svg';
import Twitter from '../../assests/svg/twitter.svg';
import '../../styles/home/home.scss';
import { getReviews } from '../../utalities/review';
import Review from '../../componenets/Home/Review';

const Home = () => {
  const apiLink = 'https://catfact.ninja/fact';

  useEffect(() => {
    // async function fetchAPI() {
    //   fetch(apiLink).then((res) => console.log('here api dataaa', res));
    // }
    // fetchAPI();
    const reviewData = getReviews(2);
    console.log('reviewsss', reviewData);
  }, []);
  return (
    <>
      <h1 className="mt-5"> LAUNCHED SOON</h1>

      <div
        class="bg-image1 mh-70"
        style={{ backgroundColor: 'rgba(0, 0, 255, 0.1)' }}
      ></div>
      <div>
        <div class="row">
          <div class="col text-center mt-5">
            <img
              className="img-fluid"
              // style={{height: '5em'}}
              src={LeafSign}
              alt="Card cap"
            />
            <h2 class="text-center">I’m a Dietitian and a Health Coach</h2>
            <h4 className="fst-italic" style={{ color: '#e29d78' }}>
              “It’s easy to start loving what you eat”
            </h4>
            <p style={{ color: '#8c8685' }}>
              {' '}
              I`m Dt. Garima a Health & Wellness coach, as well as a certified
              Dietitian. I dedicated all my time to creating a lasting
              difference in the lives of other people which is why I`m committed
              to making customized diet plans and motivating others, and my
              services are tailored to the individual needs and desires of my
              clients.
            </p>
            <button
              type="button"
              class="btn btn-lg"
              style={{ backgroundColor: '#e29d78' }}
            >
              Make An Appointment
            </button>
          </div>
          <div class="col">
            <img className="img-fluid w-100" alt="Responsive" src={Vegitable} />
            <div
              className="pe-5 text-center"
              style={{ backgroundColor: '#E29D78', height: '200px' }}
            >
              <h1>Want a Healthy Lifestyle</h1>
              <h3>Follow me !</h3>
              <div>
                <img className="px-2" src={Facebook} alt="Card cap" />
                <img className="px-2" src={Instagram} alt="Card cap" />
                <img className="px-2" src={Twitter} alt="Card cap" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-image2 mh-70"
        style={{ backgroundColor: 'rgba(0, 0, 255, 0.1)' }}
      >
        <p className="leaf-image">ddffffffffffffffffffffffffffffff</p>
      </div>
      <div class="text-center row">
        <div>
          <img
            className="img-fluid"
            style={{ width: '10em', textAlign: 'center' }}
            src={LeafSign}
            alt="Card cap"
          />
        </div>
        <h1>Services I Offer</h1>
        <h3 style={{ color: '#e29d78' }}>What Services Include</h3>
        <div class="row m-3">
          <div class="col-3 ">
            <div class="card " style={{ width: '18rem', height: '28rem' }}>
              <img class="card-img-right" src={CardImage1} alt="Cardcap" />
              <div class="card-body">
                <h4 style={{ color: 'green' }}>How To Be Healthy</h4>
                <h2>Get Healthy Recipes</h2>
                <p class="card-text">
                  Get healthy recipes along with your personalised meal pans.
                </p>
              </div>
            </div>
          </div>
          <div class="col-3 ">
            <div class="card " style={{ width: '18rem', height: '28rem' }}>
              <img
                class="card-img-right mh-67"
                src={CardImage2}
                alt="Card cap"
              />
              <div class="card-body">
                <h4 style={{ color: 'green' }}>Services I Offer</h4>
                <h2>Medical Diet And Weight Management</h2>
                <p class="card-text">
                  We prepare Medical diets and weight management diets.
                </p>
              </div>
            </div>
          </div>
          <div class="col-3 ">
            <div class="card " style={{ width: '18rem', height: '28rem' }}>
              <img class="card-img-right" src={CardImage3} alt="Card cap" />
              <div class="card-body">
                <h4 style={{ color: 'green' }}>Information and Tips</h4>
                <h2>Neutrition Guide</h2>
                <p class="card-text">
                  If you follow the helpful guide, a healthy diet can meet your
                  nutritional needs.
                </p>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card " style={{ width: '18rem', height: '28rem' }}>
              <img class="card-img-right" src={CardImage4} alt="Card cap" />
              <div class="card-body">
                <h4 style={{ color: 'green' }}>Services I Offer</h4>
                <h2>Consulatation and follow ups</h2>
                <p class="card-text">
                  Get Consultation and we will follow up you throughout your
                  Diet journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-image4"
        style={{ backgroundColor: 'rgba(0, 0, 255, 0.1)' }}
      >
        <h4 className="white-color">TAKE PART IN 30-DAY HEALTHY DIET</h4>
        <h1 className="white-color" style={{ fontSize: '7vw' }}>
          Opt for a Trasforming Challenge
        </h1>
        <h4 className="white-color">
          Whether you want to do self help or improve your overall health you
          need to make the healthy transition.
        </h4>
        <div className="col-xs-3 text-center p-5">
          <input
            type="email"
            className="input-lg"
            placeholder="Enter your email"
          />
          <span className="input-group-btn">
            <button class="btn btn-primary mb-2 " type="submit">
              Subscribe Now
            </button>
          </span>
        </div>
      </div>
      <div className="text-center">
        <img style={{ height: '5em' }} src={LeafSign} alt="Card cap" />
        <h1>Articles & Tips</h1>
        <h3 style={{ color: '#E29D78' }}>my blogs</h3>
        <div class="row">
          <div class="col-sm">
            <img src={BlogImage1} alt="Card cap" />
            <h1 className="fst-italic" style={{ color: '#E29D78' }}>
              More People Want Vegan Food in Cafe
            </h1>
          </div>
          <div class="col-sm">
            <img src={BlogImage2} alt="Card cap" />
            <h1 className="fst-italic" style={{ color: '#E29D78' }}>
              Why Do Vegetarians Live Longer?
            </h1>
          </div>
          <div class="col-sm"></div>
        </div>
      </div>
      <div className="text-center bg-image6">
        <img style={{ height: '5em' }} src={LeafSign} alt="Card cap" />
        <h1>What People Say</h1>
        <Review />
      </div>
    </>
  );
};
export default Home;
