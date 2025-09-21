import React from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const handleFade = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          entry.target.classList.remove('fade-out');
        } else {
          entry.target.classList.remove('fade-in');
          entry.target.classList.add('fade-out');
        }
      });
    };
    const observer = new IntersectionObserver(handleFade, {
      threshold: 0.1
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-white dark:bg-black pt-16 fade-in">
      <Contact />
    </div>
  );
};

export default ContactPage;