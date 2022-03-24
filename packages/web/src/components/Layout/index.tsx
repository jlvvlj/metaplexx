/* eslint-disable react/display-name */
import React from 'react';
import { Layout } from 'antd';

import { AppBar } from '../AppBar';
import { Footer } from '../Footer';

const { Header, Content } = Layout;

export const AppLayout = React.memo((props: any) => {
  return (
    <>
      <Layout id={'main-layout'}>
        <span id={'main-bg'}></span>
        <span id={'bg-gradient'}></span>
        <span id={'static-header-gradient'}></span>
        <span id={'static-end-gradient'}></span>
        <Header className="App-Bar">
          <AppBar />
        </Header>
        <Layout>
          <Content
            style={{
              overflow: 'scroll',
              padding: '30px 48px ',
            }}
          >
            {props.children}
          </Content>
        </Layout>
      {/*   <div className="grid grid-cols-3 gap-5 bg-black p-6">
          <div className="flex flex-col justify-start items-start">
            <div className="w-full h-80">
              <img
                src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-start items-start pt-2 w-full">
              <div className="w-full flex flex-col justify-between items-start h-full border-l border-white pl-3 h-28">
                <div className="flex justify-between items-start flex-col">
                  <h1 className="text-white text-sm">NFT</h1>
                  <p className="text-white text-base font-medium">
                    Primal Wave
                  </p>
                </div>
                <div className="flex justify-center items-center text-white text-sm app-right-border rounded-xl p-2 cursor-pointer">
                  Go to auction
                </div>
              </div>
              <div className="w-full flex flex-row justify-between items-start h-full border-l border-white pl-3 h-28">
                <div className="flex justify-between items-start flex-col w-full">
                  <h1 className="text-white text-sm">Starting bid</h1>
                  <p className="text-white text-base font-medium">0%N/A</p>
                </div>
                <div className="flex justify-between items-start flex-col w-full">
                  <h1 className="text-white text-sm">Ending in</h1>
                  <p className="text-white text-base font-medium">7hr</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/*<Footer />*/}
      </Layout>
    </>
  );
});
