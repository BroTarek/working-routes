export default async function ExerciseDetailsPage({ params }) {
  const { muscle, exercise } = await params || {};

  return (
    <div>
      <h1>{exercise.replace(/-/g, " ")} - {muscle.toUpperCase()}</h1>
      <p>Full details about {exercise.replace(/-/g, " ")}...</p>
    </div>
  );
}
