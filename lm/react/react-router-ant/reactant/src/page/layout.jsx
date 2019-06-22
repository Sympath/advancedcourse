import React from "react";
import {
    Layout, Row, Col, Avatar, Input,
    Menu, Dropdown, Icon, Badge
} from 'antd';
import { Route, Link } from "react-router-dom";

import MyTable from "./mytable/index";

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

function Label(params) {

    return (
        <div>label</div>
    )

}
function Post(props) {

    return (
        <div>{props.match.params.id}</div>
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
                                        <Link to={{
                                            pathname: '/table',
                                            search: '?type=all&a=1'
                                        }}>
                                            表格
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="sub1-2">
                                        <Link to={"/label"}>
                                            label標簽頁
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="sub1-3">
                                        <Link to={"/post/abcdefg"}>
                                            文章詳情
                                        </Link>
                                    </Menu.Item>
                                </Menu.SubMenu>

                            </Menu>
                        </Sider>

                        <Content style={{marginLeft:'5%'}}>
                            <Route path="/table" component={MyTable}></Route>
                            <Route path="/label" component={Label}></Route>
                            <Route path="/post/:id" component={Post}></Route>
                        </Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        )
    }
}
export default PageLayout;