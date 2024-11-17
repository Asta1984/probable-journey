import { TopBar } from "./components/topbar";
import { Timer } from "./components/timer";
import { ToggleMessage } from "./components/condititional_renderin";
import { Card } from "./components/card";
import { Collapsable_modal, Modals } from "./components/modals";
import { ClassCounter } from "./components/class_based_comp";
import { FunctionalCounter } from "./components/funct_component";
import { ErrorBoundary } from "./components/error_boundary";

function App() {

  const BuggyComponent = () => {
    throw new Error("I crashed!");
  };

  return (
      <>
        <TopBar />
        <Timer />
        <ToggleMessage />
        <Card />
        <Modals />
        <Collapsable_modal />
        <ClassCounter/>
        <FunctionalCounter />
        <ErrorBoundary>
          <BuggyComponent />
        </ErrorBoundary>
      </>
  )
}

export default App
