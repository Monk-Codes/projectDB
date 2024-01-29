import Btn from "./Btn";
import projectPic from "../assets/projectPic.png";
export default function FirstLoad({ onAddProject }) {
 return (
  <div className="mt-24 text-center w-2/3">
   <img src={projectPic} alt="new" className="w-16 h-16 object-contain mx-auto" />
   <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
   <p className="text-stone-400 mb-4">Select A Project or Get Started With New One</p>
   <p className="mt-8">
    <Btn onClick={onAddProject}>Create New Project</Btn>
   </p>
  </div>
 );
}
