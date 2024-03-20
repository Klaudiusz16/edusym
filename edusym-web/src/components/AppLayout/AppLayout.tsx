import { ReactElement } from 'react'
import { Layout, ConfigProvider, ThemeConfig, message } from 'antd';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
const { Header: AntHeader, Footer, Sider, Content } = Layout;
import { createContext } from 'react';

export const ThemeContext = createContext<any>(null);


export default function AppLayout({ children }: { children?: ReactElement | ReactElement[] }) {
    const [messageApi, contextHolder] = message.useMessage();


    const renderMessege = (message: string) => {
        messageApi.info(message);
    };



    return (
        <ThemeContext.Provider value={{ renderMessege: renderMessege }}>
            <ConfigProvider
                theme={theme}
            >
                <Layout className='h-screen'>
                    {contextHolder}
                    <Sider width="15%" >
                        <Sidebar />
                    </Sider>
                    <Layout>
                        <AntHeader className="px-0">
                            <Header />
                        </AntHeader>
                        <Content className='p-5 overflow-y-scroll'>{children}</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout></ConfigProvider>
        </ThemeContext.Provider>
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