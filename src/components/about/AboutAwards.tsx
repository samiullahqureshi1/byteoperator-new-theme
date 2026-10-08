'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSound } from '@/components/layout/SoundProvider';
import { awardsList } from '@/data/testimonials';

const introWords = [
  { text: 'While' },
  { text: 'our' },
  { text: 'focus' },
  { text: 'is' },
  { text: 'on' },
  { text: 'client' },
  { text: 'success,' },
  { text: 'we’re' },
  { text: 'proud' },
  { text: 'to' },
  { text: 'have' },
  { text: 'our' },
  { text: 'work' },
  { text: 'continually' },
  { text: 'recognised', accent: true },
  { text: 'by' },
  { text: 'the' },
  { text: 'best' },
  { text: 'of' },
  { text: 'the' },
  { text: 'best.' },
];

export const AboutAwards: React.FC = () => {
  const [showAllAwards, setShowAllAwards] = useState(false);
  const { playHover, playClick } = useSound();

  return (
    <section className="relative w-full pt-20 sm:pt-28 md:pt-36 pb-24 sm:pb-32 md:pb-40 bg-[#dfebf2] overflow-hidden select-none">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        {/* Intro Headline matching media_1791456543276.png */}
        <div className="max-w-[1360px]">
          <h2
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.65rem] font-medium leading-[1.12] tracking-[-0.035em] text-[#070035]"
            style={{
              fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
              fontWeight: 500,
              lineHeight: 1.12,
            }}
          >
            {introWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.016,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className={`inline-block mr-[0.25em] transition-colors duration-200 ${
                  word.accent ? 'text-[#928ae7] hover:text-[#7f76e3]' : 'text-[#070035]'
                }`}
              >
                {word.text}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* 5 Award Logo Cards in a single row matching media_1791456543276.png */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4 md:gap-5 mt-16 sm:mt-20 md:mt-24 mb-10 sm:mb-12">
          {/* Card 1: AWA (Australian Web Awards) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: 0.02, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03 }}
            onMouseEnter={playHover}
            className="relative aspect-square rounded-[24px] sm:rounded-[30px] md:rounded-[34px] bg-white/45 hover:bg-white/80 border border-white/60 shadow-[0_8px_30px_rgba(7,0,53,0.03)] hover:shadow-[0_16px_40px_rgba(7,0,53,0.08)] flex items-center justify-center p-6 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-full flex items-center justify-center text-[#070035] group-hover:scale-105 transition-transform duration-300">
              <svg
                width="113"
                height="40"
                viewBox="0 0 113 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[52%] max-w-[130px] h-auto"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.1211 0L40.0654 29.5977L53.1885 0H59.7217L72.9023 29.5977L84.8477 0H92.085L93.877 0.00292969L113.001 40H105.646L102.469 33.314H82.3262L85.4443 26.8003H99.3486L89.835 5.56201L75.9033 39.9971H70.1943L56.4844 9.25732L42.7734 39.9971H37.0654L23.1387 5.5752L13.6309 26.7993H27.5371L30.6562 33.312H10.5127L7.33496 39.998H0V39.9561L19.1045 0.000976562L20.8828 0H28.1211Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </motion.div>

          {/* Card 2: Good Design Awards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03 }}
            onMouseEnter={playHover}
            className="relative aspect-square rounded-[24px] sm:rounded-[30px] md:rounded-[34px] bg-white/45 hover:bg-white/80 border border-white/60 shadow-[0_8px_30px_rgba(7,0,53,0.03)] hover:shadow-[0_16px_40px_rgba(7,0,53,0.08)] flex items-center justify-center p-6 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-full flex items-center justify-center text-[#070035] group-hover:scale-105 transition-transform duration-300">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[32%] max-w-[70px] h-auto"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M52.1738 9.52208L23.4395 37.8263H23.4258H22.5127L14.2178 29.6349H0V0.000111224H30.0781C34.2168 -0.0111192 38.3145 0.828236 42.1152 2.46642C45.916 4.10412 49.3398 6.50597 52.1738 9.52208ZM23.2695 52.4737L57.3525 18.339C59.2988 22.8859 60.0869 27.8448 59.6455 32.7711C59.2041 37.6979 57.5479 42.4376 54.8242 46.5665C52.1006 50.6949 48.3945 54.0836 44.04 56.4278C39.6846 58.7726 34.8154 59.9996 29.8691 59.9996H0V30.0782L22.3564 52.4737H23.2695Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </motion.div>

          {/* Card 3: The Webby Awards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03 }}
            onMouseEnter={playHover}
            className="relative aspect-square rounded-[24px] sm:rounded-[30px] md:rounded-[34px] bg-white/45 hover:bg-white/80 border border-white/60 shadow-[0_8px_30px_rgba(7,0,53,0.03)] hover:shadow-[0_16px_40px_rgba(7,0,53,0.08)] flex items-center justify-center p-6 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-full flex items-center justify-center text-[#070035] group-hover:scale-105 transition-transform duration-300">
              <svg
                width="104"
                height="59"
                viewBox="0 0 104 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[46%] max-w-[110px] h-auto"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.5059 0V58.7188H23.9043C24.0137 58.5781 24.0938 58.4375 24.1484 58.2905L24.1914 58.2051V47.2808C24.1914 45.9106 21.8301 44.7422 18.2422 44.0635C17.8975 43.9888 17.5723 43.9229 17.2793 43.8667C16.9219 43.7979 16.6123 43.7427 16.374 43.7026C16.1045 43.6572 15.9248 43.6304 15.8691 43.623L15.8818 43.6216C16.3867 43.5469 23.7275 42.4634 23.7275 39.5986C23.7275 36.9438 15.1309 36.271 15.1309 36.271C15.1309 36.271 23.6113 34.8643 23.6113 32.4116C23.6113 30.4663 14.582 29.0229 14.582 29.0229C14.582 29.0229 23.3975 27.7998 23.3975 25.1392C23.3975 22.876 15.2227 21.6709 15.2227 21.6709C15.2227 21.6709 23.1602 20.8389 23.1602 17.9521C23.1602 15.7319 14.7949 14.3125 14.7949 14.3125C14.7949 14.3125 23.0869 13.291 23.0869 10.7529C23.0869 7.44971 12.1289 6.68555 12.1289 6.68555L10.4209 8.80762C10.4209 8.80762 17.9189 9.49268 17.9189 10.6733C17.9189 11.7378 2.96484 12.814 0 13.022V0H30.5059ZM17.6748 39.6714C17.6748 41.1025 2.7334 42.3809 0 42.583V37.9404C0.670898 37.9834 1.81348 38.0244 3.20605 38.0742H3.21484C8.59082 38.2671 17.6748 38.5933 17.6748 39.6714ZM0 35.3901C2.84277 35.1943 17.6748 34.0444 17.6748 32.644C17.6748 31.5654 8.53223 30.959 3.10938 30.5991L3.07715 30.5977H3.06543L2.10059 30.5337C1.23242 30.4761 0.508789 30.4253 0 30.3809V35.3901ZM17.6748 17.9395C17.6748 19.3276 3.70312 20.3188 0 20.5571V15.5967C0.663086 15.6582 1.7334 15.7334 3.02832 15.8242C8.41309 16.2007 17.6748 16.8496 17.6748 17.9395ZM0 27.7876C3.20312 27.5918 17.8213 26.6318 17.8213 25.2861C17.8213 24.3975 11.3223 24.0181 5.9668 23.7051C3.47266 23.5596 1.22656 23.4287 0 23.2676V27.7876Z"
                  fill="currentColor"
                />
                <path
                  d="M41.1736 48.186H41.9302L46.8477 58.8471H45.9935L44.6513 55.8867H38.4098L37.0676 58.8471H36.25L41.1675 48.186H41.1736ZM44.3218 55.171L41.5458 49.0423L38.7515 55.171H44.3218ZM46.5365 48.2594H47.409L50.728 57.6788L53.8213 48.2288H54.4314L57.5186 57.6849L60.8376 48.2594H61.6551L57.8236 58.9266H57.1891L54.0958 49.7273L51.0025 58.9266H50.3619L46.5365 48.2594ZM66.2554 48.186H67.0119L71.9295 58.8471H71.0753L69.733 55.8867H63.4977L62.1554 58.8471H61.3379L66.2554 48.186ZM69.3975 55.171L66.6215 49.0423L63.8271 55.171H69.3975ZM73.4852 48.2594H77.9269C79.2203 48.2594 80.2636 48.6692 80.8981 49.2992C81.4106 49.8252 81.6974 50.5347 81.6974 51.2687V51.2993C81.6974 53.0731 80.3856 54.0823 78.6041 54.327L82.0878 58.8532H81.0934L77.7316 54.4615H74.2723V58.8471H73.4913V48.2594H73.4852ZM77.8354 53.752C79.6047 53.752 80.9103 52.859 80.9103 51.3299V51.2993C80.9103 49.8741 79.7938 48.9872 77.8781 48.9872H74.2784V53.752H77.8354ZM84.0219 48.2594H87.5423C90.8613 48.2594 93.1553 50.5408 93.1553 53.5196V53.5502C93.1553 56.535 90.8613 58.8471 87.5423 58.8471H84.0219V48.2594ZM87.5423 58.1253C90.483 58.1253 92.3378 56.1069 92.3378 53.5869V53.5563C92.3378 51.0424 90.483 48.9872 87.5423 48.9872H84.8089V58.1192H87.5423V58.1253ZM94.6196 57.3057L95.1321 56.7124C96.2913 57.7889 97.3651 58.2905 98.9148 58.2905C100.464 58.2905 101.593 57.3974 101.593 56.1864V56.1558C101.593 55.0365 101.001 54.382 98.6036 53.8988C96.0655 53.385 95.0406 52.5226 95.0406 50.92V50.8895C95.0406 49.3175 96.4743 48.1064 98.4389 48.1064C99.9764 48.1064 100.989 48.5346 102.057 49.3909L101.563 50.0148C100.702 49.2258 99.5737 48.7976 98.4084 48.816C96.8526 48.816 95.8276 49.709 95.8276 50.8161V50.8466C95.8276 51.966 96.4011 52.6449 98.9087 53.1587C101.349 53.6603 102.374 54.5349 102.374 56.0824V56.113C102.374 57.8256 100.91 59 98.8782 59C97.1821 59 95.8886 58.4434 94.6196 57.3057Z"
                  fill="currentColor"
                />
                <path
                  d="M38.9546 16.2337H35.2695V15.5059H43.4206V16.2337H39.7356V26.0997H38.9546V16.2337ZM45.1229 15.5059H45.9099V20.4113H52.67V15.5059H53.457V26.0997H52.67V21.1331H45.9099V26.0997H45.1229V15.5059ZM56.2208 15.5059H63.7313V16.2337H57.0018V20.393H63.0541V21.1208H57.0018V25.3718H63.8106V26.0997H56.2208V15.5059Z"
                  fill="currentColor"
                />
                <path
                  d="M46.5404 31.3904C46.9065 32.7054 47.2725 34.0205 47.663 35.3355C48.3341 37.6904 48.4562 38.0696 48.8344 40.4367C49.2005 38.0146 49.2859 37.5986 49.835 35.1153L50.6282 31.3904H53.6482L50.561 43.6112H47.4251C47.0407 42.2656 46.6807 40.9138 46.2841 39.5743C45.6313 37.3295 45.5947 37.25 45.2286 35.5374C44.9602 36.8769 44.6124 38.1981 44.1915 39.4948L43.02 43.6112H39.8841L36.7969 31.3965H39.8291C41.1409 37.195 41.2812 37.8311 41.6412 40.4795C42.0927 38.0574 42.2147 37.5925 42.8492 35.1704L43.8498 31.3965H46.5404V31.3904ZM66.1922 40.3021C65.7834 40.9138 65.3807 41.4949 64.7767 42.0576C63.5626 43.1525 61.9824 43.7458 60.3534 43.7213C56.8757 43.7213 54.4292 41.4949 54.4292 37.6476C54.4292 34.8095 55.8202 31.1641 60.4449 31.1641C61.1404 31.1641 63.1599 31.2313 64.6608 32.8522C66.1861 34.4976 66.2776 36.7913 66.3264 38.1186H57.9495C57.9312 39.5865 58.761 41.0422 60.6218 41.0422C62.4827 41.0422 63.1599 39.8067 63.587 38.9749L66.1922 40.3021ZM62.7572 35.9594C62.7267 35.3478 62.501 34.7606 62.1044 34.2957C61.1221 33.3782 59.5907 33.4272 58.6695 34.4058C58.1997 34.9257 58.0837 35.464 57.9739 35.9594H62.7572ZM68.4984 31.3904H73.2085C74.4897 31.3904 75.6428 31.4454 76.3811 31.684C77.6501 32.0326 78.5165 33.207 78.486 34.522C78.486 35.1826 78.3151 35.5802 78.2602 35.6964C77.7111 36.9442 76.5397 37.1888 75.8808 37.3234C76.6251 37.4457 77.6074 37.5986 78.2785 38.3632C78.7117 38.8281 78.9496 39.5009 78.9496 40.1982C78.9313 41.501 78.1382 42.6631 76.9363 43.1525C76.0211 43.55 75.0388 43.6051 73.6416 43.6051H68.4984V31.3904ZM71.3964 33.6718V36.2163H73.6905C74.3799 36.198 75.5025 36.1674 75.5025 34.9013C75.5025 33.7269 74.4836 33.678 73.8979 33.678H71.3964V33.6718ZM71.3964 38.4305V41.3909H73.5196C74.5385 41.3725 75.8625 41.3358 75.8625 39.9352C75.8625 38.5345 74.6544 38.4488 74.0321 38.4305H71.3964ZM81.4389 31.3904H86.149C87.4241 31.3904 88.5772 31.4454 89.3216 31.684C90.5906 32.0326 91.457 33.207 91.4265 34.522C91.4265 35.1826 91.2556 35.5802 91.2007 35.6964C90.6516 36.9442 89.4802 37.1888 88.8213 37.3234C89.5656 37.4457 90.5479 37.5986 91.219 38.3632C91.6461 38.8281 91.8902 39.5009 91.8902 40.1982C91.8902 41.1462 91.3899 42.4796 89.8768 43.1525C88.9616 43.55 87.9793 43.6051 86.5822 43.6051H81.4389V31.3904ZM84.3369 33.6718V36.2163H86.631C87.3204 36.198 88.443 36.1674 88.443 34.9013C88.443 33.7269 87.4241 33.678 86.8384 33.678H84.3369V33.6718ZM84.3369 38.4305V41.3909H86.4601C87.4729 41.3725 88.803 41.3358 88.803 39.9352C88.803 38.5345 87.595 38.4488 86.9726 38.4305H84.3369ZM91.823 31.3904H95.3251L97.9486 35.5802C98.1011 35.2316 98.1316 35.1643 98.4489 34.6627L100.535 31.3904H104.001L99.3946 37.825V43.6051H96.3928V37.9167L91.8169 31.3904H91.823Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </motion.div>

          {/* Card 4: Awwwards (W.) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03 }}
            onMouseEnter={playHover}
            className="relative aspect-square rounded-[24px] sm:rounded-[30px] md:rounded-[34px] bg-white/45 hover:bg-white/80 border border-white/60 shadow-[0_8px_30px_rgba(7,0,53,0.03)] hover:shadow-[0_16px_40px_rgba(7,0,53,0.08)] flex items-center justify-center p-6 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-full flex items-center justify-center text-[#070035] group-hover:scale-105 transition-transform duration-300">
              <svg
                width="88"
                height="47"
                viewBox="0 0 88 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[42%] max-w-[100px] h-auto"
              >
                <path
                  d="M53.9733 0.776367L45.7512 31.9845L37.9896 0.776367H27.3973L19.6328 31.9845L11.4165 0.776367H0L14.7019 46.2359H24.7485L32.692 16.8304L40.6384 46.2359H50.6851L65.384 0.776367H53.9675H53.9733ZM72.6587 39.2007C72.6587 43.5305 75.944 46.7764 80.3293 46.7764C84.7117 46.7764 88 43.5276 88 39.2007C88 34.871 84.7147 31.6222 80.3293 31.6222C75.944 31.6222 72.6587 34.871 72.6587 39.2007Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </motion.div>

          {/* Card 5: FWA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03 }}
            onMouseEnter={playHover}
            className="relative aspect-square rounded-[24px] sm:rounded-[30px] md:rounded-[34px] bg-white/45 hover:bg-white/80 border border-white/60 shadow-[0_8px_30px_rgba(7,0,53,0.03)] hover:shadow-[0_16px_40px_rgba(7,0,53,0.08)] flex items-center justify-center p-6 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-full flex items-center justify-center text-[#070035] group-hover:scale-105 transition-transform duration-300">
              <svg
                width="126"
                height="38"
                viewBox="0 0 126 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[56%] max-w-[140px] h-auto"
              >
                <path
                  d="M107.422 6.3592C107.905 6.3592 108.355 6.46127 108.734 6.69945C109.598 7.14178 110.149 8.06289 110.149 9.08608V16.7588H117.677C119.196 16.7588 120.404 17.9521 120.404 19.4516C120.404 20.9512 119.196 22.1445 117.677 22.1445H110.149V29.4429C110.149 30.9424 108.941 32.1357 107.422 32.1357H86.4626C84.9442 32.1357 83.7359 30.9424 83.7359 29.4429V19.3155C83.8048 17.884 85.0131 16.7247 86.4626 16.7247H104.693V11.7449H83.6645L73.6854 30.0578C73.5131 30.8768 72.9939 31.5913 72.2014 31.968C71.8225 32.1382 71.4066 32.2402 71.0276 32.2402C70.0949 32.2402 69.1622 31.7639 68.6798 30.9108C68.5765 30.7747 68.5076 30.6046 68.4387 30.4345L60.5661 15.1571L52.5902 30.0942C52.2457 30.8792 51.7264 31.5938 50.934 32.0045C50.555 32.1746 50.1391 32.2767 49.7602 32.2767C48.8275 32.2767 47.8948 31.8003 47.4124 30.9473C47.3091 30.8112 47.2402 30.6411 47.1712 30.4709L37.5367 11.8178H21.4446V16.7976H34.463C35.9814 16.7976 37.1897 17.991 37.1897 19.4905C37.1897 20.99 35.9814 22.1834 34.463 22.1834H21.4446V29.6179C21.4446 31.1174 20.2363 32.3107 18.7179 32.3107C17.1995 32.3107 15.9912 31.1174 15.9912 29.6179V22.1834H8.32535C6.80695 22.1834 5.59863 20.99 5.59863 19.4905C5.59863 17.991 6.80695 16.7976 8.32535 16.7976H15.8534V9.12496C15.8534 8.10178 16.4415 7.21469 17.2684 6.73834C17.6474 6.53419 18.0977 6.39808 18.5801 6.39808H38.9862C39.4341 6.39808 39.85 6.50016 40.2289 6.70431C40.8171 6.94249 41.2995 7.38725 41.5751 7.9997L49.6543 23.6513L57.7336 8.71423C58.147 7.89519 58.3562 7.14664 59.252 6.73591C59.631 6.56578 60.0469 6.4637 60.4259 6.4637C61.1174 6.4637 61.772 6.70188 62.2568 7.18066C62.7391 7.55494 62.9828 7.82957 63.3273 8.47605L70.9587 23.6513L79.5227 7.96567C79.7295 7.5914 80.0395 7.28274 80.421 7.04456C80.9033 6.67029 81.4915 6.42968 82.183 6.42968H107.425M89.0884 26.7209H104.696V22.1518H89.0884V26.7209ZM107.422 0.834961H82.1805C80.3496 0.834961 78.5556 1.44985 77.1036 2.54108C76.102 3.22402 75.2727 4.1427 74.687 5.16589L74.6525 5.23394L74.6181 5.30199L71.1309 11.7133C71.1309 11.7133 67.0901 3.8705 65.8818 2.91536C64.3634 1.61997 62.4291 0.903011 60.4259 0.903011C59.1831 0.903011 57.9403 1.17521 56.8009 1.72205C54.6254 2.74523 53.4171 4.65551 52.4155 6.87201L49.7921 11.7133L46.5806 5.50614C45.7513 3.83404 44.3362 2.4706 42.6087 1.68802C41.4693 1.14362 40.2265 0.868986 38.9837 0.868986H18.5776C17.197 0.868986 15.814 1.20924 14.6057 1.85815C11.9134 3.28964 10.2547 6.087 10.2547 9.08851V11.237H8.32043C3.72832 11.237 0 14.919 0 19.454C0 23.9891 3.72832 27.6736 8.32289 27.6736H10.2572V29.5838C10.2572 34.1189 13.9855 37.8034 18.5801 37.8034C23.1746 37.8034 26.903 34.1213 26.903 29.5838V27.6736H34.2932C35.8805 27.6736 37.4013 27.2312 38.6786 26.4462L41.959 32.7895C42.1312 33.1638 42.3035 33.5065 42.5102 33.8467C44.0286 36.3014 46.7234 37.8034 49.6223 37.8034C50.8651 37.8034 52.1079 37.5312 53.2473 36.9843C55.285 36.0292 57.0445 34.3936 57.9428 32.3132L60.325 27.0951L63.2953 32.8235C63.4676 33.1978 63.6398 33.5405 63.8466 33.8807C65.365 36.3354 68.0597 37.8374 70.9587 37.8374C72.2014 37.8374 73.4442 37.5652 74.5836 37.0184C76.4835 36.0972 77.9674 34.4956 78.7279 32.5854C79.9706 35.5869 82.9754 37.7013 86.4626 37.7013H107.422C112.014 37.7013 115.745 34.1554 115.745 29.6203V27.71H117.68C122.272 27.71 126.002 24.028 126.002 19.4905C126.002 14.953 122.274 11.271 117.68 11.271H115.745V9.12253C115.745 6.087 114.089 3.32609 111.394 1.89217C110.186 1.17521 108.805 0.834961 107.422 0.834961Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* "+ See all awards" Pill Button matching media_1791456543276.png */}
        <div className="flex flex-col items-start">
          <button
            onClick={() => {
              playClick();
              setShowAllAwards((prev) => !prev);
            }}
            onMouseEnter={playHover}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white text-[#070035] hover:bg-white/90 border border-black/5 shadow-[0_2px_12px_rgba(7,0,53,0.06)] hover:shadow-md transition-all text-xs sm:text-sm font-medium focus:outline-none group"
            data-cursor="CLICK"
          >
            <span className="w-5 h-5 rounded-full bg-[#070035] text-white flex items-center justify-center text-xs font-bold leading-none transition-transform duration-300 group-hover:rotate-90">
              {showAllAwards ? '✕' : '+'}
            </span>
            <span>{showAllAwards ? 'Close awards' : 'See all awards'}</span>
          </button>

          {/* Expandable Awards Archive List */}
          <AnimatePresence>
            {showAllAwards && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full overflow-hidden"
              >
                <div className="p-6 sm:p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-white/60 shadow-lg mt-2 max-w-4xl">
                  <div className="flex items-center justify-between pb-4 border-b border-black/10 mb-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
                      Award &amp; Organisation
                    </span>
                    <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
                      Year / Project
                    </span>
                  </div>
                  <div className="flex flex-col divide-y divide-black/5">
                    {awardsList.map((award, idx) => (
                      <div
                        key={idx}
                        className="py-3.5 flex items-center justify-between gap-4 hover:bg-white/60 px-2 rounded-xl transition-colors"
                      >
                        <span className="text-sm sm:text-base font-semibold text-[#070035]">
                          {award.title}
                        </span>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-xs font-mono text-zinc-600 bg-white px-2.5 py-1 rounded-full border border-black/5">
                            {award.project}
                          </span>
                          <span className="text-xs font-mono text-[#928ae7] font-bold">
                            {award.year}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
