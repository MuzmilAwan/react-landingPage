import React, { useEffect } from 'react';
import useStore  from "../store/userStore";
import storeUserData from "../services/servicesApi"; 

export default function Blog() {
  const { userData, isLoading, error } = useStore();

  useEffect(() => {
    storeUserData();
  }, []);

  if (isLoading) {
    return <div>Loading data from store...</div>;
  }

  if (error) {
    return <div className='text-red'>Error: {error}</div>;
  }

  return (
    <div className='mobile:w-[500px] tablet:w-[800px] desktop:w-full bg-bgblue p-6'>
      <h2 className='font-bold md:font-extrabold text-[24px] mobile:text-[32px] tablet:text-[44px] desktop:text-[56px] text-center bg-[linear-gradient(90deg,#C026D3_0%,#701A75_50%)] bg-clip-text text-transparent'> Welcome to Blog page to see user data </h2>

      {userData && (
        
        <div className='p-4 border-[1px] border-text-dark rounded-[8px] '>
          <div><strong>{userData.name} Profile Info</strong></div>
          <hr />
          <p>ID: {userData.id}</p>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <p>City: {userData.address?.city}</p>

    
        </div>

        
      )}
    </div>
  );
}
