import React from 'react';
import Layout from '../components/layout';
import ChatList from '../components/chat';
import Sidebar from '../components/sidebar';

const Presenter = () => {
  return (
    <Layout>
      <Sidebar />
      <ChatList />
    </Layout>
  );
};

export default Presenter;
