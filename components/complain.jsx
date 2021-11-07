
import { Button, Col, Input,  Row, Typography, Form, message } from "antd";
import React, { useCallback, useState } from "react";


export default function Complain() {
    const { Text } = Typography;
    const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      console.log(values);

      message.success("We will get back to you as soon as possible!", 5)
    }
    catch (err) {
      message.error("There was some error, while posting your request", 2);
    }
    finally {
      form.resetFields();
    }
  }
  return (
    <div className="h-auto mt-10">
      
      <Row
        className="w-full bg-fixed bg-cover bg-no-repeat bg-center relative"
        style={{
          backgroundImage: `url(/complaint.jpg)`,
          height: "40vh",
          backgroundSize: "cover",
          filter: "brightness(50%)",
        }}
        justify="center"
        align="middle"
      ></Row>
      <Row
        className="absolute w-full"
        style={{ height: "40vh", transform: "translateY(-100%)" }}
        justify="center"
        align="middle"
      >
        <Col>
          <Text
            level={1}
            strong
            className="block text-white text-6xl font-bold"
          >
            Complaint Form
          </Text>
        </Col>
      </Row>
      <div className="mx-auto w-4/5 my-20 mx-auto">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
        >
          <Form form={form} onFinish={onFinish}>
            
            <Form.Item
              name="enrol"
              rules={[{ required: true, message: "Please enter your Enrollment No.!" }]}
            >
              <Input
                className="border-none text-xl"
                placeholder="Enrollment No."
                style={{
                  height: 56,
                  marginBottom: 14,
                  borderBottom: "2px solid #A0AEC0",
                  borderRadius: "15px",
                }}
              />
            </Form.Item>
            
            <Form.Item
              name="hallid"
              rules={[
                { required: true, message: "Please enter your Hall ID!" },
              ]}
            >
              <Input
                className="border-none text-xl"
                placeholder="Hall ID"
                style={{
                  height: 56,
                  marginBottom: 14,
                  borderBottom: "2px solid #A0AEC0",
                  borderRadius: "15px",
                }}
              />
            </Form.Item>
            <Form.Item
              name="complaint text-xl"
              rules={[
                { required: true, message: "Please enter your Complaint!" },
              ]}
            >
              <Input
                className="border-none text-xl"
                placeholder="Complaint"
                style={{
                  height: 120,
                  marginBottom: 14,
                  borderBottom: "2px solid #A0AEC0",
                  borderRadius: "15px",
                }}
              />
            </Form.Item>
            
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ height: 46, borderRadius: "15px", marginTop: 24, width: 126 }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>

        </div>
      </div>
    </div>
  );
}
