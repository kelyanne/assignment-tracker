import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";
import { FormEvent } from "react";
import { AssignmentItem } from "../../Interfaces";

interface Props {
  setAssignmentList: React.Dispatch<React.SetStateAction<AssignmentItem[]>>;
}

export function Header({ setAssignmentList }: Props) {
  const [assignment, setAssignment] = useState<string>("");
  const [id, setId] = useState<number>(0);

  const disabled = assignment === "" ? true : false;

  function addAssignment(event: FormEvent<HTMLButtonElement>) {
    setId((count) => count + 1);
    event.preventDefault();
    const newAssignment = {
      id: id + 1,
      title: assignment,
      completed: false,
    };
    setAssignmentList((prevAssignment) => [...prevAssignment, newAssignment]);
    setAssignment("");
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={assignment}
          onChange={(event) => setAssignment(event.target.value)}
        />
        <button disabled={disabled} onClick={addAssignment}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
