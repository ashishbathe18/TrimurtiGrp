// 



import { useEffect } from "react";

const LanguageSelector = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        clearInterval(interval);
      }
    }, 500);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <div id="google_translate_element"></div>
    </div>
  );
};

export default LanguageSelector;