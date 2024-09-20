const ReUsableHeroTH = (props: { img: string; heading: string; height: string | null,details:string }) => {
    const height = props.height ? props.height : '60vh';
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
        <div className="absolute pl-20 df-fldc-jc bg-neutral-800 bg-opacity-70 h-full w-full">
          <h1 className="text-6xl font-semibold text-green-50 pb-6">{props.heading}</h1>
          <p className="text-green-50">{props.details}</p>
        </div>
      </div>
    );
  };
  
  export default ReUsableHeroTH;
  