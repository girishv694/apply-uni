import {useState,useEffect} from 'react'
import Login from './components/desktop/Login'
export const MyFunction = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);
  
    const updateMedia = () => {
      setDesktop(window.innerWidth > 640);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });
  
    return (
      <div>
        {isDesktop ? (
          <div><Login/></div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }