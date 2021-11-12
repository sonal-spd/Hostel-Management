import { Button, Form, Input, message, Row, Col } from "antd";
import axios from "axios";
import { setUserSession } from "./auth";
import { useState } from "react";
import Router from "next/router";
const Login = (props) => {

  const [loading, setloading] = useState();
  // const {router} = useRouter();
  const handleSubmit = async (values) => {
    axios.post("http://localhost:5000/api/users/login", {
      name: values.username.trim(),
      password: values.password,
    }).then(response => {
      const { accessToken } = response.data;
      axios.get("http://localhost:5000/api/profile", {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }).then(res => {
        const user = res;
        
        Router.push('/profile')
        setUserSession(response.data.accessToken, user.data[0]);

      })
        .catch(err => { return err });
      setloading(false);

    })
      .catch(error => {
        setloading(false);
        message.error(error.message);
      })


  };


  return (
    <div style={{ marginTop: "20vh" }}>
      <div className="bg-gray-200 w-full max-w-sm rounded-lg shadow-md overflow-hidden mx-auto my-auto">
        <div className="py-2 px-6">
          <h3 className="mt-1 text-center font-medium text-gray-600 dark:text-gray-200 text-2xl">
            Welcome
          </h3>
          <p className="mt-1 text-center text-gray-500 dark:text-gray-400 text-xl">
            Login
          </p>
          <Form
            name="normal_login"
            className="md:mx-auto justify-center"
            initialValues={{
              remember: true,
              username: "",
              password: "",
            }}
            onFinish={handleSubmit}
          >
            <p>Username</p>
            <input name="csrfToken" type="hidden" />
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input placeholder="Username" className="mt-2 py-2" />
            </Form.Item>
            <p>Password</p>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                type="password"
                placeholder="Password"
                className="mt-2 py-2"
              />
            </Form.Item>
            <p style={{ color: "purple" }}>Forgot Password</p>
            <Form.Item>
              <Row justify="center">
                <Col span={6} justify="center">
                  <Button
                    type="primary"
                    htmlType="submit"

                  >
                    Log in
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </div>

      </div>
    </div>
  );
};

export default Login;
