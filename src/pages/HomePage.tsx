import React, { useEffect, useState, useRef, Children, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Zap,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Users,
  ShoppingBag,
  LineChart } from
'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { PixelBlast } from '../components/PixelBlast';
const timelineSteps = [
{
  step: '01',
  title: 'Partner Onboarding',
  desc: 'We set up a shared ClickUp workspace, align on your delivery standards, and establish communication channels. You get a dedicated dev partner who learns your brand voice.',
  accent: 'Same-day setup'
},
{
  step: '02',
  title: 'Submit Requests',
  desc: 'Drop tasks into the board with designs, specs, or even rough ideas. We scope, estimate, and confirm timelines — full transparency at every step.',
  accent: 'Async-first workflow'
},
{
  step: '03',
  title: 'We Build & QA',
  desc: 'Our team builds pixel-perfect, production-grade code with thorough cross-browser and device testing. Every deliverable goes through a multi-point QA checklist.',
  accent: '48–72 hour turnaround'
},
{
  step: '04',
  title: 'Launch & Iterate',
  desc: 'We deploy directly or hand off clean, documented code. Post-launch, we stay on standby for iterations, optimizations, and your next sprint.',
  accent: 'Ongoing support included'
}];

function HowItWorksTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.5']
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // Dot: left=0.375rem, width=1.25rem → center = 0.375 + 0.625 = 1rem
  const lineLeft = 'calc(0.375rem + 0.625rem)';
  return (
    <div className="relative" ref={containerRef}>
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
                  duration: 0.35,
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
const featuredProjects = [
{
  name: 'Knight Chews',
  category: 'Ecommerce',
  platform: 'Shopify Build',
  tagline: 'Conversion-focused redesign',
  description:
  'Full product architecture, custom Shopify functionality, optimized PDP flow, and mobile-first checkout experience.',
  url: 'getknightchews.com',
  image: "/image.png"

},
{
  name: 'A Peptide Company',
  category: 'Ecommerce',
  platform: 'Shopify Build',
  tagline: 'Premium brand experience',
  description:
  'Research-grade product catalog, educational content architecture, and trust-building design system.',
  url: 'apeptidecompany.com',
  image: "/image-1.png"

},
{
  name: 'Prospera Advisory',
  category: 'Professional Services',
  platform: 'Custom Build',
  tagline: 'Authority-driven web presence',
  description:
  'Strategic landing pages, conversion funnels, and performance-optimized site architecture for financial advisory.',
  url: 'paac.co',
  image: "/image-2.png"

}];

function FeaturedWorkShowcase() {
  return (
    <div className="space-y-28 md:space-y-40">
      {/* ── PROJECT 1: Knight Chews — Hero Treatment ── */}
      <AnimatedSection staggerChildren>
        <div>
          {/* Large image — full width with mobile overlay */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
                scale: 0.98
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1]
                }
              }
            }}
            className="relative mb-12 md:mb-16">

            <a
              href="https://getknightchews.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group">

              <div className="overflow-hidden rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border-[3px] border-white/80">
                <img
                  src="/image.png"
                  alt="Knight Chews website"
                  className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.02]" />

              </div>
              <div className="absolute inset-0 rounded-2xl bg-charcoal-900/0 group-hover:bg-charcoal-900/5 transition-colors duration-500" />
            </a>

            {/* Mobile overlay — bottom right, visible on all sizes */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                  x: 20
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  transition: {
                    duration: 0.45,
                    delay: 0.3,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }
              }}
              className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-4 md:-bottom-12 md:-right-8 w-[30%] sm:w-[28%] md:w-[22%] max-w-[200px] z-10">

              <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.25)] border-[3px] border-white/80 bg-white">
                <img
                  src="/image-3.png"
                  alt="Knight Chews mobile view"
                  className="w-full h-auto" />

              </div>
            </motion.div>
          </motion.div>

          {/* Text below — centered */}
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
                  duration: 0.45,
                  ease: [0.25, 0.1, 0.25, 1]
                }
              }
            }}
            className="max-w-2xl mx-auto text-center">

            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">
                Ecommerce
              </span>
              <span className="text-gold-400/40 text-xs">/</span>
              <span className="text-gold-600/60 text-xs font-bold tracking-[0.2em] uppercase">
                DTC
              </span>
            </div>

            <h3 className="text-5xl md:text-7xl font-serif font-medium text-charcoal-900 leading-[0.9] mb-8">
              Knight Chews
            </h3>

            {/* The stat — designed, elegant */}
            <div className="mb-8">
              <span className="block text-3xl md:text-4xl font-serif font-medium text-charcoal-900 leading-tight">
                +30%
              </span>
              <span className="block text-lg md:text-xl text-charcoal-800/50 font-medium tracking-wide mt-1">
                Conversion Lift
              </span>
            </div>

            <p className="text-base md:text-lg text-charcoal-800/55 leading-relaxed max-w-lg mx-auto mb-8">
              Full Shopify build focused on aggressive brand identity,
              high-impact PDP structure, and streamlined purchase flow.
            </p>

            <a
              href="https://getknightchews.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center text-charcoal-900/70 font-medium hover:text-gold-600 transition-colors text-sm tracking-wide">

              Visit site
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── PROJECT 2: A Peptide Company — Understated ── */}
      <AnimatedSection staggerChildren>
        <div>
          {/* Large image with mobile overlay */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
                scale: 0.98
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1]
                }
              }
            }}
            className="relative mb-12 md:mb-16">

            <a
              href="https://apeptidecompany.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group">

              <div className="overflow-hidden rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border-[3px] border-white/80">
                <img
                  src="/image-1.png"
                  alt="A Peptide Company website"
                  className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.02]" />

              </div>
              <div className="absolute inset-0 rounded-2xl bg-charcoal-900/0 group-hover:bg-charcoal-900/5 transition-colors duration-500" />
            </a>

            {/* Mobile overlay — bottom right, visible on all sizes */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                  x: 20
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  transition: {
                    duration: 0.45,
                    delay: 0.3,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }
              }}
              className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-4 md:-bottom-12 md:-right-8 w-[30%] sm:w-[28%] md:w-[22%] max-w-[200px] z-10">

              <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.25)] border-[3px] border-white/80 bg-white">
                <img
                  src="/image-4.png"
                  alt="A Peptide Company mobile view"
                  className="w-full h-auto" />

              </div>
            </motion.div>
          </motion.div>

          {/* Text below — centered, slightly smaller */}
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
                  duration: 0.45,
                  ease: [0.25, 0.1, 0.25, 1]
                }
              }
            }}
            className="max-w-2xl mx-auto text-center">

            <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
              Ecommerce
            </span>

            <h3 className="text-4xl md:text-6xl font-serif font-medium text-charcoal-900 leading-[0.9] mb-8">
              A Peptide Company
            </h3>

            <div className="mb-8">
              <span className="block text-2xl md:text-3xl font-serif font-medium text-charcoal-900 leading-tight">
                +10%
              </span>
              <span className="block text-base md:text-lg text-charcoal-800/45 font-medium tracking-wide mt-1">
                Conversion Increase
              </span>
            </div>

            <p className="text-base md:text-lg text-charcoal-800/55 leading-relaxed max-w-lg mx-auto mb-8">
              Premium research-grade ecommerce experience built for clarity,
              trust, and technical depth.
            </p>

            <a
              href="https://apeptidecompany.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center text-charcoal-900/70 font-medium hover:text-gold-600 transition-colors text-sm tracking-wide">

              Visit site
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>);

}
export function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  // Each bubble gets a different parallax speed (slower = more "sticky")
  const y1 = useTransform(heroScroll, [0, 1], [0, -80]);
  const y2 = useTransform(heroScroll, [0, 1], [0, -120]);
  const y3 = useTransform(heroScroll, [0, 1], [0, -60]);
  const y4 = useTransform(heroScroll, [0, 1], [0, -100]);
  const y5 = useTransform(heroScroll, [0, 1], [0, -90]);
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[100vh] flex items-center justify-center px-4 pt-32 pb-16 texture-grain-light texture-linen-warm"
        style={{
          background:
          'radial-gradient(ellipse at 50% 40%, #FFFFFF 0%, #FAF8F4 35%, #F3EDE2 65%, #EDE4D3 100%)'
        }}>

        {/* Decorative Floating Logo Bubbles — Parallax + Staggered Fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          style={{
            y: y1
          }}
          className="absolute top-[12%] left-[2%] md:top-[15%] md:left-[5%] w-9 h-9 md:w-16 md:h-16 bg-white rounded-full shadow-md md:shadow-lg flex items-center justify-center overflow-hidden p-1.5 md:p-3 animate-float-1 opacity-60 md:opacity-90">

          <img
            src="/Shopify-Logo-PNG_(1).png"
            alt="Shopify"
            className="w-full h-full object-contain" />

        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0, ease: 'easeOut' }}
          style={{
            y: y2
          }}
          className="absolute top-[10%] right-[15%] md:top-[10%] md:right-[30%] w-8 h-8 md:w-14 md:h-14 bg-white rounded-full shadow-md md:shadow-lg flex items-center justify-center overflow-hidden p-1.5 md:p-3 animate-float-2 opacity-60 md:opacity-90">

          <img
            src="/framer_logo_2.svg"
            alt="Framer"
            className="w-full h-full object-contain" />

        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4, ease: 'easeOut' }}
          style={{
            y: y3
          }}
          className="absolute top-[18%] right-[2%] md:top-[20%] md:right-[8%] bg-white rounded-full shadow-md md:shadow-lg flex items-center justify-center overflow-hidden p-1.5 md:p-3 w-[36px] h-[36px] md:w-[72px] md:h-[72px] animate-float-3 opacity-60 md:opacity-90">

          <img
            src="/webflow_logo.svg"
            alt="Webflow"
            className="w-full h-full object-contain" />

        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8, ease: 'easeOut' }}
          style={{
            y: y4
          }}
          className="absolute bottom-[8%] left-[3%] md:bottom-[30%] md:left-[8%] w-8 h-8 md:w-14 md:h-14 bg-white rounded-full shadow-md md:shadow-lg flex items-center justify-center overflow-hidden p-1 md:p-2.5 animate-float-4 opacity-60 md:opacity-90">

          <img
            src="/nextjs_logo.png"
            alt="Next.js"
            className="w-full h-full object-contain" />

        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2, ease: 'easeOut' }}
          style={{
            y: y5
          }}
          className="absolute bottom-[8%] right-[4%] md:bottom-[20%] md:right-[12%] w-9 h-9 md:w-16 md:h-16 bg-white rounded-full shadow-md md:shadow-lg flex items-center justify-center overflow-hidden p-1.5 md:p-3 animate-float-5 opacity-60 md:opacity-90">

          <img
            src="/wordpress_logo.png"
            alt="WordPress"
            className="w-full h-full object-contain" />

        </motion.div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-cream-200 rounded-full opacity-50 blur-xl"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <AnimatedSection staggerChildren>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20
                },
                visible: {
                  opacity: 1,
                  y: 0
                }
              }}
              className="mb-8 hidden md:flex justify-center">

              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400 text-gold-600 text-[10px] font-bold tracking-[0.12em] uppercase bg-cream-50">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold-500"></span>
                </span>
                Now Partnering With CRO &amp; Growth Agencies
              </span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20
                },
                visible: {
                  opacity: 1,
                  y: 0
                }
              }}
              className="text-5xl md:text-7xl font-serif font-medium text-charcoal-900 leading-tight mb-8">

              The Dev Partner That Moves at{' '}
              <span className="relative inline-block italic text-navy-900">
                Your Agency's
                <motion.svg
                  viewBox="0 0 240 12"
                  fill="none"
                  className="absolute left-0 w-full opacity-50"
                  style={{
                    bottom: '-18px'
                  }}
                  initial="hidden"
                  animate="visible">

                  <motion.path
                    d="M2 8C40 2 80 2 120 6C160 10 200 4 238 7"
                    stroke="#C4A44A"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    variants={{
                      hidden: {
                        pathLength: 0,
                        opacity: 0
                      },
                      visible: {
                        pathLength: 1,
                        opacity: 1,
                        transition: {
                          pathLength: {
                            duration: 1.2,
                            ease: 'easeInOut',
                            delay: 1
                          },
                          opacity: {
                            duration: 0.3,
                            delay: 0.8
                          }
                        }
                      }
                    }} />

                </motion.svg>
              </span>{' '}
              Pace
            </motion.h1>

            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20
                },
                visible: {
                  opacity: 1,
                  y: 0
                }
              }}
              className="text-lg md:text-xl text-charcoal-800/80 max-w-3xl mx-auto mb-12 leading-relaxed">

              Launch-ready websites, landing pages, and A/B tests in 48-72
              hours. Built for conversion, delivered with engineering precision
              and production-grade QA — invisible to your clients.
            </motion.p>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20
                },
                visible: {
                  opacity: 1,
                  y: 0
                }
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6">

              <Link
                to="/book-a-call"
                className="btn-shine bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-md text-lg font-medium transition-all hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto">

                Book a Strategy Call
              </Link>
              <Link
                to="/services"
                className="group flex items-center text-charcoal-900 font-medium hover:text-gold-600 transition-colors">

                See Our Services{' '}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who It's For */}
      <section
        className="relative py-40 md:py-52 texture-grain-light texture-linen-warm"
        style={{
          backgroundColor: '#F5F0E8'
        }}>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection
            staggerChildren
            className="text-center mb-12 md:mb-14">

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
                Why Agencies Choose Us
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
                      duration: 0.45,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }
                }}
                className="text-3xl md:text-5xl font-serif font-medium text-charcoal-900 leading-tight">

                Built for Agencies That Can't Afford Dev Bottlenecks
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
                    duration: 0.5,
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
                    duration: 0.45,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }
              }}
              className="text-lg md:text-xl text-charcoal-800/70 max-w-2xl mx-auto leading-relaxed">

              We embed directly into your delivery process so experiments and
              launches never stall.
            </motion.p>
          </AnimatedSection>

          <div className="relative">
            <AnimatedSection staggerChildren>
              {[
              {
                num: '01',
                title: 'Test Velocity',
                bold: '48–72 hour turnaround on A/B tests and landing pages.',
                body: 'No backlog. No internal engineering drain.'
              },
              {
                num: '02',
                title: 'White-Label Execution',
                bold: 'We build invisibly under your brand.',
                body: 'Your clients see results, not extra vendors. No awkward introductions, no scope confusion.'
              },
              {
                num: '03',
                title: 'Production-Grade Quality',
                bold: 'Clean, scalable code with proper QA.',
                body: "Ships confidently. Won't break when traffic spikes or clients dig into the source."
              }].
              map((item, idx) =>
              <motion.div
                key={idx}
                variants={{
                  hidden: {
                    opacity: 0
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15
                    }
                  }
                }}
                className="py-14 md:py-18">

                  <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-20">
                    <motion.span
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -50
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.45,
                          ease: [0.25, 0.1, 0.25, 1]
                        }
                      }
                    }}
                    className="text-8xl md:text-9xl font-serif text-gold-400/35 font-medium shrink-0 leading-none -mt-2">

                      {item.num}
                    </motion.span>
                    <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: 50
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.45,
                          ease: [0.25, 0.1, 0.25, 1]
                        }
                      }
                    }}>

                      <h3 className="text-2xl md:text-3xl font-serif font-medium text-charcoal-900 mb-5">
                        {item.title}
                      </h3>
                      <p className="text-lg md:text-xl text-charcoal-800/80 leading-relaxed">
                        <span className="text-charcoal-900 font-medium">
                          {item.bold}
                        </span>{' '}
                        {item.body}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="relative py-28 md:py-36 bg-cream-50 texture-grain-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection
            staggerChildren
            className="text-center mb-16 md:mb-20">

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

              <span className="inline-block px-4 py-1.5 rounded-full border border-gold-400/50 text-gold-600 text-xs font-bold tracking-widest uppercase bg-white/60">
                Our Services
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
                      duration: 0.45,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }
                }}
                className="text-3xl md:text-5xl font-serif font-medium text-charcoal-900">

                What We Handle
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
                    duration: 0.5,
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
                    duration: 0.45,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }
              }}
              className="text-lg md:text-xl text-charcoal-800/60 max-w-2xl mx-auto leading-relaxed">

              End-to-end development services that keep your agency shipping —
              without the overhead.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection
            staggerChildren
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {[
            {
              icon: Code2,
              title: 'Landing Pages & Websites',
              desc: 'Full builds and redesigns across Framer, Webflow, Next.js, Shopify, and WordPress. Pixel-perfect, conversion-ready, delivered fast.'
            },
            {
              icon: BarChart3,
              title: 'A/B Tests & Experiments',
              desc: 'Rapid experiment implementation so your CRO team can validate ideas without waiting on engineering queues.'
            },
            {
              icon: Zap,
              title: 'Integrations & Performance',
              desc: 'Complex custom functionality, third-party integrations, and Core Web Vitals optimization that keeps sites fast and reliable.'
            },
            {
              icon: LineChart,
              title: 'Analytics & Ongoing Support',
              desc: 'Tracking implementation, analytics setup, and continuous dev support for active client campaigns.'
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
                    duration: 0.35,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }
              }}
              className="relative rounded-2xl overflow-hidden border-0 shadow-[0_1px_3px_rgba(0,0,0,0.04)] group"
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
                  seed={42} />

                </div>

                {/* Icon zone */}
                <div className="relative px-10 md:px-12 pt-10 md:pt-12 pb-8">
                  {/* Icon with concentric rings */}
                  <div className="relative w-20 h-20 z-10">
                    <div className="absolute inset-0 rounded-full border border-gold-400/25" />
                    <div className="absolute inset-2 rounded-full border border-gold-400/30" />
                    <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <item.icon
                      className="w-5 h-5 text-gold-600"
                      strokeWidth={1.5} />

                    </div>
                  </div>
                </div>

                {/* Content zone */}
                <div className="relative z-10 px-10 md:px-12 pb-10 md:pb-12">
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-charcoal-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-800/65 leading-relaxed text-base md:text-lg">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="relative py-28 md:py-36 bg-navy-900 overflow-hidden texture-grain texture-linen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection
            staggerChildren
            className="text-center mb-20 md:mb-24">

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
                The Process
              </span>
            </motion.div>

            <div className="overflow-hidden mb-5">
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
                      duration: 0.45,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }
                }}
                className="text-3xl md:text-5xl font-serif font-medium text-white">

                How It Works
              </motion.h2>
            </div>

            {/* Animated decorative line under title */}
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
                    duration: 0.5,
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
                    duration: 0.45,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }
              }}
              className="text-lg text-white/50 max-w-xl mx-auto">

              From first call to first deploy — a seamless handoff that keeps
              your agency moving.
            </motion.p>
          </AnimatedSection>

          <HowItWorksTimeline />

          <AnimatedSection className="text-center mt-16 md:mt-20">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-gold-400 font-medium hover:text-gold-500 transition-colors text-lg">

              See the Full Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Recent Work */}
      <section className="relative py-28 md:py-36 bg-cream-50 texture-grain-light texture-linen-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection
            staggerChildren
            className="text-center mb-16 md:mb-20">

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

              <span className="inline-block px-4 py-1.5 rounded-full border border-gold-400/50 text-gold-600 text-xs font-bold tracking-widest uppercase bg-white/60">
                Selected Work
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
                      duration: 0.45,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }
                }}
                className="text-3xl md:text-5xl font-serif font-medium text-charcoal-900">

                Recent Work
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
                    duration: 0.5,
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
                    duration: 0.45,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }
              }}
              className="text-lg md:text-xl text-charcoal-800/60 max-w-2xl mx-auto leading-relaxed">

              Selected projects shipped for our agency partners.
            </motion.p>
          </AnimatedSection>

          <FeaturedWorkShowcase />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 md:py-44 bg-navy-900 text-white px-4 overflow-hidden texture-grain texture-linen">
        {/* Subtle gold radial glow */}
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
                      duration: 0.45,
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
                    duration: 0.5,
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
                    duration: 0.45,
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
                    duration: 0.35,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6">

              <Link
                to="/book-a-call"
                className="btn-shine bg-gold-500 hover:bg-gold-600 text-white px-10 py-4 rounded-md text-lg font-medium transition-all hover:scale-105 shadow-lg hover:shadow-xl">

                Book a Strategy Call
              </Link>
              <Link
                to="/services"
                className="group flex items-center text-white/60 font-medium hover:text-gold-400 transition-colors">

                View Services
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>);

}