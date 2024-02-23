// Login.js
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.3.100:20000/users/signin",
        values,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      if (true) {
        localStorage.setItem("access_token", response.data.access_token);
        message.success("Đăng nhập thành công!");
        navigate("/report");
      } else {
        message.error("Đăng nhập thất bại!");
      }
    } catch (error) {
      message.error("Đăng nhập thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login_form_wrapped">
      <Form onFinish={onFinish} className="login-form-container">
        <Form.Item name="username">
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
