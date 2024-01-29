export default function Btn({ children, ...props }) {
 return (
  <button className="px-8 py-2 text-sm md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 " {...props}>
   {children}
  </button>
 );
}
