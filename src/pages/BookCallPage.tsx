import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { PixelBlast } from '../components/PixelBlast';
export function BookCallPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative pt-40 md:pt-48 pb-20 px-4 texture-grain-light texture-linen-warm"
        style={{
          background:
          'radial-gradient(ellipse at 50% 40%, #FFFFFF 0%, #FAF8F4 35%, #F3EDE2 65%, #EDE4D3 100%)'
        }}>

        <div className="max-w-5xl mx-auto text-center relative z-10 mb-16">
          <AnimatedSection staggerChildren>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.8,
                  y: 10
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }
              }}
              className="mb-8 inline-block">

              <span className="inline-block px-4 py-1.5 rounded-full border border-gold-400/50 text-gold-600 text-xs font-bold tracking-widest uppercase bg-cream-50/60">
                Get Started
              </span>
            </motion.div>

            <div className="overflow-hidden mb-6 pb-2">
              <motion.h1
                variants={{
                  hidden: {
                    opacity: 0,
                    y: '100%'
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }
                }}
                className="text-4xl md:text-6xl font-serif font-medium text-charcoal-900 leading-tight">

                Let's Discuss Your <br />
                Dev Needs
              </motion.h1>
            </div>

            <motion.div
              variants={{
                hidden: {
                  scaleX: 0,
                  opacity: 0
                },
                visible: {
                  scaleX: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }
              }}
              className="mx-auto mb-7 origin-center"
              style={{
                height: '2px',
                width: '5rem',
                background:
                'linear-gradient(90deg, transparent, #C4A44A, transparent)'
              }} />


            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                  filter: 'blur(4px)'
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: {
                    duration: 0.7,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }
              }}
              className="text-lg md:text-xl text-charcoal-800/70 max-w-2xl mx-auto leading-relaxed">

              Find out if we're the right partner for your agency.
            </motion.p>
          </AnimatedSection>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Info */}
            <AnimatedSection className="lg:col-span-1">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }
                }}
                className="relative rounded-2xl overflow-hidden border-0 shadow-[0_1px_3px_rgba(0,0,0,0.04)] h-full"
                style={{
                  background:
                  'linear-gradient(to bottom, #FFFFFF 0%, #F7F2EA 50%, #EDE4D3 100%)'
                }}>

                {/* Stipple texture overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle, #C4A44A 0.7px, transparent 0.7px)`,
                    backgroundSize: '6px 6px',
                    opacity: 0.1,
                    maskImage:
                    'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.6) 100%)',
                    WebkitMaskImage:
                    'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.6) 100%)'
                  }} />


                {/* PixelBlast dither effect - top right */}
                <div
                  className="absolute top-0 right-0 w-[70%] h-[65%] pointer-events-none z-[1]"
                  style={{
                    maskImage:
                    'radial-gradient(ellipse at 100% 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.2) 60%, transparent 80%)',
                    WebkitMaskImage:
                    'radial-gradient(ellipse at 100% 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.2) 60%, transparent 80%)'
                  }}>

                  <PixelBlast
                    color="#C4A44A"
                    variant="circle"
                    pixelSize={5}
                    patternScale={2.5}
                    patternDensity={1.15}
                    speed={3.0}
                    edgeFade={0.05}
                    transparent={true}
                    seed={88} />

                </div>

                <div className="relative z-10 p-8">
                  <h3 className="text-xl font-bold mb-6 font-serif text-charcoal-900">
                    What We'll Cover:
                  </h3>
                  <ul className="space-y-6">
                    {[
                    "Your agency's workflow and current dev process",
                    'Specific bottlenecks causing client delays',
                    'Best service fit (retainer vs project-based)',
                    'Timeline expectations and capacity needs',
                    'Next steps and onboarding process'].
                    map((item, idx) =>
                    <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-gold-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-charcoal-800 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    )}
                  </ul>

                  <div className="mt-8 pt-8 border-t border-gold-400/20">
                    <p className="text-xs text-gold-600 font-bold uppercase tracking-widest mb-2">
                      Direct Contact
                    </p>
                    <a
                      href="mailto:tobi@johnriad.agency"
                      className="text-charcoal-900 font-medium hover:text-gold-600 transition-colors flex items-center group">

                      tobi@johnriad.agency
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Right Column - Calendly */}
            <AnimatedSection className="lg:col-span-2" delay={0.2}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-cream-200 h-[700px]">
                <iframe
                  src="https://cal.com/tobi-oriade/15min"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Book a call">
                </iframe>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>);

}