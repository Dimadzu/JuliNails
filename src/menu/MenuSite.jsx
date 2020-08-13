import React from 'react';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { Menu} from 'antd';
import { HomeOutlined, UserOutlined, DollarCircleOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;
class MenuSite extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item  icon={<HomeOutlined />}>
        <Link className='menu-item-link' to='/'>Главная</Link>
        </Menu.Item>
        <SubMenu icon={<UserOutlined />} title="Обо мне">
          <Menu.ItemGroup title="Навигация по разделу">
            <Menu.Item key="setting:1"><Link className='menu-item-link' to='/about'>Обо мне</Link></Menu.Item>
            <Menu.Item key="setting:2">Мои работы</Menu.Item>
            <Menu.Item key="setting:3">Контакты</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item  icon={<DollarCircleOutlined />}>
        <Link className='menu-item-link' to='/service'>Услуги</Link>
        </Menu.Item>
      </Menu>
     
      
    );
     
  }
  
}




export default MenuSite;
