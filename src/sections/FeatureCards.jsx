import { abilities } from "../../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="card-border bg-[rgb(255,223,242)] rounded-xl p-8 flex flex-col gap-4"
        >
          <div className="size-14 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-black text-2xl font-semibold mt-2">{title}</h3>
          <p className="text-black-50 text-lg">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;
