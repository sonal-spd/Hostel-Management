import { Calendar, Col, Row } from "antd";

const Attendance = () => {
    function onPanelChange(value, mode) {
        console.log(value, mode);
    }

    return (
        <>
            <div className="site-calendar-demo-card"
                style={{
                    width: "300px",
                    border: "1px solid #f0f0f0",
                    borderRadius: "2px",
                    justifyItems: "center",
            }}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>

        </>
    );
};

export default Attendance;