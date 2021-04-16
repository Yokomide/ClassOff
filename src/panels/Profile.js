import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import { View } from '@vkontakte/vkui';
import { Group } from '@vkontakte/vkui';
import { Gradient } from '@vkontakte/vkui';
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



 class ProfYes extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        profile: ''
    }

}
}

const Profile = ({ sizeX}) => {
    return (
      <View activePanel="profile">
        <Panel id="profile">
          <Group>
            <Gradient style={{
              margin: sizeX === SizeType.REGULAR ? '-7px -7px 0 -7px' : 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: 32,
            }}>
            <Avatar size={96} />
              <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">Имя Фамилия</Title>
              <Text style={{ marginBottom: 24, color: 'var(--text_secondary)' }}>Учащийся</Text>
              <Button size="m" mode="secondary">Редактировать</Button>
            </Gradient>
            <Group mode="plain">
              <Header>Классы</Header>
              <Div>
              <div>
              <SimpleCell before={<Icon28SchoolOutline />} description="Ростов">
                Английский нач. Классы</SimpleCell>
              </div>

              <div>
              <CellButton before={<Icon28AddOutline />}>Добавить класс</CellButton>
              </div>
              </Div>

            </Group>
          </Group>
        </Panel>
      </View>
    )
  }


const NameN = ({fetchedUser, id}) => (
  <Panel id={id}>

    <Group>

   </Group>
  </Panel>

  );


const ProfBack = props => (
  <Panel id={props.id}>
    <PanelHeader
      left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
    >
    Профиль 
    </PanelHeader>
      <Profile />
      <NameN />
  </Panel>

);

  

ProfBack.propTypes = {
	 id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

NameN.propTypes = {
   id: PropTypes.string.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

  

  const ExampleWithAdaptivity = withAdaptivity(Profile, { sizeX: true });
  
  <ExampleWithAdaptivity />

  export default ProfBack;