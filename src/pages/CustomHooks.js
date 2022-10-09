import Decrement from "../components/hooks/Decrement";
import Increment from "../components/hooks/Increment";
import MasterLayout from "../layout/MasterLayout";

function CustomHooks() {
  return (
    <MasterLayout>
      <h1>Custom Hooks</h1>
      <Increment />
      <Decrement />
    </MasterLayout>
  );
}

export default CustomHooks;
