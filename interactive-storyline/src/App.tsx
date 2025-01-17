import React, { useEffect, useState } from "react";
import { db } from "./services/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Milestone } from "./types/milestone";
import Timeline from "./components/Timeline";
import AddMilestone from "./components/AddMilestone";

const App: React.FC = () => {
  const [milestones, setMilestones] = useState<Milestone[]>([]);

  useEffect(() => {
    const fetchMilestones = async () => {
      const querySnapshot = await getDocs(collection(db, "milestones"));
      const milestonesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Milestone[];
      setMilestones(milestonesData);
    };
    fetchMilestones();
  }, []);

  return (
    <div>
      <h1>Interactive Storyline Composer</h1>
      <AddMilestone />
      <Timeline milestones={milestones} />
    </div>
  );
};

export default App;