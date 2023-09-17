import {AiFillCheckCircle} from "react-icons/ai"
const Feature = ({feature}) => {
  return (
    <div>
      
      <p className="flex items-start gap-2"><AiFillCheckCircle className="text-green-500 text-xl mt-1"></AiFillCheckCircle> {feature}</p>
    </div>
  );
};

export default Feature;