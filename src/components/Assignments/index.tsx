import { AssignmentItem } from "../../Interfaces";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface Props {
  assignmentList: Array<AssignmentItem>;
  setAssignmentList: React.Dispatch<React.SetStateAction<AssignmentItem[]>>;
}

export function Assignments({ assignmentList, setAssignmentList }: Props) {
  let countCompleted = 0;
  assignmentList.map((assignment: AssignmentItem) => {
    if (assignment.completed) countCompleted++;
  });

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignmentList.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>
            {countCompleted} of {assignmentList.length}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {assignmentList.map((assignment) => (
          <Assignment
            assignment={assignment}
            key={assignment.id}
            setAssignmentList={setAssignmentList}
            assignmentList={assignmentList}
          />
        ))}
      </div>
    </section>
  );
}
