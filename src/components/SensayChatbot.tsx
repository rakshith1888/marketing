import { useEffect } from "react";

const SensayChatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://chat-widget.sensay.io/8baf2286-a70f-4f45-8ea7-bb1ed5d9397a/embed-script.js";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up on unmount
    };
  }, []);

  return null;
};

export default SensayChatbot;
