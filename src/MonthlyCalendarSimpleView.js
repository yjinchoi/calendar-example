import { MonthlyCalendar } from "calendar";

function DayCellView ( props ) {

    const { month, week, date, exact } = props;

    const firstDayCellStyle = {

        borderLeft: "1px solid lightgrey",

    }

    const dayCellStyle = {

        height: "100%",
        borderBottom: "1px solid lightgrey",
        borderRight: "1px solid lightgrey",

    };

    const dayTextStyle = {

        top: "50%",
        transform: "translateY(-50%)",
        textAlign: "center",
        position: "relative",

    }

    return (

        <div style={{

            gridColumn: `${date.getDay() + 1} / ${ date.getDay() + 2 }`,
            gridRow: `${week + 2} / ${ week + 3 }`,
            ...(date.getDay() === 0 ? firstDayCellStyle : {}),
            ...dayCellStyle,

        }} >
            {
                month === ( date.getMonth () + 1 )
                ?
                <div style={dayTextStyle} >{`${parseInt(date.getDate())}`}</div>
                :
                (
                    exact
                    ?
                    <></>
                    :
                    <div style={dayTextStyle} >{`${parseInt(date.getMonth() + 1)}`}/{`${parseInt(date.getDate())}`}</div>
                )

            }
        </div>

    );

}

function MonthlyCalendarSimpleView ( props ) {

    const {
        
        year,
        month,
        exact,
        variableWeeks,
        
    } = props;

    const containerStyle = {

        display: "grid",
        gridAutoFlow: "column",
        gridTemplateRows: "0.25fr repeat(6, 1fr)",
        gridTemplateColumns: "repeat (7, 1fr)",
        height: "100%",
        width: "100%",

    };

    const firstWeekNameBoxCellType = {

        borderLeft: "1px solid lightgrey",

    };

    const weekNameBoxCellStyle = {

        dispaly: "flex",
        height: "100%",
        borderTop: "1px solid lightgrey",
        borderBottom: "1px solid lightgrey",
        borderRight: "1px solid lightgrey",
        
    };

    const weekNameStyle = {

        position : "relative",
        top: "50%",
        transform: "translateY(-50%)",
        textAlign: "center",
    }

    let weekNames = [ "일", "월", "화", "수", "목", "금", "토" ];

    return (

        <div style={containerStyle}>

            {

                weekNames.map ( ( weekName, index ) => (
                    
                    <div style={{

                        gridColumn: `${index + 1} / ${ index + 2 }`,
                        gridRow: "1 / 2",
                        ...(index === 0 ? firstWeekNameBoxCellType : {}),
                        ...weekNameBoxCellStyle,

                    }} >
                        <div style={weekNameStyle}>{`${weekName}`}</div>
                    </div>

                ) )

            }

            <MonthlyCalendar year={year} month={month} variableWeeks={variableWeeks} >

                <DayCellView year={year} month={month} exact={exact} />

            </MonthlyCalendar>

        </div>

    );

}

export default MonthlyCalendarSimpleView;
