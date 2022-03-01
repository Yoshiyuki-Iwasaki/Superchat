import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  HeaderLayout,
  Inner,
  Title,
  Logo,
  RightArea,
  DarkmodeButton,
  Hover,
  Avatar,
  UserName,
  List,
  ListItem,
  LinkText,
  Button,
} from './style';

const Presenter = ({ userList }) => {
  return (
    <HeaderLayout>
      <Inner>
        <Title>
          <Link href="/" as="/" passHref>
            <Logo>Superchat</Logo>
          </Link>
        </Title>
        <RightArea>
          <Hover>
            <Avatar>
              <Image src={`/avatar.png`} width={40} height={40} />
              {userList[0] && (
                <UserName>
                  {userList[0].fullname ? userList[0].fullname : 'noname'}
                </UserName>
              )}
            </Avatar>
            <List>
              <ListItem>
                <Link href="/profile/edit" as="/profile/edit" passHref>
                  <LinkText>プロフィール編集</LinkText>
                </Link>
              </ListItem>
            </List>
          </Hover>
        </RightArea>
      </Inner>
    </HeaderLayout>
  );
};

export default Presenter;
