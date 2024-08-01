import { useTranslation } from 'react-i18next';
import {
	Bootstrap,
	Css,
	MaterilaUI,
	Mysql,
	Nodejs,
	ReactIcon,
	TypeScript,
	Java,
	OracleSQL,
} from '../assets/icons';
import { Skill } from './skill';
import { SkillBox } from './skillBox';

export const TechSkills = () => {
	const { t } = useTranslation();
	return (
		<SkillBox titleBox={t('informationBox.skillsLink')}>
			<Skill svg={<TypeScript />} skillName={'TypeScript'} />
			<Skill svg={<Css />} skillName={'CSS'} />
			<Skill svg={<Bootstrap />} skillName={'Bootstrap'} />
			<Skill svg={<MaterilaUI />} skillName={'Material UI'} />
			<Skill svg={<Nodejs />} skillName={'NodeJS'} />
			<Skill svg={<ReactIcon />} skillName={'React'} />
			<Skill svg={<Mysql />} skillName={'MYSQL'} />
			<Skill svg={<Java />} skillName={'Java'} />
			<Skill svg={<OracleSQL />} skillName={'PLSQL'} />
		</SkillBox>
	);
};
