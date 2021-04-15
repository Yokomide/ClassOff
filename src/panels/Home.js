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
import {Icon28SearchOutline} from '@vkontakte/icons';
import {Icon24Dismiss} from '@vkontakte/icons';
import {withAdaptivity} from '@vkontakte/vkui';
import {PopoutWrapper} from '@vkontakte/vkui';
import {ModalDismissButton} from '@vkontakte/vkui';
import { ModalPageHeader, ANDROID, IOS, usePlatform } from '@vkontakte/vkui';
import {Fragment} from '@vkontakte/vkui';
import {PanelHeaderButton} from '@vkontakte/vkui';
import {PanelHeaderClose} from '@vkontakte/vkui';
import {ViewWidth} from '@vkontakte/vkui';
import {SelectMimicry} from '@vkontakte/vkui';
import {SizeType} from '@vkontakte/vkui';
import {Search} from '@vkontakte/vkui';
import {FormItem} from '@vkontakte/vkui';
import {Input} from '@vkontakte/vkui'

import Script from './Script';


  const thematics = [
    
    {id: 3119, name: "Гимназия"},
    {id: 3120, name: "Колледж"},
    {id: 3121, name: "Лицей"},
    {id: 3122, name: "Техникум"},
    {id: 3123, name: "Университет"},
    {id: 3124, name: "Школа"},
    {id: 3125, name: "Институт"},
    {id: 3126, name: "Обучающие курсы"},
    {id: 3276, name: "Дополнительное образование"},
    {id: 3275, name: "Тренинг, семинар"},
    {id: 3127, name: "Танцевальная школа"}

  ];


 class SimpleSearch extends React.Component {

    constructor (props) {
      super(props);
      this.state = {
        search: ''
      }
      this.onChange = this.onChange.bind(this);
    }

    onChange (e) { this.setState({ search: e.target.value }); }

    get thematics () {
      const search = this.state.search.toLowerCase();
      return thematics.filter(({name}) => name.toLowerCase().indexOf(search) > -1);
    }

    render() {
      return (
        <React.Fragment>
          <PanelHeader
            right={<PanelHeaderButton onClick={this.props.goHeaderSearch}><Icon28AddOutline /></PanelHeaderButton>}
            separator={this.props.sizeX === SizeType.REGULAR}
          >
            Выбор тематики
          </PanelHeader>
          <Group>
            <Search value={this.state.search} onChange={this.onChange} after={null}/>  
            {this.thematics.length > 0 && this.thematics.map(thematic => <Cell key={thematic.id}>{thematic.name}</Cell>)}
            {this.thematics.length === 0 && <Footer>Ничего не найдено</Footer>}
          </Group>
        </React.Fragment>
      );
    }
  }

const CustomPopout = withAdaptivity(({ onClose, viewWidth }) => {
  return (
    <PopoutWrapper onClick={onClose}>
      <div style={{
        backgroundColor: "var(--background_content)",
        borderRadius: 8,
        position: "relative",
        padding: "12px",
      }}>
<ModalPageHeader

          left=<PanelHeaderClose onClick={onClose}/>
        >
         Новый класс
        </ModalPageHeader>
       <CellButton className="classAvatar" before={<Avatar shadow={true} size={72} ><Icon28AddOutline /></Avatar>} >
       Добавить обложку
        </CellButton>

      <FormItem top = "Класс">
        <Input placeholder ="Название класса" />
        </FormItem>

        	<FormItem top="Тематика">            
              <SelectMimicry placeholder="Выбрать тематику" onClick={() => this.setActiveModal(MODAL_PAGE_COUNTRIES)} />         
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
			<Cell onClick={go} data-to="profile"
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
				<Window />
				<CellButton before={<Icon28SearchOutline />} onClick={go} data-to="search">
	Найти класс
</CellButton>
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
