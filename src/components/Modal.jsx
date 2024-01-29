import { createPortal } from "react-dom";
import Btn from "./Btn";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal({ children, btnCaption }, ref) {
 const dialog = useRef();
 useImperativeHandle(ref, () => {
  return {
   open() {
    dialog.current.showModal();
   },
  };
 });
 return createPortal(
  <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
   {children}
   <form method="dialog" className="py-4 px-24 font-semibold text-xl">
    <Btn>{btnCaption}</Btn>
   </form>
  </dialog>,
  document.getElementById("modal-root")
 );
});
export default Modal;
