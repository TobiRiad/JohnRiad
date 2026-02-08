import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { PixelBlast } from '../components/PixelBlast';
export function PricingPage() {
  const tiers = [
  {
    title: 'Starter',
    price: '$5,000',
    period: '/mo',
    description: 'For agencies just starting to outsource dev.',
    features: [
    'Unlimited dev requests in queue',
    'One active request at a time',
    '48-72 hour turnaround per request',
    'Landing page builds',
    'A/B test implementation',
    'Shopify updates',
    'Direct ClickUp access']

  },
  {
    title: 'Growth',
    price: '$8,500',
    period: '/mo',
    description: 'For growing agencies with steady volume.',
    isPopular: true,
    features: [
    'Everything in Starter',
    'Two active requests at a time',
    'Priority queue placement',
    'Monthly strategy sync',
    'Direct Slack access',
    'Complex integrations',
    'Performance optimization']

  },
  {
    title: 'Scale',
    price: '$12,000',
    period: '/mo',
    description: 'For high-volume agencies needing speed.',
    features: [
    'Everything in Growth',
    'Three active requests at a time',
    '24-48 hour turnaround',
    'Dedicated dev contact',
    'Technical consultation calls',
    'Custom API development',
    'White-label client support']

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
                Pricing
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

                Transparent Pricing for <br />
                Agency Partners
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

              Predictable costs. No hidden fees. Scale your agency's capacity
              instantly.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-20 md:py-28 bg-cream-50 texture-grain-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection
            staggerChildren
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

            {tiers.map((tier, idx) =>
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
              className={`relative rounded-2xl overflow-hidden group h-full flex flex-col ${tier.isPopular ? 'border-2 border-gold-500 shadow-xl z-10 scale-105 md:-mt-4' : 'border-0 shadow-[0_1px_3px_rgba(0,0,0,0.04)]'}`}
              style={{
                background:
                'linear-gradient(to bottom, #FFFFFF 0%, #F7F2EA 50%, #EDE4D3 100%)'
              }}>

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
                  pixelSize={4}
                  patternScale={2.5}
                  patternDensity={1.15}
                  speed={3.0}
                  edgeFade={0.05}
                  transparent={true}
                  seed={42 + idx * 17} />
                </div>


                {tier.isPopular &&
              <div className="absolute top-0 inset-x-0 bg-gold-500 text-white text-center py-1.5 text-xs font-bold uppercase tracking-widest z-20">
                    Most Popular
                  </div>
              }

                <div
                className={`p-8 flex-grow flex flex-col relative z-10 ${tier.isPopular ? 'pt-12' : ''}`}>

                  <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-2">
                    {tier.title}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-charcoal-900">
                      {tier.price}
                    </span>
                    <span className="text-charcoal-600 ml-1">
                      {tier.period}
                    </span>
                  </div>
                  <p className="text-charcoal-800/60 text-sm mb-8">
                    {tier.description}
                  </p>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {tier.features.map((feature, fIdx) =>
                  <li
                    key={fIdx}
                    className="flex items-start text-sm text-charcoal-800">

                        <Check className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                  )}
                  </ul>

                  <Link
                  to="/book-a-call"
                  className={`w-full block text-center py-3 rounded-md font-medium transition-all shadow-md ${tier.isPopular ? 'bg-gold-500 text-white hover:bg-gold-600 hover:shadow-lg' : 'bg-white border border-gold-400/30 text-gold-600 hover:bg-gold-50'}`}>

                    Book a Strategy Call
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Project Based Pricing */}
      <section className="relative py-20 md:py-28 bg-navy-900 text-white overflow-hidden texture-grain texture-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 text-white">
              Project-Based Pricing
            </h2>
            <div
              className="mx-auto mb-7 origin-center"
              style={{
                height: '2px',
                width: '5rem',
                background:
                'linear-gradient(90deg, transparent, #C4A44A, transparent)'
              }} />

          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              title: 'Landing Page',
              price: '$2.5k - $4.5k',
              desc: '48-72 hour delivery'
            },
            {
              title: 'Full Website Build',
              price: 'From $4,500',
              desc: '2-4 week timeline'
            },
            {
              title: 'A/B Test Implementation',
              price: '$3.5k - $6k',
              desc: 'Monthly project basis'
            }].
            map((item, idx) =>
            <div
              key={idx}
              className="bg-navy-800/50 border border-white/10 p-8 rounded-xl text-center backdrop-blur-sm">

                <h3 className="font-bold text-lg mb-3 text-gold-400">
                  {item.title}
                </h3>
                <p className="text-3xl font-serif text-white mb-2">
                  {item.price}
                </p>
                <p className="text-sm text-white/50">{item.desc}</p>
              </div>
            )}
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            <AnimatedSection className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 font-serif text-gold-400">
                What Affects Pricing?
              </h3>
              <ul className="space-y-3">
                {[
                'Platform complexity and custom requirements',
                'Timeline constraints (rush fees)',
                'Number of templates, pages, or components',
                'Third-party integrations and APIs',
                'Analytics and tracking complexity'].
                map((item, idx) =>
                <li
                  key={idx}
                  className="flex items-start text-sm text-white/80">

                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                )}
              </ul>
            </AnimatedSection>

            <AnimatedSection className="bg-gold-500/10 border border-gold-500/20 p-8 rounded-xl backdrop-blur-sm flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-4 font-serif text-gold-400">
                30-Day Pilot Guarantee
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Start with a 30-day pilot. If we don't meet our turnaround or
                quality commitments, walk away — no questions asked. We earn
                your business every month.
              </p>
              <Link
                to="/book-a-call"
                className="text-white underline decoration-gold-500 underline-offset-4 hover:text-gold-400 transition-colors">

                Start your pilot today →
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 md:py-44 bg-cream-50 texture-grain-light">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <AnimatedSection staggerChildren>
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
              className="text-4xl md:text-6xl font-serif font-medium text-charcoal-900 leading-tight mb-8">

              Ready to Scale?
            </motion.h2>
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
              }}>

              <Link
                to="/book-a-call"
                className="btn-shine bg-gold-500 hover:bg-gold-600 text-white px-10 py-4 rounded-md text-lg font-medium transition-all hover:scale-105 shadow-lg hover:shadow-xl inline-block">

                Book a Strategy Call
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>);

}