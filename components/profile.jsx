import { Row, Col, Typography,Button , Image } from "antd";
import { getUser,removeUserSession } from "./auth";
import Router from "next/router";

function Profile(props) {
    const { Text } = Typography;
    
    const user = getUser();
    console.log(user)
    const onFinish = () => {
        removeUserSession();
        Router.push('/login');
    }
    return (
        <div className='h-auto mt-10'>
            <Row
                className="w-full bg-fixed bg-cover bg-no-repeat bg-center relative"
                style={{

                    height: "20vh",
                    backgroundSize: "cover",
                    filter: "brightness(50%)",
                }}
                justify="center"
                align="middle"
            ></Row>
            <Row
                className='absolute w-full'
                style={{ height: '20vh', transform: 'translateY(-100%)' }}
                justify='center'
                align='middle'
            >
                <Col>
                    <Text level={1} strong className='block text-white text-6xl font-bold'>
                        Profile
                    </Text>
                </Col>
            </Row>

            <Row gutter={[16, 16]} className='flex pt-4' dir='ltr' justify="center">

                <Col

                    className='cursor-pointer'
                    md={12}
                    xs={24}
                    xl={8}
                >
                    <div className='pb-6' dir='ltr'>
                        <Image
                            src={user?.resident_image}
                            width={200}
                            height={300}
                        />

                    </div>
                </Col>


            </Row>
            <Row justify="center text-2xl">

                <Col span={10} justify="center">
                    <Row >Name</Row>
                    <Row >Enrollment No.</Row>
                    <Row >Course</Row>
                    <Row >Faculty No.</Row>
                    <Row >Hostel Id</Row>
                    <Row >Room No.</Row>
                    <Row >Address</Row>
                    <Row >Email</Row>
                    <Row >Contact No.</Row>
                </Col>
                <Col span={12}>
                    <Row>{user?.resident_name}</Row>
                    <Row>{user?.enrollment_no}</Row>
                    <Row>{user?.course}</Row>
                    <Row>{user?.faculty_no}</Row>
                    <Row>{user?.hostel_id}</Row>
                    <Row>{user?.resident_room}</Row>
                    <Row>{user?.resident_address}</Row>
                    <Row>{user?.email}</Row>
                    <Row>{user?.contact}</Row>
                </Col>


            </Row>
            <Row justify="center">
                <Col span={6} justify="center">
                    <Button
                        type="primary"
                        htmlType="submit"
                        onClick={onFinish}
                    >
                        Log out
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Profile;
