import { Skill } from './skill';
import { SkillAcordion } from './skillAcordion';

export const TechSkills = () => {
	return (
		<SkillAcordion nameAccordion={'Technical Skills'}>
			<Skill
				svg={
					<svg
						xmlns='http://www.w3.org/2000/svg'
						aria-label='JavaScript'
						role='img'
						viewBox='0 0 512 512'
						width='70px'
						height='70px'
						fill='#000000'
					>
						<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
						<g
							id='SVGRepo_tracerCarrier'
							strokeLinecap='round'
							strokeLinejoin='round'
						></g>
						<g id='SVGRepo_iconCarrier'>
							<rect width='512' height='512' rx='15%' fill='#f7df1e'></rect>
							<path d='M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z'></path>
						</g>
					</svg>
				}
				skillName={'JavaScript'}
			/>
			<Skill
				svg={
					<svg
						width='80px'
						height='80px'
						viewBox='0 0 32 32'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
						<g
							id='SVGRepo_tracerCarrier'
							strokeLinecap='round'
							strokeLinejoin='round'
						></g>
						<g id='SVGRepo_iconCarrier'>
							<path d='M6 28L4 3H28L26 28L16 31L6 28Z' fill='#1172B8'></path>
							<path d='M26 5H16V29.5L24 27L26 5Z' fill='#33AADD'></path>
							<path
								d='M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z'
								fill='white'
							></path>
						</g>
					</svg>
				}
				skillName={'CSS'}
			/>
			<Skill
				svg={
					<svg
						width='81px'
						height='81px'
						viewBox='0 0 256 256'
						version='1.1'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
						preserveAspectRatio='xMidYMid'
						fill='#000000'
					>
						<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
						<g
							id='SVGRepo_tracerCarrier'
							strokeLinecap='round'
							strokeLinejoin='round'
						></g>
						<g id='SVGRepo_iconCarrier'>
							<g>
								<path
									d='M0,222.991225 C0,241.223474 14.7785318,256 33.0087747,256 L222.991225,256 C241.223474,256 256,241.221468 256,222.991225 L256,33.0087747 C256,14.7765263 241.221468,0 222.991225,0 L33.0087747,0 C14.7765263,0 0,14.7785318 0,33.0087747 L0,222.991225 Z'
									fill='#563D7C'
								></path>
								<path
									d='M106.157563,113.238095 L106.157563,76.9845938 L138.069328,76.9845938 C141.108559,76.9845938 144.039202,77.2378593 146.861345,77.7443978 C149.683488,78.2509362 152.179961,79.1554557 154.35084,80.4579832 C156.52172,81.7605107 158.258397,83.5695496 159.560924,85.8851541 C160.863452,88.2007585 161.514706,91.1675823 161.514706,94.7857143 C161.514706,101.298352 159.560944,106.001853 155.653361,108.896359 C151.745779,111.790864 146.752832,113.238095 140.67437,113.238095 L106.157563,113.238095 L106.157563,113.238095 Z M72.07493,50.5 L72.07493,205.5 L147.186975,205.5 C154.133788,205.5 160.899594,204.631661 167.484594,202.894958 C174.069594,201.158255 179.93088,198.480877 185.068627,194.862745 C190.206375,191.244613 194.294803,186.577293 197.334034,180.860644 C200.373264,175.143996 201.892857,168.37819 201.892857,160.563025 C201.892857,150.866431 199.541107,142.581033 194.837535,135.706583 C190.133963,128.832132 183.00635,124.020088 173.454482,121.270308 C180.401295,117.941627 185.647508,113.672295 189.193277,108.462185 C192.739047,103.252075 194.511905,96.7395349 194.511905,88.9243697 C194.511905,81.6881057 193.317939,75.6097352 190.929972,70.6890756 C188.542005,65.7684161 185.177193,61.8247114 180.835434,58.8578431 C176.493676,55.8909749 171.283644,53.756309 165.205182,52.4537815 C159.12672,51.151254 152.397096,50.5 145.016106,50.5 L72.07493,50.5 L72.07493,50.5 Z M106.157563,179.015406 L106.157563,136.466387 L143.279412,136.466387 C150.660401,136.466387 156.594049,138.166883 161.080532,141.567927 C165.567016,144.968971 167.810224,150.649353 167.810224,158.609244 C167.810224,162.661552 167.122789,165.990183 165.747899,168.595238 C164.373009,171.200293 162.527789,173.262597 160.212185,174.782213 C157.89658,176.301828 155.219203,177.387252 152.179972,178.038515 C149.140741,178.689779 145.956833,179.015406 142.628151,179.015406 L106.157563,179.015406 L106.157563,179.015406 Z'
									fill='#FFFFFF'
								></path>
							</g>
						</g>
					</svg>
				}
				skillName={'Bootstrap'}
			/>
			<Skill
				svg={
					<svg
						width='81px'
						height='81px'
						viewBox='0 -26 256 256'
						version='1.1'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
						preserveAspectRatio='xMidYMid'
						fill='#000000'
					>
						<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
						<g
							id='SVGRepo_tracerCarrier'
							strokeLinecap='round'
							strokeLinejoin='round'
						></g>
						<g id='SVGRepo_iconCarrier'>
							<g>
								<polygon
									fill='#00B0FF'
									points='0 110.848 0 0 96 55.424 96 92.3733333 32 55.424 32 129.322667'
								></polygon>
								<polygon
									fill='#0081CB'
									points='96 55.424 192 0 192 110.848 128 147.797333 96 129.322667 160 92.3733333 160 55.424 96 92.3733333'
								></polygon>
								<polygon
									fill='#00B0FF'
									points='96 129.322667 96 166.272 160 203.221333 160 166.272'
								></polygon>
								<path
									d='M160,203.221333 L256,147.797333 L256,73.8986667 L224,92.3733333 L224,129.322667 L160,166.272 L160,203.221333 Z M224,55.424 L224,18.4746667 L256,5.68434189e-14 L256,36.9493333 L224,55.424 Z'
									fill='#0081CB'
								></path>
							</g>
						</g>
					</svg>
				}
				skillName={'Material UI'}
			/>
			<Skill
				svg={
					<svg
						xmlns='http://www.w3.org/2000/svg'
						aria-label='TypeScript'
						role='img'
						viewBox='0 0 512 512'
						width='81px'
						height='81px'
						fill='#000000'
					>
						<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
						<g
							id='SVGRepo_tracerCarrier'
							strokeLinecap='round'
							strokeLinejoin='round'
						></g>
						<g id='SVGRepo_iconCarrier'>
							<rect width='512' height='512' rx='15%' fill='#3178c6'></rect>
							<path
								fill='#ffffff'
								d='m233 284h64v-41H118v41h64v183h51zm84 173c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4c11-2.3 20-6.1 28-11c8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9c-5.2-2.6-9.7-5.2-13-7.8c-3.7-2.7-6.5-5.5-8.5-8.4c-2-3-3-6.3-3-10c0-3.4.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6c4.7-1.1 9.9-1.6 16-1.6c4.2 0 8.6.31 13 .94c4.6.63 9.3 1.6 14 2.9c4.7 1.3 9.3 2.9 14 4.9c4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21c-4.7 8.4-7 18-7 30c0 15 4.3 28 13 38c8.6 11 22 19 39 27c6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5c2.5 3.4 3.8 7.4 3.8 12c0 3.2-.78 6.2-2.3 9s-3.9 5.2-7.1 7.2s-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7c-11 0-22-1.9-32-5.7c-11-3.8-21-9.5-28.1-15.44z'
							></path>
						</g>
					</svg>
				}
				skillName={'TypeScript'}
			/>
			<Skill
				svg={
					<svg
						width='150px'
						height='150px'
						viewBox='0 -183.5 512 512'
						xmlns='http://www.w3.org/2000/svg'
						preserveAspectRatio='xMinYMin meet'
						fill='#000000'
					>
						<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
						<g
							id='SVGRepo_tracerCarrier'
							strokeLinecap='round'
							strokeLinejoin='round'
						></g>
						<g id='SVGRepo_iconCarrier'>
							<g fill='#83CD29'>
								<path d='M471.05 51.611c-1.244 0-2.454.257-3.525.863l-33.888 19.57c-2.193 1.264-3.526 3.65-3.526 6.189v39.069c0 2.537 1.333 4.92 3.526 6.187l8.85 5.109c4.3 2.119 5.885 2.086 7.842 2.086 6.366 0 10.001-3.863 10.001-10.576V81.542c0-.545-.472-.935-1.007-.935h-4.245c-.544 0-1.007.39-1.007.935v38.566c0 2.975-3.1 5.968-8.13 3.453l-9.21-5.396c-.326-.177-.576-.49-.576-.863v-39.07c0-.37.247-.747.576-.935L470.547 57.8a.998.998 0 0 1 1.007 0l33.817 19.498c.322.194.576.553.576.936v39.069c0 .373-.188.755-.504.935l-33.889 19.498c-.29.173-.69.173-1.007 0l-8.706-5.18a.905.905 0 0 0-.863 0c-2.403 1.362-2.855 1.52-5.109 2.302-.555.194-1.398.495.288 1.44l11.368 6.69a6.995 6.995 0 0 0 3.526.936 6.949 6.949 0 0 0 3.525-.935l33.889-19.499c2.193-1.275 3.525-3.65 3.525-6.187v-39.07c0-2.538-1.332-4.92-3.525-6.187l-33.889-19.57c-1.062-.607-2.28-.864-3.525-.864z'></path>
								<path d='M480.116 79.528c-9.65 0-15.397 4.107-15.397 10.937 0 7.408 5.704 9.444 14.966 10.36 11.08 1.085 11.943 2.712 11.943 4.893 0 3.783-3.016 5.396-10.144 5.396-8.957 0-10.925-2.236-11.584-6.691-.078-.478-.447-.864-.936-.864h-4.389c-.54 0-1.007.466-1.007 1.008 0 5.703 3.102 12.447 17.916 12.447 10.723 0 16.908-4.209 16.908-11.584 0-7.31-4.996-9.273-15.398-10.648-10.51-1.391-11.512-2.072-11.512-4.533 0-2.032.85-4.75 8.634-4.75 6.954 0 9.524 1.5 10.577 6.189.092.44.48.791.935.791h4.39c.27 0 .532-.166.719-.36.184-.207.314-.44.288-.719-.68-8.074-6.064-11.872-16.909-11.872z'></path>
							</g>
							<path
								d='M271.821.383a2.181 2.181 0 0 0-1.08.287 2.18 2.18 0 0 0-1.079 1.871v55.042c0 .54-.251 1.024-.719 1.295a1.501 1.501 0 0 1-1.511 0l-8.994-5.18a4.31 4.31 0 0 0-4.317 0l-35.903 20.721c-1.342.775-2.158 2.264-2.158 3.814v41.443c0 1.548.817 2.966 2.158 3.741l35.903 20.722a4.3 4.3 0 0 0 4.317 0l35.903-20.722a4.308 4.308 0 0 0 2.159-3.741V16.356a4.386 4.386 0 0 0-2.23-3.814L272.9.598c-.335-.187-.707-.22-1.079-.215zM40.861 52.115c-.684.027-1.328.147-1.942.503L3.015 73.34a4.3 4.3 0 0 0-2.158 3.741L.929 132.7c0 .773.399 1.492 1.079 1.87a2.096 2.096 0 0 0 2.159 0l21.297-12.231c1.349-.802 2.23-2.196 2.23-3.742V92.623c0-1.55.815-2.972 2.159-3.742l9.065-5.252a4.251 4.251 0 0 1 2.159-.576c.74 0 1.5.185 2.158.576l9.066 5.252a4.296 4.296 0 0 1 2.159 3.742v25.973c0 1.546.89 2.95 2.23 3.742l21.297 12.232a2.096 2.096 0 0 0 2.159 0 2.164 2.164 0 0 0 1.08-1.871l.07-55.618a4.28 4.28 0 0 0-2.158-3.741L43.235 52.618c-.607-.356-1.253-.475-1.942-.503h-.432zm322.624.503c-.75 0-1.485.19-2.158.576l-35.903 20.722a4.306 4.306 0 0 0-2.159 3.741V119.1c0 1.559.878 2.971 2.23 3.742l35.616 20.29c1.315.75 2.921.807 4.245.07l21.585-12.015c.685-.38 1.148-1.09 1.151-1.87a2.126 2.126 0 0 0-1.079-1.871l-36.119-20.722c-.676-.386-1.151-1.167-1.151-1.943v-12.95c0-.775.48-1.485 1.151-1.871l11.224-6.476a2.155 2.155 0 0 1 2.159 0L375.5 89.96a2.152 2.152 0 0 1 1.08 1.87v10.217a2.15 2.15 0 0 0 1.079 1.87c.673.389 1.487.39 2.158 0L401.331 91.4a4.325 4.325 0 0 0 2.159-3.742v-10c0-1.545-.82-2.966-2.159-3.742l-35.687-20.722a4.279 4.279 0 0 0-2.159-.575zm-107.35 30.939c.188 0 .408.046.576.143l12.304 7.123c.334.193.576.55.576.935v14.246c0 .387-.24.743-.576.936l-12.304 7.123a1.088 1.088 0 0 1-1.079 0l-12.303-7.123c-.335-.194-.576-.549-.576-.936V91.758c0-.386.242-.74.576-.935l12.303-7.122a.948.948 0 0 1 .504-.143v-.001z'
								fill='#404137'
							></path>
							<path
								d='M148.714 52.402c-.748 0-1.488.19-2.158.576l-35.903 20.65c-1.343.773-2.159 2.265-2.159 3.813v41.443c0 1.55.817 2.966 2.159 3.742l35.903 20.721a4.297 4.297 0 0 0 4.317 0l35.903-20.721a4.308 4.308 0 0 0 2.158-3.742V77.441c0-1.55-.816-3.04-2.158-3.813l-35.903-20.65a4.297 4.297 0 0 0-2.159-.576zM363.413 89.385c-.143 0-.302 0-.431.072l-6.907 4.029a.84.84 0 0 0-.432.72v7.914c0 .298.172.571.432.72l6.907 3.957c.259.15.535.15.791 0l6.907-3.958a.846.846 0 0 0 .432-.719v-7.915a.846.846 0 0 0-.432-.719l-6.907-4.03c-.128-.075-.216-.07-.36-.07z'
								fill='#83CD29'
							></path>
						</g>
					</svg>
				}
				skillName={'NodeJS'}
			/>
			<Skill
				svg={
					<svg
						width='83px'
						height='83px'
						viewBox='0 -14 256 256'
						version='1.1'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
						preserveAspectRatio='xMidYMid'
						fill='#000000'
					>
						<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
						<g
							id='SVGRepo_tracerCarrier'
							strokeLinecap='round'
							strokeLinejoin='round'
						></g>
						<g id='SVGRepo_iconCarrier'>
							<g>
								<path
									d='M210.483381,73.8236374 C207.827698,72.9095503 205.075867,72.0446761 202.24247,71.2267368 C202.708172,69.3261098 203.135596,67.4500894 203.515631,65.6059664 C209.753843,35.3248922 205.675082,10.9302478 191.747328,2.89849283 C178.392359,-4.80289661 156.551327,3.22703567 134.492936,22.4237776 C132.371761,24.2697233 130.244662,26.2241201 128.118477,28.2723861 C126.701777,26.917204 125.287358,25.6075897 123.876584,24.3549348 C100.758745,3.82852863 77.5866802,-4.82157937 63.6725966,3.23341515 C50.3303869,10.9571328 46.3792156,33.8904224 51.9945178,62.5880206 C52.5367729,65.3599011 53.1706189,68.1905639 53.8873982,71.068617 C50.6078941,71.9995641 47.4418534,72.9920277 44.4125156,74.0478303 C17.3093297,83.497195 0,98.3066828 0,113.667995 C0,129.533287 18.5815786,145.446423 46.8116526,155.095373 C49.0394553,155.856809 51.3511025,156.576778 53.7333796,157.260293 C52.9600965,160.37302 52.2875179,163.423318 51.7229345,166.398431 C46.3687351,194.597975 50.5500231,216.989464 63.8566899,224.664425 C77.6012619,232.590464 100.66852,224.443422 123.130185,204.809231 C124.905501,203.257196 126.687196,201.611293 128.472081,199.886102 C130.785552,202.113904 133.095375,204.222319 135.392897,206.199955 C157.14963,224.922338 178.637969,232.482469 191.932332,224.786092 C205.663234,216.837268 210.125675,192.78347 204.332202,163.5181 C203.88974,161.283006 203.374826,158.99961 202.796573,156.675661 C204.416503,156.196743 206.006814,155.702335 207.557482,155.188332 C236.905331,145.46465 256,129.745175 256,113.667995 C256,98.2510906 238.132466,83.3418093 210.483381,73.8236374 L210.483381,73.8236374 Z M204.118035,144.807565 C202.718197,145.270987 201.281904,145.718918 199.818271,146.153177 C196.578411,135.896354 192.205739,124.989735 186.854729,113.72131 C191.961041,102.721277 196.164656,91.9540963 199.313837,81.7638014 C201.93261,82.5215915 204.474374,83.3208483 206.923636,84.1643056 C230.613348,92.3195488 245.063763,104.377206 245.063763,113.667995 C245.063763,123.564379 229.457753,136.411268 204.118035,144.807565 L204.118035,144.807565 Z M193.603754,165.642007 C196.165567,178.582766 196.531475,190.282717 194.834536,199.429057 C193.309843,207.64764 190.243595,213.12715 186.452366,215.321689 C178.384612,219.991462 161.131788,213.921395 142.525146,197.909832 C140.392124,196.074366 138.243609,194.114502 136.088259,192.040261 C143.301619,184.151133 150.510878,174.979732 157.54698,164.793993 C169.922699,163.695814 181.614905,161.900447 192.218042,159.449363 C192.740247,161.555956 193.204126,163.621993 193.603754,165.642007 L193.603754,165.642007 Z M87.2761866,214.514686 C79.3938934,217.298414 73.1160375,217.378157 69.3211631,215.189998 C61.2461189,210.532528 57.8891498,192.554265 62.4682434,168.438039 C62.9927272,165.676183 63.6170041,162.839142 64.3365173,159.939216 C74.8234575,162.258154 86.4299951,163.926841 98.8353334,164.932519 C105.918826,174.899534 113.336329,184.06091 120.811247,192.08264 C119.178102,193.65928 117.551336,195.16028 115.933685,196.574699 C106.001303,205.256705 96.0479605,211.41654 87.2761866,214.514686 L87.2761866,214.514686 Z M50.3486141,144.746959 C37.8658105,140.48046 27.5570398,134.935332 20.4908634,128.884403 C14.1414664,123.446815 10.9357817,118.048415 10.9357817,113.667995 C10.9357817,104.34622 24.8334611,92.4562517 48.0123604,84.3748281 C50.8247961,83.3942121 53.7689223,82.4701001 56.8242337,81.6020363 C60.0276398,92.0224477 64.229889,102.917218 69.3011135,113.93411 C64.1642716,125.11459 59.9023288,136.182975 56.6674809,146.725506 C54.489347,146.099407 52.3791089,145.440499 50.3486141,144.746959 L50.3486141,144.746959 Z M62.7270678,60.4878073 C57.9160346,35.9004118 61.1112387,17.3525532 69.1516515,12.6982729 C77.7160924,7.74005624 96.6544653,14.8094222 116.614922,32.5329619 C117.890816,33.6657739 119.171723,34.8514442 120.456275,36.0781256 C113.018267,44.0647686 105.66866,53.1573386 98.6480514,63.0655695 C86.6081646,64.1815215 75.0831931,65.9741531 64.4868907,68.3746571 C63.8206914,65.6948233 63.2305903,63.0619242 62.7270678,60.4878073 L62.7270678,60.4878073 Z M173.153901,87.7550367 C170.620796,83.3796304 168.020249,79.1076627 165.369124,74.9523483 C173.537126,75.9849113 181.362914,77.3555864 188.712066,79.0329319 C186.505679,86.1041206 183.755673,93.4974728 180.518546,101.076741 C178.196419,96.6680702 175.740322,92.2229454 173.153901,87.7550367 L173.153901,87.7550367 Z M128.122121,43.8938899 C133.166461,49.3588189 138.218091,55.4603279 143.186789,62.0803968 C138.179814,61.8439007 133.110868,61.720868 128.000001,61.720868 C122.937434,61.720868 117.905854,61.8411667 112.929865,62.0735617 C117.903575,55.515009 122.99895,49.4217021 128.122121,43.8938899 L128.122121,43.8938899 Z M82.8018984,87.830679 C80.2715265,92.2183886 77.8609975,96.6393627 75.5753239,101.068539 C72.3906004,93.5156998 69.6661103,86.0886276 67.440586,78.9171899 C74.7446255,77.2826781 82.5335049,75.9461789 90.6495601,74.9332099 C87.9610684,79.1268011 85.3391054,83.4302106 82.8018984,87.8297677 L82.8018984,87.830679 L82.8018984,87.830679 Z M90.8833221,153.182899 C82.4979621,152.247395 74.5919739,150.979704 67.289757,149.390303 C69.5508242,142.09082 72.3354636,134.505173 75.5876271,126.789657 C77.8792246,131.215644 80.2993228,135.638441 82.8451877,140.03572 L82.8456433,140.03572 C85.4388987,144.515476 88.1255676,148.90364 90.8833221,153.182899 L90.8833221,153.182899 Z M128.424691,184.213105 C123.24137,178.620587 118.071264,172.434323 113.021912,165.780078 C117.923624,165.972373 122.921029,166.0708 128.000001,166.0708 C133.217953,166.0708 138.376211,165.953235 143.45336,165.727219 C138.468257,172.501308 133.434855,178.697141 128.424691,184.213105 L128.424691,184.213105 Z M180.622896,126.396409 C184.044571,134.195313 186.929004,141.741317 189.219234,148.9164 C181.796719,150.609693 173.782736,151.973534 165.339049,152.986959 C167.996555,148.775595 170.619884,144.430263 173.197646,139.960532 C175.805484,135.438399 178.28163,130.90943 180.622896,126.396409 L180.622896,126.396409 Z M163.724586,134.496971 C159.722835,141.435557 155.614455,148.059271 151.443648,154.311611 C143.847063,154.854776 135.998946,155.134562 128.000001,155.134562 C120.033408,155.134562 112.284171,154.887129 104.822013,154.402745 C100.48306,148.068386 96.285368,141.425078 92.3091341,134.556664 L92.3100455,134.556664 C88.3442923,127.706935 84.6943232,120.799333 81.3870228,113.930466 C84.6934118,107.045648 88.3338117,100.130301 92.276781,93.292874 L92.2758697,93.294241 C96.2293193,86.4385872 100.390102,79.8276317 104.688954,73.5329157 C112.302398,72.9573964 120.109505,72.6571055 127.999545,72.6571055 L128.000001,72.6571055 C135.925583,72.6571055 143.742714,72.9596746 151.353879,73.5402067 C155.587114,79.7888993 159.719645,86.3784378 163.688588,93.2350031 C167.702644,100.168578 171.389978,107.037901 174.724618,113.77508 C171.400003,120.627999 167.720871,127.566587 163.724586,134.496971 L163.724586,134.496971 Z M186.284677,12.3729198 C194.857321,17.3165548 198.191049,37.2542268 192.804953,63.3986692 C192.461372,65.0669011 192.074504,66.7661189 191.654369,68.4881206 C181.03346,66.0374921 169.500286,64.2138746 157.425315,63.0810626 C150.391035,53.0639249 143.101577,43.9572289 135.784778,36.073113 C137.751934,34.1806885 139.716356,32.3762092 141.672575,30.673346 C160.572216,14.2257007 178.236518,7.73185406 186.284677,12.3729198 L186.284677,12.3729198 Z M128.000001,90.8080696 C140.624975,90.8080696 150.859926,101.042565 150.859926,113.667995 C150.859926,126.292969 140.624975,136.527922 128.000001,136.527922 C115.375026,136.527922 105.140075,126.292969 105.140075,113.667995 C105.140075,101.042565 115.375026,90.8080696 128.000001,90.8080696 L128.000001,90.8080696 Z'
									fill='#00D8FF'
								></path>
							</g>
						</g>
					</svg>
				}
				skillName={'React'}
			/>
			<Skill
				svg={
					<svg
						width='81px'
						height='81px'
						viewBox='0 0 32 32'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
						<g
							id='SVGRepo_tracerCarrier'
							strokeLinecap='round'
							strokeLinejoin='round'
						></g>
						<g id='SVGRepo_iconCarrier'>
							<path
								d='M16 2L3 7L5 24L16 30L27 24L29 7L16 2Z'
								fill='#DD0031'
							></path>
							<path d='M16 2V30L27 24L29 7L16 2Z' fill='#C3002F'></path>
							<path
								d='M15.9998 5.09375L7.87305 23.3638H10.9031L12.5368 19.2757H19.4348L21.0685 23.3638H24.0986L15.9998 5.09375ZM18.3736 16.7557H13.626L15.9998 11.0298L18.3736 16.7557Z'
								fill='white'
							></path>
						</g>
					</svg>
				}
				skillName={'Angular'}
			/>
			<Skill
				svg={
					<svg
						width='82px'
						height='82px'
						viewBox='0 0 73 73'
						version='1.1'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
						fill='#000000'
					>
						<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
						<g
							id='SVGRepo_tracerCarrier'
							strokeLinecap='round'
							strokeLinejoin='round'
						></g>
						<g id='SVGRepo_iconCarrier'>
							<title>databases-and-servers/databases/mysql</title>
							<desc>Created with Sketch.</desc> <defs> </defs>
							<g
								id='databases-and-servers/databases/mysql'
								stroke='none'
								strokeWidth='1'
								fill='none'
								fillRule='evenodd'
							>
								<g
									id='container'
									transform='translate(2.000000, 2.000000)'
									fill='#FFFFFF'
									fillRule='nonzero'
									stroke='#013247'
									strokeWidth='2'
								>
									<rect
										id='mask'
										x='-1'
										y='-1'
										width='71'
										height='71'
										rx='14'
									></rect>
								</g>
								<g
									id='MySQL'
									transform='translate(14.000000, 16.000000)'
									fill='#00618A'
								>
									<g
										id='Group'
										transform='translate(0.786008, 0.109629)'
										fillRule='nonzero'
									>
										<path
											d='M40.8827605,33.7385756 C38.4614916,33.672937 36.6119538,33.8980714 35.0307983,34.5648866 C34.5814496,34.7544412 33.8649454,34.7593487 33.7916387,35.3224916 C34.0385504,35.5813655 34.0768908,35.9678361 34.2731933,36.2862143 C34.6507689,36.8972059 35.2881387,37.7158487 35.8568025,38.1452605 C36.4782227,38.6142395 37.1186597,39.1160378 37.7848613,39.5221387 C38.9697311,40.2447773 40.2926261,40.6573193 41.4336345,41.3811849 C42.1059706,41.8078361 42.7740126,42.3452143 43.4300924,42.8267689 C43.7542983,43.0647857 43.9723782,43.435 44.3938151,43.5840672 C44.3938151,43.5613697 44.3938151,43.5383655 44.3938151,43.5153613 C44.1723613,43.2334832 44.1153109,42.8457857 43.9119538,42.5513319 C43.6138193,42.2531975 43.3153782,41.9547563 43.016937,41.6563151 C42.1418571,40.4947563 41.0309076,39.4745966 39.8500252,38.6271218 C38.9083866,37.951105 36.8005882,37.0379916 36.4076765,35.9420714 C36.3846723,35.9190672 36.3619748,35.896063 36.3386639,35.8730588 C37.0063992,35.7979118 37.7882353,35.5562143 38.4044412,35.3911975 C39.4396303,35.1136134 40.3647059,35.1853866 41.4336345,34.9093361 C41.9154958,34.7716176 42.3973571,34.6335924 42.8795252,34.4961807 C42.8795252,34.4041639 42.8795252,34.3127605 42.8795252,34.2207437 C42.3390798,33.6661891 41.9538361,32.9325084 41.3646218,32.4307101 C39.8230336,31.117937 38.1403529,29.8063908 36.4076765,28.7127403 C35.4467143,28.1061655 34.259084,27.7119962 33.2407647,27.1979903 C32.8981555,27.0251521 32.2963655,26.9352824 32.0700042,26.6471471 C31.5350798,25.9650878 31.2436933,25.1006513 30.8311513,24.3062702 C29.9668067,22.6420849 29.118105,20.8245076 28.3525252,19.0737345 C27.8301765,17.8797857 27.4891008,16.702308 26.8379286,15.631171 C23.7118109,10.4914803 20.3467563,7.38919496 15.1340042,4.33994202 C14.024895,3.69146891 12.6894244,3.43535546 11.2781933,3.10078235 C10.5212017,3.05495798 9.76359664,3.00882689 9.00629832,2.96300252 C8.54406723,2.7697979 8.06312605,2.20426261 7.62942017,1.93020588 C5.90257143,0.839294496 1.47318908,-1.53361345 0.194155462,1.58603235 C-0.613445378,3.55516134 1.40110924,5.47668697 2.12160084,6.47442521 C2.62738655,7.17442773 3.27487815,7.9592084 3.63619748,8.74638151 C3.87390756,9.2637 3.9150084,9.78249076 4.11836555,10.3300214 C4.61893697,11.6785277 5.05417647,13.1456437 5.70166807,14.3920113 C6.02894118,15.0225412 6.38964706,15.6869025 6.80341597,16.2509042 C7.05707563,16.5968874 7.49170168,16.7493286 7.56040756,17.2837008 C7.13528992,17.8785895 7.11105882,18.8020395 6.87212185,19.5556878 C5.79613866,22.9485008 6.20193277,27.1656311 7.76713866,29.6766471 C8.24746639,30.4474412 9.37865966,32.1006765 10.9340504,31.4666807 C12.2946723,30.9124328 11.9907101,29.1950924 12.3799412,27.6799437 C12.4679706,27.3363529 12.4139874,27.0838588 12.5863655,26.8538168 C12.5863655,26.8765756 12.5863655,26.8996412 12.5863655,26.9227067 C12.999521,27.7488336 13.4126765,28.5749298 13.8258319,29.4009034 C14.7429328,30.8780798 16.3707101,32.4218151 17.750042,33.4634454 C18.4653193,34.003584 19.0284622,34.9375546 19.9532311,35.253479 C19.9532311,35.2304748 19.9532311,35.2077773 19.9532311,35.1844664 C19.9299202,35.1844664 19.9072227,35.1844664 19.8842185,35.1844664 C19.7050924,34.905042 19.4247479,34.7894076 19.1959328,34.5648866 C18.657021,34.0367101 18.0579916,33.3800168 17.6123235,32.7748529 C16.3578277,31.0716218 15.2490252,29.2073613 14.2389874,27.2668803 C13.7565126,26.3404244 13.3372227,25.3181176 12.9305084,24.3751601 C12.7737731,24.0115403 12.7756134,23.4618933 12.4489538,23.2735042 C12.0035924,23.9645197 11.3475126,24.5231538 11.003063,25.3390668 C10.4521891,26.6432517 10.3810294,28.2337622 10.1770588,29.8830714 C10.0562101,29.9263193 10.1098866,29.8965672 10.0390336,29.9517773 C9.08021849,29.7205084 8.74313025,28.7333828 8.38702521,27.8866134 C7.48556723,25.7449529 7.31809664,22.2964084 8.11128151,19.8312475 C8.31647899,19.1935403 9.2440084,17.1845681 8.86857983,16.5953845 C8.68945378,16.0073971 8.09809244,15.6674256 7.76713866,15.2181382 C7.35766387,14.6627861 6.94880252,13.9316206 6.66539076,13.2903248 C5.92772269,11.6204345 5.58327311,9.74592941 4.80665126,8.05806513 C4.43551681,7.2511084 3.80765546,6.43458193 3.29205462,5.71721891 C2.7212437,4.92256176 2.08203361,4.33724286 1.6397395,3.37606597 C1.48239076,3.0345916 1.26860504,2.48791975 1.50202101,2.13687563 C1.5762479,1.89993235 1.68084034,1.8011063 1.91517647,1.72381218 C2.31452941,1.41589634 3.42670588,1.82625756 3.84262185,1.9990958 C4.94682353,2.45767689 5.86821849,2.89438866 6.80341597,3.5138458 C7.25245798,3.81158151 7.70640756,4.38726933 8.249,4.54664244 C8.45542437,4.54664244 8.66215546,4.54664244 8.86857983,4.54664244 C9.83782353,4.76947647 10.9236218,4.61583908 11.8290672,4.89078529 C13.4295462,5.37724748 14.8637815,6.13387101 16.1664328,6.95637857 C20.1348109,9.46199622 23.3793235,13.0288437 25.5987689,17.2837008 C25.9557941,17.9687353 26.1103824,18.6226374 26.4247731,19.3492941 C27.0593824,20.8146311 27.8587017,22.3224798 28.489937,23.7554269 C29.1199454,25.1851227 29.7340042,26.6279769 30.6244202,27.8177235 C31.0927857,28.4431311 32.900916,28.7786244 33.7226261,29.1257731 C34.2986513,29.3693109 35.242437,29.6229706 35.7880966,29.9517773 C36.8303403,30.5805588 37.8400714,31.3289622 38.8175966,32.0175546 C39.3062059,32.3616975 40.8079202,33.116542 40.8827605,33.7385756 Z'
											id='Shape'
										></path>
									</g>
									<g id='Group' transform='translate(9.654588, 7.607551)'>
										<path
											d='M1.23946639,0.00929369748 C0.73460084,5.20417043e-18 0.37757563,0.0644117647 0,0.146797479 C0,0.169832353 0,0.192897899 0,0.215687395 C0.0230042017,0.215687395 0.0460084034,0.215687395 0.069012605,0.215687395 C0.309789916,0.710492437 0.734907563,1.02890126 1.03273529,1.45515378 C1.26216387,1.93710714 1.49159244,2.4190605 1.72132773,2.90070714 C1.74402521,2.87791765 1.76733613,2.85488277 1.79003361,2.83209328 C2.21637815,2.5316584 2.4117605,2.05093193 2.40961345,1.31737395 C2.23876891,1.13763445 2.21361765,0.912101261 2.06547059,0.697610084 C1.86855462,0.411867227 1.48760504,0.249518908 1.23946639,0.00929369748 Z'
											id='Shape'
										></path>
									</g>
								</g>
							</g>
						</g>
					</svg>
				}
				skillName={'MYSQL'}
			/>
		</SkillAcordion>
	);
};
