import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Training App</h1>
      <p>Select a muscle group to view exercises.</p>
      <Link href="/training">Go to Training</Link> {/* Fixed closing tag */}
    </div>
  );
}
