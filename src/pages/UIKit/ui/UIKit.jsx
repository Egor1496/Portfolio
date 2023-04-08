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
					<MyLabel labelText="Описание">
						<BaseButton text="Кнопка" />
					</MyLabel>
					<MyLabel labelText="Описание">
						<BaseInput defaultValue="По умолчанию" />
					</MyLabel>
					<MyLabel labelText="Описание">
						<BaseTextarea placeholder="Пустой" />
					</MyLabel>
				</GridСell>
				<GridСell>
					<MyLabel labelText="Описание" >
						<BaseButton text="Кнопка" disabled />
					</MyLabel>
					<MyLabel labelText="Описание" >
						<BaseInput readonly placeholder="Пустой" />
					</MyLabel>
					<MyLabel labelText="Описание" >
						<BaseTextarea readonly defaultValue="По умолчанию" />
					</MyLabel>
				</GridСell>
				<GridСell>
					<MyLabel labelText="Описание" >
						<BaseButton text="Кнопка" />
					</MyLabel>
					<MyLabel labelText="Описание" >
						<BaseInput />
					</MyLabel>
					<MyLabel labelText="Описание" >
						<BaseTextarea />
					</MyLabel>
				</GridСell>
			</Grid>
			<Br />
			<Grid>
				<GridСell>
					<BaseSelect styles={baseSelectCss} options={baseSelectOpt} />
					<MyLabel labelText="Переключить" position="left">
						<BaseToggleBox />
					</MyLabel>
					<MyLabel labelText="Переключить" position="right">
						<BaseToggleRadio />
					</MyLabel></GridСell>
				<GridСell>
					<MyLabel labelText="Переключить" position="left">
						<BaseCheckbox disabled />
					</MyLabel>
					<MyLabel labelText="Переключить" position="left">
						<BaseRadiocheck disabled />
					</MyLabel>
					<MyLabel labelText="Переключить" position="left">
						<BaseSwitchRadio />
					</MyLabel>
				</GridСell>
			</Grid>
			<Br />
			<ColorsDemo />
			<Br />

			{
				/*
					*******************************************************
					убрать глобальные стили с .module.css
					настроить лайяут
					темная и светлая вариант для каждой темы
					*******************************************************
					инпут с иконкой
					варнинги на инпут
					кастомный чекбокс
					кастомный радио чек
					кнопка без текста с иконкой
					кнопка с иконкой
					кнопка транспаред стиль
					инпут транспаред стиль
					текстареа транспаред стиль
					текст с боковым бордером
					текст с иконкой
					боковое складывающиеся меню
					верхнее меню страниц с найстройками темы
					элемент меню с текстом с иконкой с боковым бордером
					тогл кнопака переключения
					кнопки некст и прев (кнопка с иконкой)
					пагинация два вида
					мини уведомления на инпут, оповищение об обязательых полях
					красные звездочки на лейбл инпут, оповищение об обязательых полях
					теги
					уведомление (текст с кнопкой 3 цвета)
					микро уведомление иконка снизу текст
					загрузка файла виджет
					модальные окна подтверждения
					дроп давн несколько видов
					строка поиска
					виджет визуальной закладки два стиля
					*******************************************************
					заглушка на фото
					Лаяут хедерЮ боковое меню, фоотер или его отсутствие
					*******************************************************
				*/
			}

		</>
	);
}

export { UIKit };
