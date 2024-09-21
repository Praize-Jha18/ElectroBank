const ReUsableHero = (props: { img: string | null; heading: string; height: string | null }) => {
  const height = props.height ? props.height : '70vh';
  return (
    <div className="relative df-ac">
      <div className="img" style={{ height }}>

        {props.img && <picture><img
          src={props.img}
          alt="hero-bg"
          className="w-screen object-center object-cover"
          style={{ height }}
        /> </picture>}


      </div>
      <div className={`absolute pl-24 max-tab:pl-20 max-mdPhone:pl-16 df-ac ${props.img  == null?  " bg-teal-800 " :"bg-neutral-800"}  bg-opacity-70 h-full w-full`}>
        <h1 className="text-4xl font-bold text-white font-numans">{props.heading}</h1>
      </div>
    </div>
  );
};

export default ReUsableHero;
