import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
const { Header } = Layout;
 
const Top = () => {
  return(
    <Header>
      <div className="logo">
          <Link to="/"> blog </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  )
}


export default Top;