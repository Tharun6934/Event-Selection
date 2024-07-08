import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
// import Rendercomponent from "./Rendercomponent";

function Rendercomponent({ index }) {
  switch (index) {
    case 0:
      return <Comp1 />;
      break;
    case 1:
      return <Comp2 />;
      break;
    case 2:
      return <Comp3 />;
      break;
    case 3:
      return <Comp1 />;
      break;
    default:
      break;
  }
}

function Register({ isselected }) {
  return (
    <div className="component2">
      <p className="registration">
        Click on an event to view its registration details
      </p>
      <Rendercomponent index={isselected} />
    </div>
  );
}

export default Register;

/* <div className="component2">
//   <p className="registration">
//     Click on an event to view its registration details
//   </p>
// </div> */
