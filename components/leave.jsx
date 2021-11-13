
import { Button, Col, Input, Row, Typography, Form, message, DatePicker } from "antd";
import React from "react";
import { getToken } from "./auth";
import { useState } from "react";

export default function Leave() {
    const { Text } = Typography;
    const [form] = Form.useForm();
    const [Reason, setReason] = useState("");
    const [Address, setAddress] = useState("");
    const [Leave, setLeave] = useState("");
    const [Arrival, setArrival] = useState("");

    const onFinish = e => {
        const accessToken = getToken()
        e.preventDefault();
        try {
            const body = { Reason, Address, Leave, Arrival };
            const response = fetch("http://localhost:5000/api/leave", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                },
                body: JSON.stringify(body)
            });
            console.log(body);
            message.success("We will get back to you as soon as possible!", 5)
        } catch (error) {
            console.error(error);
            message.error("There was some error, while posting your request", 2);

        }
        finally {
            form.resetFields();
        }
    }

    const onChange = async (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <div className="h-auto mt-10">

            <Row
                className="w-full bg-fixed bg-cover bg-no-repeat bg-center relative"
                style={{
                    backgroundImage: `url(/leave.jpg)`,
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
                        Leave Application
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
                            name="address"
                            rules={[
                                { required: true, message: "Please enter your Address!" },
                            ]}
                        >
                            <Input
                                className="border-none text-xl"
                                placeholder="Address"
                                style={{
                                    height: 80,
                                    marginBottom: 14,
                                    borderBottom: "2px solid #A0AEC0",
                                    borderRadius: "15px",

                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="reason"
                            rules={[
                                { required: true, message: "Please enter your Reason!" },
                            ]}
                        >
                            <Input
                                className="border-none text-xl"
                                placeholder="Reason"
                                style={{
                                    height: 80,
                                    marginBottom: 14,
                                    borderBottom: "2px solid #A0AEC0",
                                    borderRadius: "15px",

                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="leave"
                            rules={[{ required: true, message: "Please enter your Leave Date!" }]}
                        >

                            <DatePicker className="bg-white"
                                style={{
                                    height: 56,
                                    marginBottom: 14,
                                    borderBottom: "2px solid #A0AEC0",
                                    borderRadius: "15px",
                                }}
                                placeholder="Leave Date"
                                onChange={onChange} />

                        </Form.Item>
                        <Form.Item
                            name="arrival"
                            rules={[{ required: true, message: "Please enter your Leave Date!" }]}
                        >
                            <DatePicker className="bg-white"
                                style={{
                                    height: 56,
                                    marginBottom: 14,
                                    borderBottom: "2px solid #A0AEC0",
                                    borderRadius: "15px",
                                }}
                                placeholder="Arrival Date"
                                onChange={onChange} />

                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{ height: 66, marginTop: 24, width: 126, borderRadius: "10px" }}

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
