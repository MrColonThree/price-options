import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-rose-200 rounded-lg p-4 flex flex-col">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-5">{name}</h4>
      <div className="pl-6 flex-grow">
      {features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
      </div>
      <button className="mt-10 bg-green-500 w-full text-center font-bold py-2 rounded-lg hover:bg-rose-500 hover:text-white">Buy Now</button>
    </div>
  );
};

export default PriceOption;
