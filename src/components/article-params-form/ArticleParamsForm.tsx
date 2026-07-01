import { useState } from 'react';
import clsx from 'clsx';

import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
	ArticleStateType,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	const [formState, setFormState] = useState(defaultArticleState);

	const handleToggleSidebar = () => {
		setIsOpen((prev) => !prev);
	};

	const handleChange = (key: keyof ArticleStateType, selected: OptionType) => {
		setFormState((prevState) => ({
			...prevState,
			[key]: selected,
		}));
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleToggleSidebar} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form}>
					<Select
						title='Шрифт'
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(selected) => handleChange('fontFamilyOption', selected)}
					/>
					<RadioGroup
						title='Размер шрифта'
						selected={formState.fontSizeOption}
						options={fontSizeOptions}
						onChange={(selected) => handleChange('fontSizeOption', selected)}
						name='fontSize'
					/>
					<Select
						title='Цвет шрифта'
						selected={formState.fontColor}
						options={fontColors}
						onChange={(selected) => handleChange('fontColor', selected)}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						selected={formState.backgroundColor}
						options={backgroundColors}
						onChange={(selected) => handleChange('backgroundColor', selected)}
					/>
					<Select
						title='Ширина контента'
						selected={formState.contentWidth}
						options={contentWidthArr}
						onChange={(selected) => handleChange('contentWidth', selected)}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
