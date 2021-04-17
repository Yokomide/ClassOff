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
import {Root} from '@vkontakte/vkui';
import {List} from '@vkontakte/vkui';
import { Icon36Add } from '@vkontakte/icons';
import { Icon28AddOutline } from '@vkontakte/icons';
import { Icon24Done } from '@vkontakte/icons';

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
import { Icon24MenuOutline } from '@vkontakte/icons';

import Script from './Script';
import './Home.css';

  class Mim extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        theme: '',
        activeView: 'profile'
      }
    }

    render () {
      return (
        <Root activeView={this.state.activeView}>
          <View activePanel="profile" id="profile">
            <Panel id="profile">
              <Group>
                <FormItem top="Выберите тему">
                  <SelectMimicry
                    placeholder="Не выбрана"
                    onClick={() => this.setState({ activeView: 'themes' })}
                  >{this.state.theme}</SelectMimicry>
                </FormItem>            
              </Group>
            </Panel>
          </View>
          <View activePanel="themes" id="themes">
            <Panel id="themes">
              <Group header={<Header mode="secondary">Выбрать тему</Header>}>
                <List>
                  <Cell
                    onClick={() => this.setState({ theme: 'Социально-педагогическая', activeView: 'profile' })}
                    after={this.state.theme === 'Социально-педагогическая' ? <Icon24Done fill="var(--accent)" /> : null}
                  >
                    Социально-педагогическая
                  </Cell>
                  <Cell
                    onClick={() => this.setState({theme: 'Художественная', activeView: 'profile' })}
                    after={this.state.theme === 'Художественная' ? <Icon24Done fill="var(--accent)" /> : null}
                  >
                    Художественная
                  </Cell>
                  <Cell
                    onClick={() => this.setState({ theme: 'Естественно-научная', activeView: 'profile' })}
                    after={this.state.theme === 'Естественно-научная' ? <Icon24Done fill="var(--accent)" /> : null}
                  >
                    Естественно-научная
                  </Cell>
                     <Cell
                    onClick={() => this.setState({ theme: 'Техническая', activeView: 'profile' })}
                    after={this.state.theme === 'Техническая' ? <Icon24Done fill="var(--accent)" /> : null}
                  >
                    Техническая
                  </Cell>

                     <Cell
                    onClick={() => this.setState({ theme: 'Туристско-краеведческая', activeView: 'profile' })}
                    after={this.state.theme === 'Туристско-краеведческая' ? <Icon24Done fill="var(--accent)" /> : null}
                  >
                    Туристско-краеведческая
                  </Cell>

                  <Cell
                    onClick={() => this.setState({ theme: 'Физкультурно-спортивная', activeView: 'profile' })}
                    after={this.state.theme === 'Физкультурно-спортивная' ? <Icon24Done fill="var(--accent)" /> : null}
                  >
                    Физкультурно-спортивная
                  </Cell>
                </List>
              </Group>
            </Panel>
          </View>
        </Root>
      )
    }
  }


const CustomPopout = withAdaptivity(({ onClose, viewWidth, go}) => {
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
        <div  className='fixeder'>
                           <Mim />
                           </div>
        <Div >
       		<Button stretched size="l" mode="commerce" onClick={go} data-to="profile" >Добавить</Button>
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
       <div onClick={onClick} >
           <Button className="coverAddBut" stretched size="l" after={<Icon36Add width={100} height={100} />}>
           Новый класс
           </Button>
        </div>

      </Panel>
    </View>
  );
}



const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader> OffClass</PanelHeader>
		{fetchedUser &&
		<Group >
			<Cell  onClick={go} data-to="profile"
				before={fetchedUser.photo_200 ? <Avatar  src={fetchedUser.photo_200}/> : null}
        after = {<Icon24MenuOutline fill="#99A2AD"/>}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}
		  	
			<Div>
				<Window />
        <div onClick={go} data-to="search">
				<Button  className="coverSearchBut" stretched size="l" after={<Icon28SearchOutline width={100} height={100} />}>
	Найти класс
</Button>
</div>
			</Div>		
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
