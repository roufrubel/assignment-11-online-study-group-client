import './Feature.css';
import img from '../assets/real_time_collaboration.png'
import img1 from '../assets/group_study_sessions.png'
import img2 from '../assets/resource_sharing.png'
import img3 from '../assets/progress_tracking.png'
import img4 from '../assets/discussion_forums.png'
import img5 from '../assets/mobile_accessibility.png'

const Feature = () => {
    return (
        <section id="features" className="features-section mt-16 ">
            <h2 className='uppercase md:text-lg lg:text-lg mb-2 font-medium text-indigo-500 text-center'>- Feature -</h2>
            <h2 className='uppercase md:text-lg lg:text-2xl mb-8 font-bold text-indigo-500 text-center'>Comprehensive Study Group Platform</h2>

  <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div className="feature-card">
        <img src={img} alt="" />
      <h3 className='font-bold text-indigo-500 text-lg py-2'>Real-time Collaboration</h3>
      <p>Work together in real-time with shared whiteboards, document collaboration, and instant messaging.</p>
    </div>
    <div className="feature-card">
    <img src={img1} alt="" />
      <h3 className='font-bold text-indigo-500 text-lg py-2'>Group Study Sessions</h3>
      <p>Organize and join virtual study sessions with your friends, complete with video and audio chat capabilities.</p>
    </div>
    <div className="feature-card">
    <img src={img2} alt="" />
      <h3 className='font-bold text-indigo-500 text-lg py-2'>Resource Sharing</h3>
      <p>Easily share notes, links, and other study materials with your group members in a centralized location.</p>
    </div>
    <div className="feature-card">
    <img src={img3} alt="" />
      <h3 className='font-bold text-indigo-500 text-lg py-2'>Progress Tracking</h3>
      <p>Keep track of your study progress with personalized dashboards, task lists, and progress reports.</p>
    </div>
    <div className="feature-card">
    <img src={img4} alt="" />
      <h3 className='font-bold text-indigo-500 text-lg py-2'>Discussion Forums</h3>
      <p>Engage in discussions with your study group on dedicated forums for deeper understanding and knowledge sharing.</p>
    </div>
    <div className="feature-card">
    <img src={img5} alt="" />
      <h3 className='font-bold text-indigo-500 text-lg py-2'>Mobile Accessibility</h3>
      <p>Access your study group and resources from anywhere with our mobile-friendly design and dedicated app.</p>
    </div>
  </div>
</section>
    );
};

export default Feature;