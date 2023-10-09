import React, { useEffect,useState } from 'react';

const Loader = () => {
    const [loaded,setLoaded]=useState(false);
    
    useEffect(()=>{
      setLoaded(true);
    },[])
    return (
        <>
        {
            (!loaded)?
            <div className="fullpage-loader" id="fullpage-loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            :''}
        </>
    );
}
        
export default Loader;