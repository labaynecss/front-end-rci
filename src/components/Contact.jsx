import React, { useState } from 'react';
import { inViewhandler } from './animationHandler';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import me from '../assets/img/2x2.png';
import emailjs from 'emailjs-com';
import { Socials } from './Socials';
export const Contact = () => {
  const animation = useAnimation('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [emailStatus, setEmailStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setEmailStatus('empty');
      return;
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAIL_USER_ID,
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailStatus('success');
        },
        (error) => {
          console.log(error.message);
        },
      );
  };
  return (
    <InView onChange={(inView) => inViewhandler(inView, animation)}>
      <section
        id="contact"
        className="max-w-[1240px] w-[95%] lg:w-full m-auto px-2 pt-5 ">
        <h1 className="px-5 pb-5 pt-2 uppercase text-xl tracking-widest text-[#6699CC] ">
          Contact
        </h1>
        <motion.div
          className="container mx-auto   "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={animation}>
          <div className="flex flex-col lg:gap-x-8 lg:flex-row ">
            <div class="flex flex-col h-[620px] lg:w-[560px]  w-auto my-5 rounded-b-md shadow-lg items-center ">
              <img
                src={me}
                alt="me"
                className="h-[200px] w-[220px] mt-10 rounded-full shadow-md "
              />
              <div className="mt-10 text-center">
                <h2 className="section-title  md:text-center sm: text-center lg:text-center capitalize">
                  Carl Louis
                </h2>
                <p className="underline underline-offset-2 tracking-wider text-cyan-700 ">
                  React Developer
                </p>
                <p className="py-4 px-3 text-gray-700">
                  I'am always excited to hear about new projects. Feel free to
                  send me message, and let's discuss how we can cooperate
                  together
                </p>
              </div>
              <hr />
              <p className=" text-[#6699CC] pt-10">Lets Connect</p>
              <span className="flex items-center justify-between py-4 mt-6">
                <Socials />
              </span>
            </div>
            <div className="  my-5 flex flex-col justify-center h-[620px] px-4 rounded-b-md shadow-lg">
              <form
                className="space-y-8  w-full max-w-[750px] "
                onSubmit={sendEmail}>
                <div className="flex gap-8  ">
                  <input
                    className="input"
                    type="text"
                    value={name}
                    placeholder="Your name..."
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="input"
                    type="text"
                    value={email}
                    placeholder="Your email.. "
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <input
                  className="input"
                  type="text"
                  value={subject}
                  placeholder="Subject.."
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  className="textarea h-[200px]"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button className=" inline-flex gap-2 shadow-[0_4px_9px_-4px_#6699CC]  bg-[#6699CC] rounded border-2 border-[#6699CC] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-gray-100 transition duration-150 ease-in-out hover:border-[#6699CC] hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-purple-700 focus:border-primary-600 focus:text-sky-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                  Send Message
                </button>
                <div className="email-status mt-4 ">
                  {emailStatus === 'success' && (
                    <p className="text-fuchsia-700 "> Email Successfully ! </p>
                  )}
                  {emailStatus === 'empty' && (
                    <p className="text-rose-500 ">
                      Please fill in all fields before submitting{' '}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </InView>
  );
};
