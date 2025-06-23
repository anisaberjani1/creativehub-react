import heroImage from "../../assets/hero-img.png";
const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#b40b00] via-[#b40b00] to-[#fe7360]">
      <div className="container flex justify-center items-center text-white px-36 py-6">
        <div className="flex flex-col gap-6 items-start">
          <h2 className="text-5xl font-bold ">Do it all with Acrobat.</h2>
          <p className="text-2xl">
            Create and edit PDFs. Collaborate with ease. E-sign documents and
            collect signatures. Get everything done in one app, wherever you
            work. Acrobat’s got it.
          </p>
          <button className="border-none bg-blue-500 py-2.5 px-6 font-semibold rounded-3xl text-lg">
            Start free trial
          </button>
        </div>
        <img src={heroImage} alt="photo" width={600} />
      </div>
    </section>
  );
};

export default Hero;
