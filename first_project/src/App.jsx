import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  // let age = 3;
  // const address = 3;

  // const show = true;

  const [age, setAge] = useState(3);

  const [address, setAddress] = useState("");

  return (
    <div>
      <div>
        <h1>hello world</h1>
        {/* <h1>{age + address}</h1>
        <h1>{!show ? "Labib" : "Rimu"}</h1> */}
        <h1>{age}</h1>
        <button
          onClick={() => {
            if (age < 10) {
              setAge(age + 1);
            }
          }}
        >
          Click
        </button>

        <h1>{address}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            prompt(address);
          }}
        >
          <input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <button>Submit</button>
        </form>
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
