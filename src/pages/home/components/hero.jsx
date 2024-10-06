import computerImg from '../../../assets/images/computer.jpg'

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-heading">
          <div>Your Vision,</div>
          <div>Our Expertise</div>
        </div>
        <div className="hero-sub">
          Let&apos;s Build Your Website Together
        </div>
      </div>
      <img className='hero-image' src={ computerImg } alt="Photo by Sarah Dorweiler on Unsplash"/>
    </div>
  )
}