import React from "react";

import {
	BaseButton, BaseInput, BaseTextarea,
	BaseCheckbox, BaseRadiocheck,
	Grid, GridСell, MyLabel
} from "../../../shared/ui";

function UIKit() {
	return (
		<>
			<Grid>
				<GridСell>
					<BaseButton text="Кнопка" />
					<BaseInput />
					<BaseTextarea />
					<BaseCheckbox />
					<BaseRadiocheck />
				</GridСell>
				<GridСell>
					<BaseButton text="Кнопка" disabled />
					<BaseInput readonly />
					<BaseTextarea readonly />
					<BaseCheckbox disabled />
					<BaseRadiocheck disabled />
				</GridСell>
				<GridСell>
					<MyLabel labelText="Описание:" >
						<BaseButton text="Кнопка" />
					</MyLabel>
					<MyLabel labelText="Описание:" >
						<BaseInput />
					</MyLabel>
					<MyLabel labelText="Описание:" >
						<BaseTextarea />
					</MyLabel>
					<MyLabel labelText="Описание:" >
						<BaseCheckbox />
					</MyLabel>
					<MyLabel labelText="Описание:" >
						<BaseRadiocheck />
					</MyLabel>
				</GridСell>
			</Grid>

			{
				/*
					*******************************************************
					настроить базовые параметры выбор темы
					настроить лайяут
					групировать ui kit
					темная и светлая вариант для каждой темы
					*******************************************************
					инпут с иконкой
					варнинги на инпут
					кастомный чекбокс
					кастомный радио чек
					кнопка без текста с иконкой
					кнопка с иконкой
					кнопка транспаред стиль
					текст с боковым бордером
					текст с иконкой
					боковое складывающиеся меню
					верхнее меню страниц с найстройками темы
					элемент меню с текстом с иконкой с боковым бордером
					тогл переключения
					пагинация
					теги
					уведомление (текст с кнопкой 3 цвета)
					микро уведомление иконка снизу текст
					уплоад файла
					модальные окна подтверждения
					дроп давн
					виджет закладки два стиля
					*******************************************************
					заглушка на фото
					*******************************************************
				*/
			}

		</>
	);
}

export { UIKit };
