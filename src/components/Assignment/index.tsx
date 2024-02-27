import { AssignmentItem } from "../../Interfaces";
import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";

interface Props {
  assignment: AssignmentItem;
  assignmentList: Array<AssignmentItem>;
  setAssignmentList: React.Dispatch<React.SetStateAction<AssignmentItem[]>>;
}

export function Assignment({
  assignment,
  setAssignmentList,
  assignmentList,
}: Props) {
  function handleDeleteAssignment(id: number) {
    setAssignmentList(
      assignmentList.filter((assignment) => {
        return assignment.id != id;
      })
    );
  }

  const handleComplete = (id: number) => {
    setAssignmentList((prevAssignments) =>
      prevAssignments.map((assignment) =>
        assignment.id === id
          ? { ...assignment, completed: !assignment.completed }
          : assignment
      )
    );
  };

  return (
    <div className={styles.assignment}>
      <button
        className={styles.checkContainer}
        onClick={() => handleComplete(assignment.id)}
      >
        {assignment.completed ? <BsCheckCircleFill /> : <div />}
      </button>

      <p className={assignment.completed ? styles.textCompleted : ""}>
        {assignment.title}
      </p>

      <button
        className={styles.deleteButton}
        onClick={() => handleDeleteAssignment(assignment.id)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
