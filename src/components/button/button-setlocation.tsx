import React, { useState } from "react";
import { Button } from "../ui/button";
import Modal from "../ui/modal";
import { motion } from "framer-motion";

const ButtonSetLocation = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        size="lg"
        variant="primary"
        className="self-start"
        onClick={() => setOpen(true)}
      >
        Add more location
      </Button>
      <Modal open={open} setOpen={setOpen}>
        <motion.div
          className="md:w-[900px] w-[320px] h-fit style-base-modal p-3"
          initial={{ opacity: 0, translateY: 200 }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          exit={{
            opacity: 0,
            translateY: -200,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            type: "tween",
          }}
        >
          Hai
        </motion.div>
      </Modal>
    </>
  );
};

export default ButtonSetLocation;