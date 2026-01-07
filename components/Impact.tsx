
import React from 'react';

const Impact: React.FC = () => {
  const steps = [
    {
      title: "Hospitals",
      description: "We forge long-term bonds with local hospitals like the Cardiac Center in Addis Ababa to ensure year-round support.",
      icon: "🏥"
    },
    {
      title: "Targeted Sourcing",
      description: "We identify specific clinical unmet needs to send exactly what is required for life-saving surgeries.",
      icon: "📦"
    },
    {
      title: "Partnerships",
      description: "We are partnering with US.based 501c3 organization Beloved Mission. They have offered to match 50% of our funds raised up to $5,000. ",
      icon: "🤝"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Focus: Medical Supply Donation</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our Mission is our first project with the goal of sending a shipping container worth of medical supplies to the <strong>Children’s Heart Fund of Ethiopia (CHFE) at the Cardiac Center of Addis Ababa.</strong> In this process we hope to positively impact CHFE by strengthening their ability to deliver free cardiac care and surgeries more patients         </p>
        <p className="text-gray-600 mb-6 leading-relaxed">
           We want to raise funds to cover the transportation cost for a <strong>40ft shipping container</strong> worth of supplies and successfully manage our request to an accredited medical surplus recovery organization called SOS(1) based in Kentucky       </p>
          
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-full">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/belovedmission-f60a6.appspot.com/o/partners%2FIMG_0944.webp?alt=media&token=b9283e2e-aca1-4d62-a8d4-074502e7621a" 
            alt="Ethiopia Cardiac Center" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="text-center mt-32 mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">How We Operate</h2>
        <div className="w-20 h-1.5 bg-beyond-teal mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
          Our purpose is sustainable healthcare support through ethical distribution and local collaboration.
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div className="text-4xl mb-6">{step.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Impact;
