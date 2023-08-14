import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const errorToast = (message) => {
  toast.error(message);
};

const successToast = (message) => {
  toast.success(message);
};

export { errorToast, successToast };
