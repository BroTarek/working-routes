import Link from "next/link";

export default async function MuscleExercisesPage({ params }) {
  const { muscle } = await params;

  const exercisesList = {
    legs: ["Squat", "Lunges", "Leg Press"],
    chest: ["Bench Press", "Push-ups", "Dips"],
    triceps: ["Triceps Dips", "Skull Crushers", "Close Grip Bench"],
    biceps: ["Bicep Curls", "Hammer Curls", "Chin-ups"],
    back: ["Deadlift", "Pull-ups", "Rows"],
    shoulders: ["Overhead Press", "Lateral Raises", "Face Pulls"],
  };

  const muscleExercises = exercisesList[muscle] || [];
  let i=0;
  console.log(i++)
  return (
    <div>
      <h1>{muscle.toUpperCase()} Exercises</h1>
      <ul>
        {muscleExercises.map((exercise) => (
          <li key={exercise}>
           <Link 
              href={`/training/muscles/${muscle}/${exercise.replace(/\s+/g, "").toLowerCase()}`}
              as={`/training/muscles/${muscle}/${exercise.replace(/\s+/g, "").toLowerCase()}`}
            >{exercise}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


