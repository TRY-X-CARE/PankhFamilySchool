import AnimatedText from './AnimatedText';

const Mission = () => {
  return (
    <section id="mission" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6 w-fit">
              <span className="text-xs font-medium text-blue-600">Our Mission</span>
            </div>
            
            <AnimatedText
              text="Creating lasting change through compassion"
              className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-balance text-left mb-6"
            />
            
            <div className="space-y-4">
              <AnimatedText
                text="Pankh empowers communities through education, healthcare, skill development, and social welfare. We provide financial aid, vocational training, and healthcare services to promote self-reliance and economic independence. Our efforts also focus on environmental conservation and self-employment opportunities to help individuals build a better future."
                className="text-gray-600 text-left"
                delay={300}
              />
              
              <AnimatedText
                text="Since our inception in 2025, we have positively impacted over 10,000 lives across various regions. Our dedicated team and volunteers work tirelessly to ensure that every individual we reach has the resources and support they need to thrive."
                className="text-gray-600 text-left"
                delay={600}
              />
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-400/20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dgjsk6itb/image/upload/v1758302670/WhatsApp_Image_2025-05-28_at_3.42.44_PM_2_jly6xi.jpg')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;