import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import {IconButton} from '@vkontakte/vkui';

import Group from '@vkontakte/vkui/dist/components/Group/Group';
import {SimpleCell} from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import {Icon28MessageOutline} from '@vkontakte/icons';

const Member = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
			>
			Участники
		</PanelHeader>
		<Group header={<Header mode="secondary">Список</Header>}>
		 <SimpleCell before={<Avatar size={40} src={getAvatarUrl('user_xyz')} />} 
		 after={<IconButton><Icon28MessageOutline /></IconButton>}>
		 Игорь Фёдоров
		 </SimpleCell>
		 </Group>
	</Panel>

);


export default Member;
