import { useState } from "react";

function App() {
  let age = 3;
  const address = 3;

  const show = true;

  return (
    <div>
      <div>
        <h1>hello dsadsd</h1>
        <h1>{age + address}</h1>
        <h1>{!show ? "Labib" : "Rimu"}</h1>
      </div>
      <div>
        {/* <img src="./images/img1.jpg" alt="" title="Labib akta madarcod" />
        <img src="./images/labib.jpg" alt="" /> */}
      </div>
      <div>
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wB7_cRwftGw?si=axRwilZnBfsKJEJz"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe> */}
      </div>

      <div></div>
    </div>
  );
}

export default App;
