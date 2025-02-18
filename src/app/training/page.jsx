import Link from "next/link";

export default function MuscleExercisesPage() {
  // || {};  // Ensure params is always defined

  // if (!muscle) {
  //   return <h1>Error: Muscle parameter is missing.</h1>;
  // }

  const muscleList = ["shoulders", "back", "biceps","triceps","chest","legs"];
  return (
    <div>
      <ul>
        {muscleList.map((muscle) => (
          <li key={muscle}>
            <Link href={`/training/muscles/${muscle}`}>
              {muscle}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
