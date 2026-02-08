import React, { useRef, Children } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  UserPlus,
  FileInput,
  Hammer,
  Rocket,
  Shield,
  Ghost,
  ArrowRight } from
'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { PixelBlast } from '../components/PixelBlast';
const timelineSteps = [
{
  step: '01',
  title: 'Onboarding',
  desc: 'We set up shared tools (ClickUp, Slack), access, and communication channels. You get full visibility into our workflow from day one.',
  accent: 'Same-day setup'
},
{
  step: '02',
  title: 'Request Submission',
  desc: 'Agencies submit tasks through our ClickUp workspace with clear briefs and assets. You can see exactly where everything stands in real-time.',
  accent: 'Async-first workflow'
},
{
  step: '03',
  title: 'Build & Review',
  desc: 'We develop using AI-optimized workflows for speed, then QA thoroughly before delivery. You review and provide feedback on a staging link.',
  accent: '48–72 hour turnaround'
},
{
  step: '04',
  title: 'Launch & Support',
  desc: 'We help deploy and handle post-launch fixes. Your clients launch on time, without issues. We stay on for support.',
  accent: 'Ongoing support included'
}];

function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.5']
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineLeft = 'calc(0.375rem + 0.625rem)';
  return (
    <div className="relative max-w-3xl mx-auto" ref={containerRef}>
      <AnimatedSection staggerChildren>
        <div className="relative">
          {/* Background track line */}
          <div
            className="absolute w-px bg-white/[0.08]"
            style={{
              left: lineLeft,
              top: '1.125rem',
              bottom: '0.625rem'
            }} />

          {/* Animated gold line */}
          <motion.div
            className="absolute w-px origin-top"
            style={{
              left: lineLeft,
              top: '1.125rem',
              bottom: '0.625rem',
              scaleY,
              background:
              'linear-gradient(to bottom, #D4B45A, #C4A44A, #D4B45A)'
            }} />


          {timelineSteps.map((item, idx) =>
          <motion.div
            key={idx}
            variants={{
              hidden: {
                opacity: 0,
                y: 15
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
            className={`relative pl-14 md:pl-20 ${idx < timelineSteps.length - 1 ? 'pb-16 md:pb-20' : 'pb-0'}`}>

              {/* Timeline node */}
              <div
              className="absolute top-0.5 rounded-full border-2 border-gold-400 bg-navy-900 z-10"
              style={{
                left: '0.375rem',
                width: '1.25rem',
                height: '1.25rem'
              }}>

                <div
                className="absolute rounded-full bg-gold-400"
                style={{
                  top: '50%',
                  left: '50%',
                  width: '6px',
                  height: '6px',
                  transform: 'translate(-50%, -50%)'
                }} />

              </div>

              <span className="text-gold-400/40 text-sm font-bold tracking-widest uppercase mb-3 block">
                Step {item.step}
              </span>

              <h3 className="text-2xl md:text-3xl font-serif font-medium text-white mb-4">
                {item.title}
              </h3>

              <p className="text-white/55 leading-relaxed text-base md:text-lg max-w-2xl mb-4">
                {item.desc}
              </p>

              <span className="inline-block text-gold-400 text-sm font-medium tracking-wide">
                ✦ {item.accent}
              </span>
            </motion.div>
          )}
        </div>
      </AnimatedSection>
    </div>);

}
export function HowItWorksPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative pt-40 md:pt-48 pb-20 px-4 texture-grain-light texture-linen-warm"
        style={{
          background:
          'radial-gradient(ellipse at 50% 40%, #FFFFFF 0%, #FAF8F4 35%, #F3EDE2 65%, #EDE4D3 100%)'
        }}>

        <div className="max-w-5xl mx-auto text-center relative z-10">
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
                The Process
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

                How We Work With Agencies
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

              Transparent, efficient, and designed to make you look good in
              front of your clients.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-28 md:py-36 bg-navy-900 overflow-hidden texture-grain texture-linen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Timeline />
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 md:py-28 bg-cream-50 texture-grain-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection
            staggerChildren
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {[
            {
              icon: Ghost,
              title: 'White-Label Friendly',
              desc: 'We operate as an invisible partner for your brand. Your clients never know we exist unless you want them to.'
            },
            {
              icon: Shield,
              title: 'Security & NDA',
              desc: 'NDA available on request. Access is limited and audited. We take client confidentiality seriously.'
            }].
            map((item, idx) =>
            <motion.div
              key={idx}
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
              className="relative rounded-2xl overflow-hidden border-0 shadow-[0_1px_3px_rgba(0,0,0,0.04)] group h-full flex flex-col"
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
                  seed={100 + idx} />

                </div>

                {/* Icon zone */}
                <div className="relative px-8 pt-10 pb-6 z-10">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border border-gold-400/25" />
                    <div className="absolute inset-1.5 rounded-full border border-gold-400/30" />
                    <div className="absolute inset-3 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <item.icon
                      className="w-5 h-5 text-gold-600"
                      strokeWidth={1.5} />

                    </div>
                  </div>
                </div>

                {/* Content zone */}
                <div className="relative z-10 px-8 pb-10 flex-grow flex flex-col">
                  <h3 className="text-xl font-serif font-medium text-charcoal-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-800/65 leading-relaxed text-base flex-grow">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 md:py-44 bg-navy-900 text-white px-4 overflow-hidden texture-grain texture-linen">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
            'radial-gradient(ellipse at 50% 50%, rgba(196,164,74,0.06) 0%, transparent 60%)'
          }} />


        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedSection staggerChildren className="text-center">
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

              <span className="inline-block px-4 py-1.5 rounded-full border border-gold-400/30 text-gold-400 text-xs font-bold tracking-widest uppercase">
                Ready to Start
              </span>
            </motion.div>

            <div className="overflow-hidden mb-6 pb-2">
              <motion.h2
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
                className="text-4xl md:text-6xl font-serif font-medium text-white leading-tight">

                Let's Build Faster
                <br />
                <span className="text-gold-400">Together</span>
              </motion.h2>
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
              className="mx-auto mb-8 origin-center"
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
              className="text-lg md:text-xl text-white/45 max-w-2xl mx-auto mb-12 leading-relaxed">

              Stop turning down clients because of capacity. Start shipping with
              a reliable engineering partner who moves at your pace.
            </motion.p>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20
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
              className="flex justify-center">

              <Link
                to="/book-a-call"
                className="btn-shine bg-gold-500 hover:bg-gold-600 text-white px-10 py-4 rounded-md text-lg font-medium transition-all hover:scale-105 shadow-lg hover:shadow-xl">

                Book a Strategy Call
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>);

}