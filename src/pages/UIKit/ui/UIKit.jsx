import React from "react";

import {
	BaseButton, BaseInput, BaseTextarea,
	BaseCheckbox, BaseRadiocheck,
	BaseToggleBox, BaseToggleRadio, BaseSwitchRadio,
	BaseSelect,
	MyLabel, Br, Grid, GridСell,
} from "../../../shared/ui";

import {
	ColorsDemo
} from "../../../entities/ui";

import { DiCodeigniter, DiJsBadge, DiHtml5, DiGithubBadge, DiNpm } from "react-icons/di";
import { SiCss3 } from "react-icons/si";
import { FaReact, FaYandex } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { HiCheckCircle, HiMail } from "react-icons/hi";
import { IoAccessibilitySharp } from "react-icons/io5";

const baseSelectCss = {

};

const baseSelectOpt = {
	title: "Выбрать что-то",
	arrOption: ["что-то 1", "что-то 2", "что-то 3", "что-то 4", "что-то 5"],
	iconUrl: null
};

function UIKit() {
	return (
		<>
			<Br />
			<Grid>
				<GridСell>
					<MyLabel labelText="Описание"><BaseButton text="Кнопка" ></BaseButton></MyLabel>
					<MyLabel labelText="Описание"><BaseInput defaultValue="По умолчанию" /></MyLabel>
					<MyLabel labelText="Описание"><BaseTextarea placeholder="Пустой" /></MyLabel>
				</GridСell>
				<GridСell>
					<MyLabel labelText="Описание" ><BaseButton text="Кнопка" disabled /></MyLabel>
					<MyLabel labelText="Описание" ><BaseInput readonly placeholder="Пустой" /></MyLabel>
					<MyLabel labelText="Описание" ><BaseTextarea readonly defaultValue="По умолчанию" /></MyLabel>
				</GridСell>
				<GridСell>
					<MyLabel labelText="Описание" ><BaseButton text="Кнопка" /></MyLabel>
					<MyLabel labelText="Описание" ><BaseInput /></MyLabel>
					<MyLabel labelText="Описание" ><BaseTextarea /></MyLabel>
				</GridСell>
			</Grid>
			<Br />
			<Grid>
				<GridСell>
					<MyLabel labelText="Что выбрать" position="top"><BaseSelect styles={baseSelectCss} options={baseSelectOpt} /></MyLabel>
					<MyLabel labelText="Переключить" position="left"><BaseToggleBox /></MyLabel>
					<MyLabel labelText="Переключить" position="right"><BaseToggleRadio /></MyLabel></GridСell>
				<GridСell>
					<MyLabel labelText="Переключить"><BaseCheckbox /></MyLabel>
					<MyLabel labelText="Переключить" position="right"><BaseRadiocheck /></MyLabel>
					<MyLabel labelText="Переключить" position="bottom"><BaseSwitchRadio /></MyLabel>
				</GridСell>
				<GridСell>
					<MyLabel labelText="Переключить"><BaseCheckbox disabled /></MyLabel>
					<MyLabel labelText="Переключить" position="right"><BaseRadiocheck disabled /></MyLabel>
					<MyLabel labelText="Переключить" position="bottom"><BaseSwitchRadio disabled /></MyLabel>
				</GridСell>
			</Grid>
			<Br />
			<Grid>
				<GridСell>
					<BaseButton text="Жми" floatIcon="top"><DiHtml5 /></BaseButton>
					<BaseButton text="Кнопка" floatIcon="right"><SiCss3 /></BaseButton>
					<BaseButton text="Кнопка" floatIcon="left"><DiJsBadge /></BaseButton>
					<BaseButton text="Кнопка" floatIcon="bottom"><FaReact /></BaseButton>
				</GridСell>
				<GridСell>
					<MyLabel labelText="Описание" position="top"><BaseButton><DiNpm /></BaseButton></MyLabel>
					<MyLabel labelText="Описание" position="right"><BaseButton><DiGithubBadge /></BaseButton></MyLabel>
					<MyLabel labelText="Описание" position="left"><BaseButton><BiCodeAlt /></BaseButton></MyLabel>
					<MyLabel labelText="Описание" position="bottom"><BaseButton ><FaYandex /></BaseButton></MyLabel>
				</GridСell>
				<GridСell>
					<BaseButton disabled text="Жми" floatIcon="top"><IoAccessibilitySharp /></BaseButton>
					<BaseButton disabled text="Кнопка" floatIcon="right"><HiCheckCircle /></BaseButton>
					<BaseButton disabled text="Кнопка" floatIcon="left"><HiMail /></BaseButton>
					<BaseButton disabled text="Кнопка" floatIcon="bottom"><DiCodeigniter /></BaseButton>
				</GridСell>
			</Grid>
			<Br />
			<ColorsDemo />
			<Br />

			{
				/*
					3 стиля у кнопок / транспарент / бордерр снизу / бордер везде
					инпут с иконкой
					варнинги на инпут
					кнопка транспаред стиль
					инпут транспаред стиль с бордером снизу
					текстареа транспаред стиль с бордером снизу
					текст с боковым бордером
					текст с иконкой
					боковое складывающиеся меню
					верхнее меню страниц с найстройками темы
					элемент меню с текстом с иконкой с боковым бордером
					кнопки некст и прев (кнопка с иконкой)
					пагинация два вида
					мини уведомления на инпут, оповищение об обязательых полях
					красные звездочки на лейбл инпут, оповищение об обязательых полях
					теги
					уведомление (текст с кнопкой 3 цвета)
					микро уведомление иконка снизу текст
					загрузка файла виджет
					модальные окна подтверждения
					виджет визуальной закладки два стиля
					заглушка на фото
					темная и светлая вариант для каждой темы
				*/
			}

		</>
	);
}

export { UIKit };
