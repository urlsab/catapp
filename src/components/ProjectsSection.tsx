import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import resumeBuilderImage from '../../Assets/resumes builder website.png';
import orBenjiImage from '../../Assets/benji website.png';
import refaelLawImage from '../../Assets/refael website.png';
import atlizImage from '../../Assets/atliz website.png';
import campNetworkImage from '../../Assets/camps website.png';
import colorGameImage from '../../Assets/color game website.png';

interface Project {
  id: number;
  title: string;
  image: string;
  logo?: string;
  url?: string;
}

const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const touchStartY = useRef<number>(0);
  const touchEndY = useRef<number>(0);

  const projects: Project[] = [
    {
      id: 1,
      title: 'בונה קו"ח',
      image: resumeBuilderImage,
      url: 'https://resumes-builder.web.app'
    },
    {
      id: 2,
      title: 'אור בנג\'י פסיכותרפיה',
      image: orBenjiImage,
      url: 'https://orbenji.com'
    },
    {
      id: 3,
      title: 'משרד עו"ד רפאל סבג',
      image: refaelLawImage,
      url: 'https://refael-law.com'
    },
    {
      id: 4,
      title: 'אטליז למהדרין',
      image: atlizImage,
      url: 'https://atliz.co.il'
    },
    {
      id: 5,
      title: 'אתרי קמפינג',
      image: campNetworkImage,
      url: 'https://yelp--camp--project.herokuapp.com'
    },
    {
      id: 6,
      title: 'משחק צבעים',
      image: colorGameImage,
      url: 'https://color-game-react.vercel.app'
    }
  ];

  // Handle wheel scroll with circular navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling) return;

      if (e.deltaY > 0) {
        // Scroll down - next project (circular)
        setCurrentIndex((prev) => (prev + 1) % projects.length);
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 800);
      } else {
        // Scroll up - previous project (circular)
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY.current = e.changedTouches[0].clientY;
      
      if (isScrolling) return;

      const deltaY = touchStartY.current - touchEndY.current;
      const minSwipeDistance = 50;

      if (Math.abs(deltaY) > minSwipeDistance) {
        if (deltaY > 0) {
          // Swipe up - next project
          setCurrentIndex((prev) => (prev + 1) % projects.length);
        } else {
          // Swipe down - previous project
          setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
        }
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      container.addEventListener('touchstart', handleTouchStart, { passive: false });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchend', handleTouchEnd, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [currentIndex, isScrolling, projects.length]);

  const getCardPosition = (index: number) => {
    const total = projects.length;
    let diff = index - currentIndex;
    
    // Handle circular wrapping for smooth transitions
    if (diff > total / 2) {
      diff -= total;
    } else if (diff < -total / 2) {
      diff += total;
    }
    
    if (diff === 0) return { y: 0, scale: 1, opacity: 1, blur: 0, rotateX: 0, zIndex: 10 };
    if (diff === -1) return { y: -400, scale: 0.75, opacity: 0.4, blur: 4, rotateX: -20, zIndex: 5 };
    if (diff === 1) return { y: 400, scale: 0.75, opacity: 0.4, blur: 4, rotateX: 20, zIndex: 5 };
    if (diff < -1) return { y: -600, scale: 0.6, opacity: 0, blur: 8, rotateX: -30, zIndex: 1 };
    return { y: 600, scale: 0.6, opacity: 0, blur: 8, rotateX: 30, zIndex: 1 };
  };

  return (
    <div ref={containerRef} className="relative h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden pt-20">
      <div className="h-screen flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {projects.map((project, index) => {
              const position = getCardPosition(index);

              return (
                <motion.div
                  key={project.id}
                  className="absolute w-full h-full"
                  animate={{
                    y: position.y,
                    scale: position.scale,
                    opacity: position.opacity,
                    rotateX: position.rotateX,
                    filter: `blur(${position.blur}px)`,
                    zIndex: position.zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 30,
                    duration: 0.6
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Background Image */}
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ 
                      imageRendering: 'crisp-edges',
                      WebkitFontSmoothing: 'antialiased',
                      objectPosition: 'center',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />

                  {/* Project Title and Button - Left Side Centered Vertically */}
                  <motion.div 
                    className="absolute top-1/2 transform -translate-y-1/2 left-4 sm:left-6 md:left-8"
                    animate={{
                      opacity: index === currentIndex ? 1 : 0,
                      y: index === currentIndex ? 0 : 30
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex flex-col items-end" dir="rtl">
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-2xl mb-4 sm:mb-6">
                        {project.title}
                      </h3>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="text-sm sm:text-base">צפה באתר</span>
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Scroll Progress Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <div
                key={index}
                className="w-12 h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer"
                onClick={() => setCurrentIndex(index)}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: index === currentIndex ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
