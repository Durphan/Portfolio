import {
	AngularIcon,
	Bootstrap,
	Css,
	JavaScript,
	MaterilaUI,
	Mysql,
	Nodejs,
	ReactIcon,
	TypeScript,
} from '../assets/icons';
import { Skill } from './skill';
import { SkillBox } from './skillBox';

export const TechSkills = () => {
	return (
		<SkillBox>
			<Skill svg={<JavaScript />} skillName={'JavaScript'} />
			<Skill svg={<Css />} skillName={'CSS'} />
			<Skill svg={<Bootstrap />} skillName={'Bootstrap'} />
			<Skill svg={<MaterilaUI />} skillName={'Material UI'} />
			<Skill svg={<TypeScript />} skillName={'TypeScript'} />
			<Skill svg={<Nodejs />} skillName={'NodeJS'} />
			<Skill svg={<ReactIcon />} skillName={'React'} />
			<Skill svg={<AngularIcon />} skillName={'Angular'} />
			<Skill svg={<Mysql />} skillName={'MYSQL'} />
		</SkillBox>
	);
};
