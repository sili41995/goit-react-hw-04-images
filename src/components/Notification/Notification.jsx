import { ToastContainer } from 'react-toastify';

const Notification = () => (
  <ToastContainer
    position='top-right'
    autoClose={3000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme='colored'
  />
);

export default Notification;
