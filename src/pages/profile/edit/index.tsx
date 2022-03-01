import React, { useState, useEffect } from 'react';
import Presenter from './presenter';

const EditProfile = () => {
  const [inputData, setInputData] = useState<any>({ fullname: '' });
  const { fullname } = inputData;
  return (
    <Presenter
      fullname={fullname}
      inputData={inputData}
      setInputData={setInputData}
    />
  );
};

export default EditProfile;
