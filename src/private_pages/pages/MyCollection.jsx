import { FlexBox } from '../../styled_components/StyledContainers';
import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';
import { PrimaryButton } from '../../styled_components/StyledControls';
import { OwnPagination } from '../components/OwnPagination';
import { IsLoading } from '../components/IsLoading';

export const MyCollection = () => {
  return(
    <>
      <IsLoading/>
    </> 
  )
};
