import { Row, Col, Typography, Image, message } from "antd";
import { useState } from "react";
import { getToken } from "./auth";
import { useEffect } from "react";
import axios from "axios";
import { data } from "autoprefixer";
function Faculty() {

    const { Text } = Typography;
    const token = getToken();
    const [faculty,setfaculty] = useState([])
    useEffect(() => 
        {
            axios.get('http://localhost:5000/api/faculty',{
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            }).then(res=>{
                setfaculty(res.data);
                
            }).catch(err=>message.error(err));
        }
    , [token]);
    return (
        <div className="h-auto mt-10">

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
                        Faculty
                    </Text>
                </Col>
            </Row>

            <Row gutter={[16, 16]} className='flex pt-4' dir='ltr' justify="center">

                {faculty?.map( fac =>{
                return(<Col


                    className='cursor-pointer'
                    md={12}
                    xs={24}
                    xl={8}
                >
                    <div className='pb-6' >
                        <Image
                            src={fac?.fac_photo}
                            
                            height = {300}
                        />
                        <Row className='flex items-center text-2xl' span={6}>{fac?.designation}</Row>
                        <Row className='flex items-center ' span = {6}>{fac?.fac_name}</Row>
                        <Row className='flex items-center ' span = {6}>
                            {fac?.fac_email}
                        </Row>
                        <Row className='flex items-center' span = {6}>
                            {fac?.fac_contact}
                        </Row>


                    </div>
                </Col>)})}

            </Row>
        </div>
    )
}

export default Faculty;
