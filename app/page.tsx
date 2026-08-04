export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center px-8 py-5">
        <p className="text-xl text-edgy-black">Kornel Pustelak</p>
        <div className="flex text-sm space-x-10 ">
          <a href="#home">Home</a>
          <p>Projects</p>
          <p>Why me </p>
          <p>Now what?</p>
          <p>Contact</p>
        </div>
        <button className="text-white bg-edgy-black h-12 px-10 rounded-xl text-sm">
          Get in touch
        </button>
      </div>
      <div className="flex justify-between items-center px-8 py-5" id="home">
        <div className="w-1/2 flex">
          <div>
            <h2 className="text-5xl">Hi, I am</h2>
            <h2 className="text-8xl font-medium">Kornel <br /> Pustelak</h2>
            <div className="flex">
              <button>I WANT TO KNOW MORE</button>
              <button>Let's connect</button>
            </div>
          </div>
          <div>
          {/*  Three blocks */}
          </div>
        </div>
        <div className="w-1/2">
          <div>
          {/*  Photo*/}
          </div>
          <div>
            <div className="w-1/5"></div>
            <div className="w-4/5">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat tempus mi ac faucibus.</p>
              <p>&gt; Show me your work</p>
              <p>&gt; Who are you?</p>
              <p>&gt; Lets talk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
