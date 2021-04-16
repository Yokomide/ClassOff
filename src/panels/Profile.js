import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import { View } from '@vkontakte/vkui';
import { Group } from '@vkontakte/vkui';
import Gradient from '@vkontakte/vkui/dist/components/Gradient/Gradient'
import { Avatar } from '@vkontakte/vkui';
import { Title } from '@vkontakte/vkui';
import { Text } from '@vkontakte/vkui';
import { withAdaptivity } from '@vkontakte/vkui';
import { SizeType } from '@vkontakte/vkui';
import { SimpleCell } from '@vkontakte/vkui';
import { IconButton } from '@vkontakte/vkui';
import { Icon28AddOutline } from '@vkontakte/icons';
import { Icon28SchoolOutline } from '@vkontakte/icons';
import { Icon28SearchOutline} from '@vkontakte/icons';
import { CellButton } from '@vkontakte/vkui';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import bridge from '@vkontakte/vk-bridge';

import './Profile.css';

const Profile = ({id, go, fetchedUser, sizeX}) => (
  <Panel id={id}>
    <PanelHeader
      left={<PanelHeaderBack onClick={go} data-to="home"/>}>
    Профиль 
    </PanelHeader>
    <View activePanel="profile">
      {fetchedUser &&
        <Panel id="profile">
          <Group>
            <div style={{
              backgroundImage: 'linear-gradient(135deg, #FEC194 0%, #FF0061 100%)',
              marginTop: -9,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: 32,
              color: 'white',
            }}>
            <Avatar  size={96} src={fetchedUser.photo_200} />
              <Title style={{ marginBottom: 8, marginTop: 20}}  level="2" weight="medium">  {`${fetchedUser.first_name} ${fetchedUser.last_name}`}</Title>
            
              <Text style={{ marginBottom: 24 }}>Учащийся</Text>
              <Button size="m" color='white'mode="overlay_secondary">Редактировать</Button>
            </div>
            <Group mode="plain">
              <Header>Классы</Header>
              <Div>
              <div>
              <SimpleCell before={<Icon28SchoolOutline fill = '#FEC194'  />} description="Ростов">
                Английский нач. Классы</SimpleCell>
              </div>

              <div>
              <CellButton backgroundColor='#FEC194' before={<Icon28AddOutline fill = '#FEC194'   />}>Добавить класс</CellButton>
              </div>
              </Div>
            </Group>
          </Group>
        </Panel>}
      </View>
  </Panel>

);

  
  

  const ExampleWithAdaptivity = withAdaptivity(Profile, { sizeX: true });
  
  <ExampleWithAdaptivity />

  export default Profile;