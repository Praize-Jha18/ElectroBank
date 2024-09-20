const ReUsableHero = (props: { img: string; heading: string; height: string | null }) => {
    const height = props.height ? props.height : '70vh';
    return (
      <div className="relative df-ac">
        <div className="img">
          <picture>
            <img
              src={props.img}
              alt="hero-bg"
              className="w-screen object-center object-cover"
              style={{ height }}
            />
          </picture>
        </div>
        <div className="absolute pl-28 df-ac bg-neutral-800 bg-opacity-70 h-full w-full">
          <h1 className="text-6xl font-semibold text-white">{props.heading}</h1>
        </div>
      </div>
    );
  };
  
  export default ReUsableHero;
  