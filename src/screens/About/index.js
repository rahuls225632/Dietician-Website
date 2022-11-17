import GirlWithOrange from '../../assests/images/girlWithOrange.jpg';
import Vegitable from '../../assests/images/vegitable.jpg';

const About = () => {
  const a = 0;
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm">
            <img
              src={GirlWithOrange}
              className="img-fluid"
              alt="Responsive"
              style={{ maxHeight: '560px' }}
            />
          </div>
          <div className="col-sm">
            <h2>About Dt. Garima</h2>
            <h4 className="fst-italic" style={{ color: '#e29d78' }}>
              “If you Wait, All that happens is that you get Older”
            </h4>
            <p style={{ color: '#8c8685' }}>
              I`m Dt. Garima a Health & Wellness coach, as well as a certified
              Dietitian. I dedicated all my time to creating a lasting
              difference in the lives of other people which is why I`m committed
              to making customized diet plans and motivating others, and my
              services are tailored to the individual needs and desires of my
              clients.
            </p>
            <div class="embed-responsive embed-responsive-16by9 ratio ratio-16x9">
              <iframe
                title="video1"
                class="embed-responsive-item mw-200"
                src="https://www.youtube.com/embed/R06-Tj4rVrk?rel=0"
                allowfullscreen
                // allow="autoplay; encrypted-media"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="pe-5" style={{ backgroundColor: '#e68147' }}>
        <h1>
          Imagine, in only 3 months, you will create a healthy lifestyle that
          honours your own health and well being.
        </h1>
      </div>
      <div>
        <img
          className="img-fluid"
          alt="Responsive"
          style={{ maxWidth: '1200px' }}
          src={Vegitable}
        />
      </div>
    </>
  );
};

export default About;
