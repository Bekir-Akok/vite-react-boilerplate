import { useEffect } from 'react';
import { Toaster, ToastBar, toast, useToasterStore } from 'react-hot-toast';

const TOAST_LIMIT = 3;

const CustomToaster = () => {
  const { toasts } = useToasterStore();

  const dismissToast = (id) => toast.dismiss(id);

  // Enforce Limit
  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return (
    <>
      <Toaster position="bottom-right">
        {(t) => {
          return (
            <div onClick={() => dismissToast(t.id)} className="cursor-pointer">
              <ToastBar toast={t} />
            </div>
          );
        }}
      </Toaster>
    </>
  );
};

export default CustomToaster;
