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
import {RichCell} from '@vkontakte/vkui';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import {Footer} from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import {Icon28AddOutline} from '@vkontakte/icons';
import {Icon24Dismiss} from '@vkontakte/icons';
import {withAdaptivity} from '@vkontakte/vkui';
import {withPlatform} from '@vkontakte/vkui';
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
import { AdaptivityContext} from '@vkontakte/vkui/dist/components/AdaptivityProvider/AdaptivityContext';
import {Input} from '@vkontakte/vkui'
import { Icon28MoreVertical } from '@vkontakte/icons';

import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';


const thematics = [
  {id: 8467892, name: "Волейбол МБОУ СОШ №31 3 класс"},
  {id: 2579074, name: "Баскетбол МОУ 'Школа №13' подгруппа 1"},
  {id: 8576392, name: "Шахматы Гимназия №42"},
  {id: 2058674, name: "Пинг-понг тренер Петров Школа №4"},
  {id: 1039572, name: "Каратэ 1 класс Воронеж"},
  {id: 2275639, name: "Футбол Лицей №12 4 класс"},
  {id: 9236567, name: "Плавание 'Меридиан' преподаватель Иванова"},
  {id: 5574332, name: "Французский 2 класс МБОУ 'Школа №56'"},
  {id: 1014281, name: "Балет Лицей №18 группа девочек"},
  {id: 4343288, name: "Дзюдо Школа №84 2 класс"},
  {id: 3134217, name: "Тхеквондо группа Мальчиков"},
  {id: 3115458, name: "Доп. Занятия по Математике 1 класс"},
  {id: 3234119, name: "Бокс Школа №45 3 класс"},
  {id: 4533120, name: "Кикбоксинг тренер И. Смирнов"},
  {id: 6783121, name: "Танцевальная школа им. Иванова 2 класс"},
  {id: 3234122, name: "ММА для выпускников школы Танцев"},
  {id: 5126543, name: "Шашки"},
  {id: 1345124, name: "Английский нач. Классы"},
  {id: 3134555, name: "Радиотехника Ростов-на-Дону"},
  {id: 3435367, name: "Моделирование школа Творчества"},
  {id: 5346788, name: "Рисование школа Исскуств группа 4"},
  {id: 8383275, name: "Сольфеджио"}
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
        <Group>
          <Search value={this.state.search} onChange={this.onChange} after={null}/>  
          {this.thematics.length > 0 && this.thematics.map(thematic => <RichCell before={<Avatar shadow={true} size={36} ></Avatar>} after={<Icon28AddOutline />} caption={'id: '+thematic.id}>{thematic.name}</RichCell>)}
          {this.thematics.length === 0 && <Footer>Ничего не найдено</Footer>}
        </Group>
      </React.Fragment>
    );
  }
}


const ClassSearch = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Поиск класса
		</PanelHeader>
    <SimpleSearch />
	</Panel>
);

ClassSearch.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default ClassSearch;
