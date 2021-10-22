import { MailOutlined, SendOutlined } from "@ant-design/icons";
import { Image, Row, Col, Input, Typography, message, Form } from "antd";
import Link from "next/link";
import React from "react";
import { BiMailSend } from "react-icons/bi";

const { Text } = Typography;
const Footer = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    let email = form.getFieldValue("email");
    // const result = await fetch(
    //   "https://hour.herokuapp.com/home/subscribe",
    //   {
    //     method: "POST",
    //     mode: "cors",
    //     headers: { 'Content-Type': 'application/json'},
    //     body: JSON.stringify({
    //       email: email,
    //     }),
    //   }
    // );
    if(result.status === 200) {
      message.success("You have successfully subscribed to our updates", 3)
    }
    else{
      message.info("You failed to register for the newsletter. Please try again later.", 3)
      console.log(result)
    }

    form.resetFields();
  };

  return (
    <>
      <div className="footer-web">
        <Row
          gutter={[40, 40]}
          justify="space-around"
          className="flex footer-web-row"
        >
          <Col
            xs={20}
            sm={16}
            md={16}
            lg={8}
            xl={6}
            justify="center"
            className="text-gray-600 app-badges"
          >
            <div className="justify-center align-center">
              <div className="app-links">
                  <Image
                    preview={false}
                    width={150}
                    src="/logo.png"
                  />
              </div>
            </div>
          </Col>

          <Col
            xs={20}
            sm={16}
            md={16}
            lg={8}
            xl={6}
            justify="center"
            className="text-gray-600"
          >
            <div className="justify-center align-center">
              <h3>Second Home</h3>
              <ul>
                <li>
                  <Link href="/about">
                    <h2>H.O.U.R. (Hour of Ur Resident) was....<a>Readmore</a></h2>
                  </Link>
                </li>
                
                
              </ul>
            </div>
          </Col>

          
          <Col
            xs={20}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            justify="center"
            className="footer-news"
          >
            <Row justify="center" gutter={[0, 16]}>
              <Col xs={20} sm={20} md={20} lg={20} xl={20} justify="center">
                <h3>Newsletter Subscription</h3>
                <Form onFinish={onFinish} form={form}>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Enter your Email",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your email"
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    suffix={<SendOutlined onClick={onFinish} />}
                  />
                </Form.Item>
                
              </Form>
              </Col>
              <Col
                xs={20}
                sm={20}
                md={20}
                lg={20}
                xl={20}
                justify="center"
                className="social-links"
              >
                
              </Col>
            </Row>
          </Col>
        </Row>
      

      <div className="copyright">
        <Row className="flex px-16 py-8" justify="center">
          <Col
            xs={20}
            sm={20}
            md={14}
            lg={14}
            xl={14}
            justify="center"
            className=""
            style={{ textAlign: "center" }}
          >
            Copyright © 2021. All rights reserved.
          </Col>
        </Row>
      </div>
      </div>
    </>
  );
};

export default Footer;
