import { useEffect } from "react";

const AboutPage = () => {

    useEffect(() =>{
        console.log('[useEffect] - /about')
        document.title = 'About Me - Edward Ma'
    }, [])
    return (
      <h1>About Page</h1>  
    )
}
;

export default AboutPage;