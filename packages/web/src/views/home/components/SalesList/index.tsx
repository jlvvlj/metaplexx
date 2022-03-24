import { useWallet } from '@solana/wallet-adapter-react';
import { Col, Layout, Row, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import { useMeta } from '../../../../contexts';
import { CardLoader } from '../../../../components/MyLoader';
import { Banner } from '../../../../components/Banner';
import { HowToBuyModal } from '../../../../components/HowToBuyModal';

import { useAuctionsList } from './hooks/useAuctionsList';
import { AuctionRenderCard } from '../../../../components/AuctionRenderCard';

const { TabPane } = Tabs;
const { Content } = Layout;

export enum LiveAuctionViewState {
  All = '0',
  Participated = '1',
  Ended = '2',
  Resale = '3',
}

export const SalesListView = () => {
  const [activeKey, setActiveKey] = useState(LiveAuctionViewState.All);
  const { isLoading } = useMeta();
  const { connected } = useWallet();
  const { auctions, hasResaleAuctions } = useAuctionsList(activeKey);

  return (
    <>
      <div id="mobile-banner">
        <img
          className="banner-img"
          src="https://img.freepik.com/free-vector/data-visualization-dynamic-wave-pattern-vector_53876-77457.jpg"
        />
        <div className="banner-content">
          <div id={'main-heading'}>The Wave Marketplace</div>
          <div id={'sub-heading'}>Buy Collaborative Sound Waves NFTs.</div>
          <HowToBuyModal buttonClassName="secondary-btn" />
        </div>
        <div
          id={'current-banner'}
          style={{
            backgroundImage:
              'https://img.freepik.com/free-vector/data-visualization-dynamic-wave-pattern-vector_53876-77457.jpg',
          }}
        >
          <span id={'gradient-banner'}></span>
          <div id="banner-inner">
            <div id={'message-container'}>
              <div id={'main-heading'}>The Wave Marketplace</div>
              <div id={'sub-heading'}>Buy Collaborative Sound Waves NFTs.</div>
              <HowToBuyModal buttonClassName="secondary-btn" />
            </div>
          </div>
        </div>
      </div>
      <Banner
        // src="https://st3.depositphotos.com/33294434/35928/i/450/depositphotos_359288002-stock-photo-abstract-digital-background-network-connection.jpg"
        src="https://i.pinimg.com/originals/1d/73/5a/1d735ad8eee8350adc96d50e1421ee6d.gif"
        //src='https://ak.picdn.net/shutterstock/videos/30581269/thumb/1.jpg'
        //src="https://img.freepik.com/free-vector/data-visualization-dynamic-wave-pattern-vector_53876-77457.jpg"

        headingText="The Wave Marketplace."
        subHeadingText="Buy Collaborative Sound Waves NFTs."
        actionComponent={<HowToBuyModal buttonClassName="secondary-btn" />}
        useBannerBg
      />
      <Layout>
        <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Col style={{ width: '100%', marginTop: 32 }}>
            <Row>
              <Tabs
                activeKey={activeKey}
                onTabClick={key => setActiveKey(key as LiveAuctionViewState)}
              >
                <TabPane
                  tab={
                    <>
                      <span className="live"></span> Live
                    </>
                  }
                  key={LiveAuctionViewState.All}
                ></TabPane>
                {hasResaleAuctions && (
                  <TabPane
                    tab="Secondary Marketplace"
                    key={LiveAuctionViewState.Resale}
                  ></TabPane>
                )}
                <TabPane tab="Ended" key={LiveAuctionViewState.Ended}></TabPane>
                {connected && (
                  <TabPane
                    tab="Participated"
                    key={LiveAuctionViewState.Participated}
                  ></TabPane>
                )}
              </Tabs>
            </Row>
            <Row>
              <div className="artwork-grid">
                {isLoading &&
                  [...Array(10)].map((_, idx) => <CardLoader key={idx} />)}
                {!isLoading &&
                  auctions.map(auction => (
                    <Link
                      key={auction.auction.pubkey}
                      to={`/auction/${auction.auction.pubkey}`}
                    >
                      <AuctionRenderCard auctionView={auction} />
                    </Link>
                  ))}
              </div>
            </Row>
          </Col>
        </Content>
      </Layout>
    </>
  );
};
