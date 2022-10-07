

function App() {
  return (
    <div className="flex h-screen bg-[white]">
      <div className="w-1/2 h-screen bg-[url(./assets/main.png)] bg-fit bg-center bg-no-repeat  	"/>
      <div className="w-1/2 snap-x snap-mandatory  h-screen overflow-y-scroll">
        <div className="h-screen bg-black flex  justify-center items-center ">
          <div className="flex flex-col items-start text-white">
            <p className="text-8xl">
              Pro. <br /> Beyond.
            </p>
            <p className="text-4xl py-10">iPhone 13 Pro</p>
            <p className="text-2xl">
              A display that’s up to 2x brighter in the sun.
            </p>
          </div>
        </div>
        <div className="h-screen bg-black/90 flex  justify-center items-center ">
          <div className="flex flex-col items-start text-white">
            <p className="text-8xl">
              24.  <br /> Frames.
            </p>
            <p className="text-4xl py-10"> Per Second</p>
            <p className="text-2xl">Now shoots in 4K HDR at 24 fps</p>
          </div>
        </div>
        <div className="h-screen bg-black flex  justify-center items-center ">
          <div className="flex flex-col items-start text-white">
            <p className="text-6xl">
              Privacy. In Mind. 
            </p>
            <p className="text-4xl py-10">That's Apple. </p>
            <p className="text-2xl">Control beyond imagination</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
