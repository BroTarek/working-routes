// "use client";
import Link from 'next/link';

export default async function ExerciseModal({ params }) {
  const { muscle, exercise } =await params;

  return (
    <div className="modal-overlay" style={{ background: "red" }}>
      <div className="modal-content">
        <h2>{exercise.replace(/-/g, " ")} - {muscle.toUpperCase()}</h2>
        <p> modal of  {exercise.replace(/-/g, " ")}...</p>
        {/* Use Link to go back to the previous page */}
        <Link
              href={`/training/muscles/${muscle}/${exercise.replace(/\s+/g, "").toLowerCase()}`}>   
          <button>Close</button>
        </Link>
      </div>
    </div>
  );
}
