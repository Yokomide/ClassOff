import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import ActionSheet from '@vkontakte/vkui';
import { View } from '@vkontakte/vkui';
import { Group } from '@vkontakte/vkui';
import { Avatar } from '@vkontakte/vkui';
import { Title } from '@vkontakte/vkui';
import { Text } from '@vkontakte/vkui';
import { withAdaptivity } from '@vkontakte/vkui';
import { SizeType } from '@vkontakte/vkui';
import { SimpleCell } from '@vkontakte/vkui';
import { IconButton } from '@vkontakte/vkui';
import { Icon28AddOutline } from '@vkontakte/icons';
import { Icon28SchoolOutline } from '@vkontakte/icons';
import { Icon28SearchOutline } from '@vkontakte/icons';
import { Icon16Favorite } from '@vkontakte/icons';
import { Icon28PaletteOutline } from '@vkontakte/icons';
import { CellButton } from '@vkontakte/vkui';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import bridge from '@vkontakte/vk-bridge';
import { Tabs, TabsItem } from '@vkontakte/vkui';

import './Profile.css';

const ClassProfile = ({ id, go, fetchedUser, sizeX ,name}) => (

  <Panel id={id}>
    <PanelHeader
      left={<PanelHeaderBack onClick={go} data-to="home" />}>
      Профиль Класса
    </PanelHeader>
    <View activePanel="profile">
      {fetchedUser &&
        <Panel id="profile">
          <Group>
            <div style={{
              backgroundImage: 'linear-gradient(135deg, #94FED8 0%, #0066FF 100%)',
              marginTop: -9,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: 32,
              color: 'white',
            }}>
              <Avatar shadow={true} size={96} />
              <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">Английский нач. Классы</Title>
            </div>
            <Group mode="plain">
              <Div><Tabs>
                <TabsItem className="tabStyle" selected>Главная</TabsItem>
                <TabsItem onClick={go} data-to="classprofile">
                  Ученики
                </TabsItem>
              </Tabs>
              </Div><Div>
              <div style={{
                borderRadius: "10px",
                backgroundImage: 'linear-gradient(135deg, #e9edf5 0%, #e9edf5 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 40,
                color: 'black',
              }}>
                <Title style={{ marginBottom: 8, marginTop: 1 }} level="2" weight="medium"> Краткая информация </Title>
                <Title style={{ marginBottom: 8, marginTop: 1 }} level="3" weight="medium"> Здесь содержится информация о классе </Title>
              </div></Div><Div>
              <div style={{
                borderRadius: "10px",
                backgroundImage:'linear-gradient(135deg, #0066FF 0%, #0066FF 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 32,
                color: 'white',
              }}>
                <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium"> Доска объявлений</Title>
              </div></Div>
              <Div>
              <div style={{
                borderRadius: "10px",
                backgroundImage: 'linear-gradient(135deg, #e9edf5 0%, #e9edf5 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 40,
                color: 'black',
              }}>
                <Title style={{ marginBottom: 8, marginTop: 1 }} level="2" weight="medium"> Новость </Title>
                <Title style={{ marginBottom: 8, marginTop: 1 }} level="3" weight="medium"> Краткая информация о новости </Title>
              </div>
              </Div>
              <Div>
              <div style={{
                borderRadius: "10px",
                backgroundImage: 'linear-gradient(135deg, #e9edf5 0%, #e9edf5 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 40,
                color: 'black',
              }}>
                <Title style={{ marginBottom: 8, marginTop: 1 }} level="2" weight="medium"> Новость </Title>
                <Title style={{ marginBottom: 8, marginTop: 1 }} level="3" weight="medium"> Краткая информация о новости </Title>
              </div>
              </Div>
            </Group>
          </Group>
        </Panel>}
    </View>
  </Panel>

);
ClassProfile.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};


const ExampleWithAdaptivity = withAdaptivity(ClassProfile, { sizeX: true });

<ExampleWithAdaptivity />

export default ClassProfile;