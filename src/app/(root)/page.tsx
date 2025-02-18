import Hello from "../components/Hello"; // Import the Hello component
import HelloClient from "../components/HelloClient";

export default function Home() {
  console.log("Which component am I?");
  return (
    <>
      <h1 className="text-3xl">Welcome to Next.js course</h1>
      <Hello />
      <HelloClient />
    </>
  );
}
