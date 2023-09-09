import { ThreeDots } from 'react-loader-spinner';
import {SpinnerDiv} from './Loader.styled'
export const Loader = () => {
  return (
    <SpinnerDiv>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#000"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </SpinnerDiv>
  );
};
