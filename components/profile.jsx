import { Row,Col,Typography, Image} from "antd";

function Faculty() {
    const {Text} = Typography;
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
                            src="https://www.teahub.io/photos/full/301-3011066_11-111594-indian-beautiful-girl-images-wallpaper-pictures.jpg"
                            width = {200}
                            height = {300}
                        />



                    </div>
                </Col>


            </Row>
            <Row justify="center text-2xl">
                    
                        <Col span = {12}>
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
                            <Row>Sanam</Row>
                            <Row>GH4567</Row>
                            <Row>Physics</Row>
                            <Row>20PHB409</Row>
                            <Row>BAN101</Row>
                            <Row>23</Row>
                            <Row>Lucknow</Row>
                            <Row>sanam.malik@gmai.com</Row>
                            <Row>7634512879</Row>
                        </Col>
                        
                   
            </Row>
        </div>
    )
}

export default Faculty;
