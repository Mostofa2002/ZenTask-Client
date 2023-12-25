import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ToDo from "./Tasks/ToDo";
import OnGoing from "./Tasks/Ongoing";
import Complete from "./Tasks/Complete";
const AllTask = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="flex lg:flex-row flex-col gap-10 min-h-screen container mx-auto">
          <ToDo />
          <OnGoing />
          <Complete />
        </div>
      </DndProvider>
    </>
  );
};

export default AllTask;
