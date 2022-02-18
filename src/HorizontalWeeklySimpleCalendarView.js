import { WeeklyCalendar } from "calendar";

function DayCellView ( props ) {

    const { day, date } = props;

    const firstHeaderStyle = {

        borderLeft: "1px solid lightgrey",

    };

    const headerStyle = {

        borderTop: "1px solid lightgrey",
        borderRight: "1px solid lightgrey",
        borderBottom: "1px solid lightgrey",

    };

    const firstDayCellStyle = {

        borderLeft: "1px solid lightgrey",

    };

    const dayCellStyle = {

        height: "100%",
        borderRight: "1px solid lightgrey",
        borderBottom: "1px solid lightgrey",

    };

    const dayTextStyle = {

        top: "50%",
        transform: "translateY(-50%)",
        textAlign: "center",
        position: "relative",

    };

    return (

        <>

            <div style={{

                gridColumn: `${day + 1} / ${ day + 2 }`,
                gridRow: "1 / 2",
                ...(day === 0 ? firstHeaderStyle : {}),
                ...headerStyle,

            }} >

                <div style={dayTextStyle} >{`${parseInt(date.getMonth()) + 1}/${parseInt(date.getDate())}`}</div>

            </div>

            <div style={{

                gridColumn: `${day + 1} / ${ day + 2 }`,
                gridRow: "2 / 3",
                ...(day === 0 ? firstDayCellStyle : {}),
                ...dayCellStyle,

            }} >

                <div style={dayTextStyle} >{`${parseInt(date.getMonth()) + 1}/${parseInt(date.getDate())}`}</div>

            </div>

        </>
        
    );

}

function HorizontalWeeklySimpleCalendarView ( props ) {

    const {

        year,
        month,
        week,
        
    } = props;

    const containerStyle = {

        display: "grid",
        gridAutoFlow: "column",
        gridTemplateRows: "10% 90%",
        gridTemplateColumns: "repeat (7, 1fr)",
        height: "100%",
        width: "100%",

    };
    
    return (

        <div style={containerStyle}>

            <WeeklyCalendar year={year} month={month} week={week} >

                <DayCellView />

            </WeeklyCalendar>

        </div>

    );

}

export default HorizontalWeeklySimpleCalendarView;
