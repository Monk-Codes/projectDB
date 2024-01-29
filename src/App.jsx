import { useState } from "react";
import FirstLoad from "./components/FirstLoad";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import SelectProject from "./components/SelectProject";
////////////////////
function App() {
 const [projectState, SetProjectState] = useState({ selectProjectId: undefined, projects: [], tasks: [] });
 ///////////////////
 function handleAddProject() {
  SetProjectState((prevState) => {
   return {
    ...prevState,
    selectProjectId: null,
   };
  });
 }
 ///////////////////
 function handleDeleteProject() {
  SetProjectState((prevState) => {
   return {
    ...prevState,
    selectProjectId: undefined,
    projects: prevState.projects.filter((project) => project.id !== prevState.selectProjectId),
   };
  });
 }
 //////////////////
 function handleSelectProject(id) {
  SetProjectState((prevState) => {
   return {
    ...prevState,
    selectProjectId: id,
   };
  });
 }
 /////////////////
 function handleCancelProject() {
  SetProjectState((prevState) => {
   return {
    ...prevState,
    selectProjectId: undefined,
   };
  });
 }
 ///////////////////
 function handleProject(projectData) {
  SetProjectState((prevState) => {
   const projectId = Math.random();
   const newProject = {
    ...projectData,
    id: projectId,
   };
   return {
    ...prevState,
    selectProjectId: undefined,
    projects: [newProject, ...prevState.projects],
   };
  });
 }
 //////////////////
 function handleAddTask(text) {
  SetProjectState((prevState) => {
   const taskId = Math.random();
   const newTask = {
    text: text,
    id: taskId,
    projectId: prevState.selectProjectId,
   };
   return {
    ...prevState,
    tasks: [newTask, ...prevState.tasks],
   };
  });
 }
 //////////////////
 function handleDeleteTask(id) {
  SetProjectState((prevState) => {
   return {
    ...prevState,
    tasks: prevState.tasks.filter((task) => task.id !== id),
   };
  });
 }

 ///////////////////////////
 const selectedProject = projectState.projects.find((project) => project.id === projectState.selectProjectId);
 let content = <SelectProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectState.tasks} />;
 if (projectState.selectProjectId === null) {
  content = <NewProject onAdd={handleProject} onCancel={handleCancelProject} />;
 } else if (projectState.selectProjectId === undefined) {
  content = <FirstLoad onAddProject={handleAddProject} />;
 }
 ////////////////////////////
 return (
  <>
   <main className="h-screen my-8 flex gap-8">
    <SideBar onAddProject={handleAddProject} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectProjectId} />
    {content}
   </main>
  </>
 );
}

export default App;
