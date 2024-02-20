import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
import { AssignmentItem } from "./Interfaces";

function App() {
  const [assignmentList, setAssignmentList] = useState<AssignmentItem[]>([]);
  return (
    <>
      <Header setAssignmentList={setAssignmentList} />
      <Assignments
        assignmentList={assignmentList}
        setAssignmentList={setAssignmentList}
      />
    </>
  );
}

export default App;
