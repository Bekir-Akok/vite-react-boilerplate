import toast from 'react-hot-toast';

const ShowToast = (state, message) => {
  const durationTime = state === 'error' ? Infinity : 3000;
  return toast[state](message, { duration: durationTime });
};

export default ShowToast;
