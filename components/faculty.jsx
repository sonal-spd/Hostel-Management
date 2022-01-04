import { Row, Col, Typography, Image, message, Card } from "antd";
import { useState } from "react";
import { getToken } from "./auth";
import { useEffect } from "react";
import axios from "axios";
function Faculty(props) {
    const { Text } = Typography;
    const token = getToken();
    const [faculty, setfaculty] = useState([])
    const [proc, setproc] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/faculty/staff', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            setfaculty(res.data);


        }).catch(err => console.log(err));
    }
        , [token]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/faculty/procTeam', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            setproc(res.data);


        }).catch(err => console.log(err));
    }
        , [token]);
    faculty.map(faculty => console.log(faculty))
    return (
        <div className="h-auto mt-10">

            
            <Row
                className='absolute w-full'
                style={{ height: '20vh', transform: 'translateY(-100%)' }}
                justify='center'
                align='middle'
            >
                <Col>
                    <Text level={1} strong className='block text-white text-6xl font-bold'>
                        Faculty
                    </Text>
                </Col>
            </Row>
            <Row span = {12} justify = "center">
                    <Text level={1} strong className='block text-white text-6xl font-bold'>
                        Staff
                    </Text>
                </Row>
            <div className='pb-20 pt-4 w-4/5 mx-auto'>
                {faculty.map(fac => {
                    return (
                        <Card style={{ width: 300, justify: "center" }} >
                            <Row gutter={[16, 16]} className='flex pt-4' justify="center">

                                <Col
                                    className='cursor-pointer'
                                    md={12}
                                    xs={24}
                                    xl={8}
                                >
                                    <div className='pb-6' >
                                        <img
                                            src={fac?.fac_photo}
                                            alt="Not Uploaded"
                                            height={300}
                                        />
                                        <Row className='flex items-center text-2xl' span={6}>{fac?.designation}</Row>
                                        <Row className='flex items-center ' span={6}>{fac?.fac_name}</Row>
                                        <Row className='flex items-center ' span={6}>
                                            {fac?.fac_email}
                                        </Row>
                                        <Row className='flex items-center' span={6}>
                                            {fac?.fac_contact}
                                        </Row>


                                    </div>
                                </Col>

                            </Row>
                        </Card>
                    )
                })}
            </div>
            <Row span = {12} justify = "center">
                    <Text level={1} strong className='block text-white text-6xl font-bold'>
                        Proctor Team
                    </Text>
                </Row>
            <div className='pb-20 pt-4 w-4/5 mx-auto'>
            
                {proc.map(proc => {
                    return (
                        <Card style={{ width: 300, justify: "center" }} >
                            <Row gutter={[16, 16]} className='flex pt-4' justify="center">

                                <Col
                                    className='cursor-pointer'
                                    md={12}
                                    xs={24}
                                    xl={8}
                                >
                                    <div className='pb-6' >
                                        <img
                                            src={proc?.fac_photo}
                                            alt="Not Uploaded"
                                            height={300}
                                        />
                                        <Row className='flex items-center text-2xl' span={6}>{proc?.designation}</Row>
                                        <Row className='flex items-center ' span={6}>{proc?.fac_name}</Row>
                                        <Row className='flex items-center ' span={6}>
                                            {proc?.fac_email}
                                        </Row>
                                        <Row className='flex items-center' span={6}>
                                            {proc?.fac_contactno}
                                        </Row>


                                    </div>
                                </Col>

                            </Row>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default Faculty;
