import { ReactElement } from 'react'
import { Layout, ConfigProvider, ThemeConfig } from 'antd';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
const { Header: AntHeader, Footer, Sider, Content } = Layout;


export default function AppLayout({ children }: { children?: ReactElement | ReactElement[] }) {
    return (
        <ConfigProvider
            theme={theme}
        >
            <Layout className='h-screen'>
                <Sider width="15%" >
                    <Sidebar />
                </Sider>
                <Layout>
                    <AntHeader className="px-0">
                        <Header />
                    </AntHeader>
                    <Content>{children}</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout></ConfigProvider>
    )
}


const theme: ThemeConfig = {
    components: {
        Layout: {
            siderBg: "#222831",
            headerBg: "#222831"
        },
        Input: {
            activeBg: "white",
            colorPrimaryBg: "white"
        },
        Button: {
            defaultBg: "red"
        }
    },
    token: {
        colorPrimary: '#222831',
        borderRadius: 2,


        // Alias Token
        colorBgContainer: 'white',
    }
}