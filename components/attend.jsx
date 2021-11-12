import { Row, Col, Button, Typography } from "antd";
import React from 'react';
import { getToken } from './auth';

const Attendance = () => {
    const { Text } = Typography;
    const accessToken = getToken();
    console.log(accessToken);
    const postAttendance = e => {
        e.preventDefault();
        console.log(accessToken);
        try {
            const response = fetch("http://localhost:5000/api/attendance", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                }
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    return (



        <div className='h-auto mt-10'>
            <Row
                className="w-full bg-fixed bg-cover bg-no-repeat bg-center relative"
                style={{

                    height: "40vh",
                    backgroundSize: "cover",
                    filter: "brightness(50%)",
                }}
                justify="center"
                align="middle"
            ></Row>
            <Row
                className='absolute w-full'
                style={{ height: '40vh', transform: 'translateY(-100%)' }}
                justify='center'
                align='middle'
            >
                <Col>
                    <Text level={1} strong className='block text-white text-6xl font-bold'>
                        Attendance
                    </Text>
                </Col>
            </Row>
            <Row
                className='absolute w-full'
                style={{ height: '40vh', transform: 'translateY(-100%)' }}
                justify='center'
                align='middle'
            >
                <Col>
                    <Button
                        type="primary"
                        justify="center"
                        onClick={postAttendance}
                    >Mark Attendance</Button>
                </Col>
            </Row>

        </div>
    )
}

export default Attendance;