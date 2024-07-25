const Faq = () => {
  return (
    <section className="mt-16 mb-16 flex flex-col justify-center items-center">
    <h2 className='uppercase md:text-lg lg:text-2xl mb-8 font-bold text-indigo-500 text-center'>Faq _</h2>
      <div className="join join-vertical w-full md:w-2/3 lg:w-2/3 ">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium text-indigo-500">
          1. How can I collaborate in real-time with my study group?
          </div>
          <div className="collapse-content">
            <p>Answer: Our platform offers real-time collaboration tools such as shared whiteboards, document collaboration, and instant messaging. These features allow you to work together seamlessly, making group projects and study sessions more productive and interactive.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium text-indigo-500">
          2. What are group study sessions and how do they work?
          </div>
          <div className="collapse-content">
            <p>Answer: Group study sessions are virtual meetings where you can study with your friends using video and audio chat capabilities. You can schedule these sessions, share screens, and work together on assignments in a collaborative environment, just like you would in a physical study group.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium text-indigo-500">
          3. Can I share resources with my study group?
          </div>
          <div className="collapse-content">
            <p>Answer: Yes, you can easily share notes, links, and other study materials with your group members. Our platform provides a centralized location for all shared resources, making it easy to access and organize study materials for your entire group.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium text-indigo-500">
          4. How can I track my study progress?
          </div>
          <div className="collapse-content">
            <p>Answer: Our platform includes progress tracking tools that provide personalized dashboards, task lists, and progress reports. These features help you monitor your study habits, track your achievements, and stay on top of your academic goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
