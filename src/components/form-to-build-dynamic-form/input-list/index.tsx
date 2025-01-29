"use client";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { Property } from "../../dynamic-form/build-form/InputForm";
import styles from "./input-list.module.css";
import { convertComponentToLabel } from "@/utils/convert-component-type-to-label";
import { FaGripVertical } from "react-icons/fa";

interface InputListProps {
  inputs: { id: string; property: Property }[];
  setInputs: (inputs: { id: string; property: Property }[]) => void;
}

const InputList: React.FC<InputListProps> = ({ inputs, setInputs }) => {
  function reorder<T>(list: T[], startIndex: number, endIndex: number) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const newInputs = reorder(
      inputs,
      result.source.index,
      result.destination.index
    );
    setInputs(newInputs);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="inputs" type="list" direction="vertical">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={styles["list-container"]}
            >
              {inputs.map((input, index) => (
                <Draggable key={input.id} draggableId={input.id} index={index}>
                  {(providedDrag) => (
                    <div
                      {...providedDrag.dragHandleProps}
                      {...providedDrag.draggableProps}
                      ref={providedDrag.innerRef}
                      className={styles["list-component"]}
                    >
                      <p className={styles["list-text"]}>
                        {input.property.props.label} |{" "}
                        {convertComponentToLabel(input.property.type)}
                      </p>
                      <FaGripVertical color="#868788" />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default InputList;
