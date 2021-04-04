import { useEffect } from "react";

const WorkPage = () => {
    useEffect(() => {
        console.log("[useEffect] - /work");
        document.title = "My Work - Edward Ma";
      }, []);
      return (
          <h1>Work Page</h1>
      )
};

export default WorkPage;