import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Code2,
  Zap,
  BarChart3,
  ArrowRight,
  LineChart,
  Rocket,
  Globe,
  Layout,
  TestTube } from
'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { PixelBlast } from '../components/PixelBlast';
export function ServicesPage() {
  const services = [
  {
    title: 'Growth Dev Partner',
    description:
    'Dedicated monthly dev capacity for agencies with active client work. Priority turnaround and hands-on partnership.',
    price: 'Starting at $5,000/month',
    icon: Rocket
  },
  {
    title: 'Platform Build Sprint',
    description:
    'Full website builds and redesigns for Shopify, WordPress, Next.js, Framer, and Webflow. Delivered in 2-4 weeks.',
    price: 'Starting at $4,500',
    icon: Globe
  },
  {
    title: 'Landing Page Sprint',
    description:
    'Fast, conversion-focused landing page builds for campaigns and product launches. 48-72 hour delivery.',
    price: '$2,500 - $4,500',
    icon: Layout
  },
  {
    title: 'A/B Test Implementation',
    description:
    'CRO development support for rapid testing and iteration. We implement the variants, you run the tests.',
    price: '$3,500 - $6,000/month',
    icon: TestTube
  },
  {
    title: 'Complex Integration Work',
    description:
    'Custom APIs, third-party integrations, and technical functionality beyond standard templates.',
    price: 'Custom Pricing',
    icon: Code2
  },
  {
    title: 'Analytics & Support',
    description:
    'Tracking implementation, analytics setup, and continuous dev support for active client campaigns.',
    price: 'Custom Pricing',
    icon: LineChart
  }];

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
                Our Services
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

                Development Services for <br />
                High-Performance Agencies
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

              Scalable engineering solutions designed to fit seamlessly into
              your agency's delivery workflow.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 md:py-28 bg-cream-50 texture-grain-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection
            staggerChildren
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

            {services.map((item, idx) =>
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
                  seed={42 + idx} />

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
                  <p className="text-charcoal-800/65 leading-relaxed text-base mb-6 flex-grow">
                    {item.description}
                  </p>
                  <div className="pt-4 border-t border-gold-400/10">
                    <span className="text-sm font-bold text-gold-600 tracking-wide uppercase">
                      {item.price}
                    </span>
                  </div>
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

                Not sure what you need?
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

              Let's hop on a call to discuss your current bottlenecks and find
              the right engagement model for your agency.
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