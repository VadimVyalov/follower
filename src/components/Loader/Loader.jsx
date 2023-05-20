import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.stiled';
const Loader = () => (
  <LoaderWrapper>
    <RotatingLines
      strokeColor="#5CD3A8"
      strokeWidth="4"
      animationDuration="1"
      width="120"
      visible={true}
    />
  </LoaderWrapper>
);

export default Loader;
