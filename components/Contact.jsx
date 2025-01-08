import { assets } from "@/assets/assets";
import React, { useState } from "react";
import Image from "next/image";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {motion} from "motion/react"
function Contact({darkMode}) {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState(" ");

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "9ebcb798-ba7e-4d4b-9dcb-74e9b25ddc01");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setOpen(true); // Open the Snackbar on successful submission
      event.target.reset(); // Reset the form after successful submission
    } else {
      console.log("Error", data);
      setResult(data.message); // Show the error message
      setOpen(true); // Show the Snackbar even on failure 
    }
  };

  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <motion.h4
      initial={{y:-15,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5,delay:0.5}}
       className="text-center mb-2 text-2xl font-semibold font-Ovo">
        Connect with me
      </motion.h4>

      <motion.p
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6,delay:0.8}}
       className="text-center mt05 mb-12 font-Ovo max-w-2xl mx-auto">
        Interested to work with me? Drop an email!
      </motion.p>

      <motion.form
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6,delay:0.8}}
       onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            name="name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white dark:bg-darkHover-30 dark:border-white/90 dark:bg-transparent"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            name="email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white dark:bg-darkHover-30 dark:border-white/90 dark:bg-transparent"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>
        <textarea
          name="message"
          className="w-full outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover-30 dark:border-white/90 dark:bg-transparent"
          rows="6"
          placeholder="Enter a message"
          required
        ></textarea>

        <button
          type="submit"
          className="w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto px-6 py-2 hover:bg-black duration-300 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Send
          <Image className="w-4" src={assets.right_arrow_white} alt="" />
        </button>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
            <p>{result}</p>
          </Alert>
        </Snackbar>
      </motion.form>
    </motion.div>
  );
}

export default Contact;
