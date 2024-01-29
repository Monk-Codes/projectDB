import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
 const modal = useRef();
 const title = useRef();
 const description = useRef();
 const dueDate = useRef();
 ///////////////////////////
 function handleSave() {
  const newTitle = title.current.value;
  const newDescription = description.current.value;
  const newDueDate = dueDate.current.value;
  //////////validation/////////
  if (newTitle.trim() === "" || newDescription.trim() === "" || newDueDate.trim() === "") {
   modal.current.open();
   return;
  }

  onAdd({
   title: newTitle,
   description: newDescription,
   dueDate: newDueDate,
  });
 }
 /////////////////////
 return (
  <>
   <Modal ref={modal} btnCaption="Close">
    <h1 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h1>
    <p className="text-stone-400 mb-4">Fill all the input to save</p>
   </Modal>
   <div className="w-[35rem] mt-8">
    <div>
     <Input ref={title} label="Title" type="text" />
     <Input ref={description} label="Description" textarea />
     <Input ref={dueDate} label="Due Date" type="date" />
    </div>
    <menu className="flex items-center justify-end gap-4 my-4">
     <li>
      <button onClick={onCancel} className=" text-stone-800 hover:text-stone-950">
       Cancel
      </button>
     </li>
     <li>
      <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50  hover:text-stone-950">
       Save
      </button>
     </li>
    </menu>
   </div>
  </>
 );
}
