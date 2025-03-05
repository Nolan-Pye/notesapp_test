import { Link } from 'react-router-dom'
import eaglesImage from './assets/eagles.png'  // Import the image

function SecondPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Image at the top */}
      <img src={eaglesImage} alt="Eagles" style={{ maxWidth: '50%', height: 'auto', marginBottom: '20px' }} />
      
      <h1>The Eagles have won the Super Bowl! 🎉🏆</h1>
      <Link to="/">
        <button className="nav-button">Go Back</button>
      </Link>
    </div>
  )
}

export default SecondPage

