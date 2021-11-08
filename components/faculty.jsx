import { Row, Col, Typography, Image } from "antd";

function Faculty() {

    const { Text } = Typography;

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

                <Col


                    className='cursor-pointer'
                    md={12}
                    xs={24}
                    xl={8}
                >
                    <div className='pb-6' >
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                            
                            height = {300}
                        />
                        <Row className='flex items-center text-2xl' span={6}>Provost</Row>
                        <Row className='flex items-center ' span = {6}>Dhanush</Row>
                        <Row className='flex items-center ' span = {6}>
                            test@test.com
                        </Row>
                        <Row className='flex items-center' span = {6}>
                            Phone No. - 4588568821
                        </Row>


                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default Faculty;
