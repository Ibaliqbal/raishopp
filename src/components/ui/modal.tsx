import { motion, AnimatePresence } from "framer-motion";
import { Fragment, useEffect, useCallback } from "react";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, setOpen, children }) => {
  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <Fragment>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed h-dvh w-full inset-0 bg-black bg-opacity-60 z-[61]"
            onClick={handleClose}
          />
          {children}
        </Fragment>
      )}
    </AnimatePresence>
  );
};

export default Modal;
