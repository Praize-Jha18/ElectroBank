import img from "../../assets/home1.jpg";

const Hero = () => {
  console.log(img); 

  return (
    <div
      className="bg-cover bg-fixed bg-center h-80"
      style={{ backgroundImage: `url(${img})` }}
    >
      <h1>Hi</h1>
    </div>
  );
};

export default Hero;
