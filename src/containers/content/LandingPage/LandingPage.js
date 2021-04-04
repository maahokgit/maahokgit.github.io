import { useEffect } from "react";

const LandingPage = () => {
    useEffect(() => {
        console.log("[useEffect] - /");
        document.title = "Edward Ma";
      }, []);
    return (
        <h1>Landing Page</h1>
    )
};

export default LandingPage;