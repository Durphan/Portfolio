import { English } from './english';
import { ProgrammingCourse } from './programmingCourse';
import { University } from './university';

export const AllStudies = () => {
	return (
		<>
			<University />
			<English />
			<ProgrammingCourse />
		</>
	);
};
