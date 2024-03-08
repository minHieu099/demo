// Login.js
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import logoImg from './logo.png';

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
    <div>
      <div className='container-login'>
        <img className="logo" src={logoImg} alt="Logo" />
        <h3>CHUYỂN ĐỔI SỐ</h3>
        <Form onFinish={onFinish}>
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
    </div>


  );
};
export default Login;
