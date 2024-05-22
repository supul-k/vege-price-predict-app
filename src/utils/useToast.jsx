import { useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function useToast() {
  const warnToast = useCallback((text) => {
    toast.warn(text, {
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }, []);

  const errorToast = useCallback((text) => {
    toast.error(text, {
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }, []);

  const successToast = useCallback((text) => {
    toast.success(text, {
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }, []);

  return { warnToast, errorToast, successToast };
}