import React from 'react';
import Layout from '../components/templates/layout';
import ChatList from '../components/organisms/chat';
import Sidebar from '../components/organisms/sidebar';

const Presenter = () => {
  return (
    <Layout>
      <Sidebar />
      <ChatList />
    </Layout>
  );
};

export default Presenter;
