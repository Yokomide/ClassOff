import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import { AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Spotty from './panels/Spotty';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home id='home' fetchedUser={fetchedUser} go={go} />
					<Persik id='persik' go={go} />
					<Spotty id='spotty' go={go} />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
<View activePanel="button">
  <Panel id="button">
    <PanelHeader>CellButton</PanelHeader>
    <Group header={<Header mode="secondary">Базовый пример</Header>}>
      <CellButton>Добавить новую школу</CellButton>
      <CellButton mode="danger">Удалить беседу</CellButton>
    </Group>
    <Group header={<Header mode="secondary">Иконки</Header>}>
      <CellButton before={<Icon28AddOutline />}>Добавить родственника</CellButton>
      <CellButton before={<Icon28DeleteOutline />} mode="danger">Удалить беседу</CellButton>
    </Group>
    <Group header={<Header mode="secondary">Аватарки</Header>}>
      <CellButton before={<Avatar shadow={false} size={40} ><Icon24Add /></Avatar>}>Добавить участников</CellButton>
      <CellButton before={<Avatar shadow={false} size={48} ><Icon28AddOutline /></Avatar>}>Создать беседу</CellButton>
      <CellButton before={<Avatar shadow={false} size={72} mode="image" ><Icon28AddOutline /></Avatar>}>Создать плейлист</CellButton>
    </Group>
    <Group header={<Header mode="secondary">Центрирование</Header>}>
      <CellButton centered before={<Icon24Add />}>Создать беседу</CellButton>
    </Group>
  </Panel>
</View>


}

export default App;

