import { Carousel, Col, Layout, Row } from "antd";

import img1 from "../public/bibifatimahall.jpg"
const AboutContent = () => {
    const { Content } = Layout;
   
    return (
        <>
            <Content className="about pb-20">
                <div className="text-center mt-5 px-10 md:px-32 text-4xl md:text-5xl font-semibold text-white ">
                    About us
                </div>

                <Row
                    gutter={[20, 20]}
                    justify="space-around"
                    className="flex md:flex-row items-center flex-col md:px-9 mx-auto mt-2 py-10"
                >
                    <Col
                        xs={20}
                        sm={20}
                        md={16}
                        lg={12}
                        xl={12}
                        className="md:mr-8 text-gray-600 text-xl"
                    >
                        <p className="text-base mt-6 md:pr-12 md:mt-8">
                            H.O.U.R  (House Of Ur Resident) was born out of an idea of
                            three undergraduates during the covid pandemic , “ When
                            everything is getting digital ,why not hostel attendance ,events
                            and complaints ?”
                        </p>
                        <p className="text-base mt-6 md:pr-12 md:mt-8">

                            Primarily, the idea is to provide simple yet  dynamic system
                            which could cater all the needs of Hostellers.
                        </p>
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={8}
                        xl={6}
                        justify="center"
                        className="items-center pt-10 ab-img"
                    >
                        
                            <div><img preview={true} src={img1} width={500} height={467} /></div>
                         
                    </Col>
                </Row>

                
            </Content>
        </>
    );
};

export default AboutContent;