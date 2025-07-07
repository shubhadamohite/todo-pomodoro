
import Board from "./components/Board";

export default function Home() {
  return (
    <div className="flex p-4 gap-4">
      <div className="flex-1 w-1/2 border p-4">
        <h2 className="text-2xl font-bold mb-2">To-do List</h2>
        <Board />
      </div>
      {/* <div className="flex-1 w-1/2 border p-4">
        <h2 className="text-2xl font-bold mb-2">Pomodoro Timer</h2>
      </div> */}
    </div>
  );
}
