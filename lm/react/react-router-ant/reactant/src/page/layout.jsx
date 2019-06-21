import React from "react";
import {
    Layout, Row, Col, Avatar, Input,
    Menu, Dropdown, Icon, Badge
} from 'antd';
import { Link } from "react-router-dom";


const { Header, Footer, Sider, Content } = Layout;

function DropMenu(params) {
    return (
        <Menu>
            <Menu.Item>
                <a href="">火之晨曦</a>
                <a href="">2</a>
            </Menu.Item>
        </Menu>
    )
}

class PageLayout extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header style={{
                        color: '#fff',
                        textAlign: "center",
                        fontWeight: 'bold'
                    }}>
                        <Row>
                            <Col span={10}>
                                你好舊時光
                            </Col>
                            <Col span={8}>
                                <Input placeholder="請輸入你想要的。。。"></Input>
                            </Col>
                            <Col span={6}>
                                <Avatar style={{
                                    backgroundColor: '#666',
                                    marginRight: 20
                                }} icon="user"></Avatar>
                                <Dropdown overlay={DropMenu}>
                                    <span>hi, <Icon type="down"></Icon></span>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Header>
                    <Layout>
                        <Sider>
                            <Menu style={{
                                width: 256,
                                height: '90vh',
                                overflow: 'auto',
                                miniWidth: 256,
                            }
                            } defaultOpenKeys={['sub1']} mode="inline">
                                <Menu.SubMenu key="sub1" title={<span><Icon type="smile-0"></Icon>部分UI組件</span>}>
                                    <Menu.Item key="sub1-1">
                                        <Link to={"table"}>
                                            表格
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="sub1-2">
                                        <Link to={"label"}>
                                            label標簽頁
                                        </Link>
                                    </Menu.Item>
                                </Menu.SubMenu>
                                
                            </Menu>
                        </Sider>
                       
                        <Content>
                         
                            {this.props.children}
                        </Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        )
    }
}
export default PageLayout;