import { ThreeDots } from 'react-loader-spinner';

const styles = { display: 'flex', justifyContent: 'center' };

const Loader = () => (
  <ThreeDots
    height='80'
    width='80'
    radius='9'
    color='grey'
    ariaLabel='three-dots-loading'
    wrapperStyle={styles}
    wrapperClassName=''
    visible={true}
  />
);

export default Loader;
