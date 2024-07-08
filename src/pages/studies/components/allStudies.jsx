import { English } from './english';
import { ProgrammingCourse } from './networkingCourse';
import { University } from './university';

export const AllStudies = () => {
	return (
		<>
			<University />
			<English />
			<ProgrammingCourse/>
		</>
	);
};
