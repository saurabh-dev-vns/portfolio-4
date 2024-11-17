import Image from "next/image";

const Homepage = () => {
  return(
    <div className="h-full flex flex-col lg:w-full lg:flex-row my-2  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
      <Image src="/hero.png" alt="" fill className={"object-contain"}/>
      </div>
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8">
      <h1 className="text-4xl font-bold md:text-6xl">Crafting Digital Experience, Design Tomorrow.</h1>
      <p className="md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga praesentium, id labore cum eos recusandae quo. Expedita, ex rerum aspernatur quos dolor nemo veritatis voluptas doloremque sed delectus mollitia.</p>
      <div className="flex w-full gap-4">
        <button className="p-4 ring-1 ring-black bg-black text-white rounded-lg">View My Work</button>
        <button className="p-4 ring-1 ring-black rounded-lg">Contact Me</button>
      </div>
      </div>
    </div>
  )
};

export default Homepage;
