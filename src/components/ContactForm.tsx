import React, { useEffect, useRef, useState } from "react";

const ContactForm = () => {
  const errRef = useRef<HTMLParagraphElement>(null);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    if (errorMsg.length) errRef?.current?.focus();
  }, [errorMsg]);

  const handleSubmit = () => {
    setErrorMsg("");
    if (!name.length) {
      setErrorMsg("Please include your name.");
      return;
    }
    if (!email.length) {
      setErrorMsg("Please include an email.");
      return;
    }
    if (!message.length) {
      setErrorMsg("Please include a message.");
      return;
    }
  };

  return (
    <form className='flex flex-col gap-8 w-full md:pt-10'>
      <div className='px-2 text-lg text-red-600 -mb-4'>
        <p ref={errRef}>{errorMsg}</p>
      </div>
      <div className='relative w-full h-14 overflow-hidden text-lg rounded-lg'>
        <input
          className='peer w-full h-full pt-5 px-4 focus:outline-none text-base'
          type='text'
          name='name'
          id='name'
          onChange={(e) => setName(e.target.value)}
          autoComplete='off'
          maxLength={250}
          aria-invalid={!name.length}
          required
        />
        <label
          className={`absolute bottom-3.5 left-4 transition-all duration-300 ease-in-out peer-focus:-translate-y-[16px] peer-focus:text-sm peer-focus:-translate-x-2 ${
            name.length ? "-translate-y-[16px] -translate-x-2 text-sm" : ""
          }`}
          htmlFor='name'
        >
          Name
        </label>
      </div>
      <div className='relative w-full h-14 overflow-hidden text-lg rounded-lg '>
        <input
          className='peer w-full h-full pt-5 px-4 focus:outline-none text-base'
          type='email'
          name='email'
          id='email'
          onChange={(e) => setEmail(e.target.value)}
          autoComplete='off'
          maxLength={254}
          aria-invalid={!email.length}
          required
        />
        <label
          className={`absolute bottom-3.5 left-4 transition-all duration-300 ease-in-out peer-focus:-translate-y-[16px] peer-focus:text-sm peer-focus:-translate-x-2  ${
            email.length ? "-translate-y-[16px] -translate-x-2 text-sm" : ""
          }`}
          htmlFor='email'
        >
          Email
        </label>
      </div>
      <div className='relative w-full h-32 overflow-hidden text-lg rounded-lg'>
        <textarea
          className={`peer px-4 pt-6 pb-2 w-full h-full focus:outline-none text-base resize-none`}
          name='message'
          id='message'
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={!message.length}
          required
        ></textarea>
        <div
          className={`hidden top-0 left-0 right-4 h-6 bg-white peer-focus:absolute ${
            message.length ? "absolute" : ""
          }`}
        ></div>
        <label
          htmlFor='message'
          className={`absolute top-4 left-4 transition-all duration-300 ease-in-out peer-focus:-translate-y-[10px] peer-focus:text-sm peer-focus:-translate-x-2 ${
            message.length ? "-translate-y-[10px] text-sm -translate-x-2" : ""
          }`}
        >
          Message
        </label>
      </div>
      <button
        className='cursor-pointer text-white text-xl py-4 bg-[#ED474A] rounded-lg z-[1] hover:bg-[#df5557]'
        type='submit'
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
