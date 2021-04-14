import React from 'react';
import PropTypes from 'prop-types';

import View from '@vkontakte/vkui/dist/components/View/View';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import CellButton from '@vkontakte/vkui/dist/components/CellButton/CellButton';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import {Cell} from '@vkontakte/vkui';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import {Icon28AddOutline} from '@vkontakte/icons';
import {withAdaptivity} from '@vkontakte/vkui';
import {PopoutWrapper} from '@vkontakte/vkui';
import {ModalDismissButton} from '@vkontakte/vkui';
import { ModalPageHeader, ANDROID, IOS, usePlatform } from '@vkontakte/vkui';
import {Fragment} from '@vkontakte/vkui';
import {PanelHeaderButton} from '@vkontakte/vkui';
import {ViewWidth} from '@vkontakte/vkui';
import {FormItem} from '@vkontakte/vkui';
import {Input} from '@vkontakte/vkui'

const MODAL_PAGE_FILTERS = 'filters';
const MODAL_PAGE_COUNTRIES = 'countries';
const MODAL_PAGE_STORY_FEEDBACK = 'story-feedback';
const MODAL_PAGE_USER_INFO = 'user-info';
const MODAL_PAGE_FULLSCREEN = 'fullscreen';
const MODAL_PAGE_DYNAMIC = 'dynamic';

const CustomPopout = withAdaptivity(({ onClose, viewWidth }) => {
  return (
    <PopoutWrapper onClick={onClose}>
      <div style={{
        backgroundColor: "var(--background_content)",
        borderRadius: 8,
        position: "relative",
        padding: "12px"
      }}>
      <FormItem top = "Класс">
        <Input placeholder ="Название класса" />
        </FormItem>
        <Div>
       		<Button stretched size="l" mode="commerce" >Добавить</Button>
     	</Div>

        {viewWidth >= ViewWidth.SMALL_TABLET && <ModalDismissButton onClick={onClose} />}
      </div>
    </PopoutWrapper>
  )
}, {
  viewWidth: true
})

const Window = () => {
  const [popout, setPopout] = React.useState(null);
  
  const onClick = () => setPopout(
    <CustomPopout onClose={() => setPopout(null)} />
  );

  return (
    <View popout={popout} activePanel="popout">
      <Panel id="popout">
       
           <CellButton stretched size="l" mode="secondary" onClick={onClick}  before={<Icon28AddOutline />}>
           Новый класс
           </CellButton>

      </Panel>
    </View>
  );
}



const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Цифровой прорыв: Off-Class</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">Профиль</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">Пример кнопок навигации</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Показать Персика
				</Button>
			</Div>	
			<Div>

			<Div>

  <Button stretched size="l" mode="secondary" onClick={go} data-to="member">
	Участники
</Button>

			</Div>		
				<Window />
			</Div>		
		</Group>
	</Panel>


);



Home.propTypes = {
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

export default Home;
