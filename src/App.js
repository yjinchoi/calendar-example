import MonthlyCalendarSimpleView from "./MonthlyCalendarSimpleView";
import HorizontalWeeklySimpleCalendarView from "./HorizontalWeeklySimpleCalendarView";
import VerticalWeeklySimpleCalendarView from "./VerticalWeeklySimpleCalendarView";

function App() {
  return (
    <>
        <div style={{
            width: "80vw",
            height: "45vh",
            marginTop: "5vh",
            marginLeft: "auto",
            marginRight: "auto"
        }}>
            <MonthlyCalendarSimpleView year={2022} month={2} exact />
        </div>
        <div style={{
            width: "80vw",
            height: "45vh",
            marginTop: "2.5vh",
            marginLeft: "auto",
            marginRight: "auto"
        }}>
            <HorizontalWeeklySimpleCalendarView year={2022} month={2} week={1} />
        </div>
        <div style={{
            width: "80vw",
            height: "45vh",
            marginTop: "2.5vh",
            marginBottom: "5vh",
            marginLeft: "auto",
            marginRight: "auto"
        }}>
            <VerticalWeeklySimpleCalendarView year={2022} month={2} week={1} />
        </div>
    </>
  );
}

export default App;
