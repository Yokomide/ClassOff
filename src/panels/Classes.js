import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import {IconButton} from '@vkontakte/vkui';
import {getAvatarUrl} from '@vkontakte/vk-bridge';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import {SimpleCell} from '@vkontakte/vkui';
import {Avatar} from '@vkontakte/vkui';
import {Icon28MessageOutline} from '@vkontakte/icons';

const Classes = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
			>
			Участники
		</PanelHeader>
		<Group header={<Header mode="secondary">Список</Header>}>

		  <SimpleCell  
		  before={<Avatar size={36} src={getAvatarUrl('user_va')} />}
		  after={<IconButton><Icon28MessageOutline /></IconButton>}>
		 Игорь Фёдоров
		 </SimpleCell>

		  <SimpleCell
		 after={<IconButton><Icon28MessageOutline /></IconButton>}>
		 Иван Гречкин
		 </SimpleCell>

		  <SimpleCell
		 after={<IconButton><Icon28MessageOutline /></IconButton>}>
		 Собака Кот
		 </SimpleCell>

		 </Group>
	</Panel>

);


export default Classes;
