export type ProjectLink = {
	label: string;
	href: string;
};

export type PersonalProject = {
	name: string;
	description: string;
	tags: readonly string[];
	links: readonly ProjectLink[];
};

export const personalProjects: readonly PersonalProject[] = [
	{
		name: '在线简历',
		description: '个人简历, 支持PC+移动端',
		tags: ['Vue 3', 'TypeScript', 'Vite'],
		links: [{ label: '打开简历', href: 'https://resume.yyge.top' }],
	},
	{
		name: '企业知识库与工具 Agent',
		description: '结合RAG、工具调用与可观测能力的 AI 应用演示项目。',
		tags: ['Nuxt', 'LangChain', 'PostgreSQL'],
		links: [
			{ label: '在线预览', href: 'https://agent07.yyge.top' },
			{
				label: 'GitHub',
				href: 'https://github.com/ddzy/stage-07-agent-observability-evaluation',
			},
		],
	},
	{
		name: 'vue3-ui',
		description:
			'面向 PC 端的 Vue 3 组件库，实现常用业务组件与配套的使用文档。',
		tags: ['Vue 3', '组件库', 'TypeScript'],
		links: [
			{ label: '在线预览', href: 'https://vue3-ui.yyge.top' },
			{ label: 'GitHub', href: 'https://github.com/ddzy/vue3-ui' },
		],
	},
	{
		name: 'VS-Code-Extension-Doc-ZH',
		description: 'VS Code 插件开发中文文档。',
		tags: ['VS Code', '文档', '开源'],
		links: [
			{
				label: 'GitHub',
				href: 'https://github.com/Liiked/VS-Code-Extension-Doc-ZH',
			},
		],
	},
	{
		name: 'cf-rune-calculator',
		description: '为穿越火线无尽挑战模式制作的网页版符文辅助计算工具。',
		tags: ['Vue', '计算工具', 'Web'],
		links: [
			{ label: '在线使用', href: 'https://cf-rune.yyge.top' },
			{
				label: 'GitHub',
				href: 'https://github.com/ddzy/cf-rune-calculator',
			},
		],
	},
	{
		name: 'ts-utility-plugins',
		description: '纯原生 JavaScript / TypeScript 工具方法与插件集合。',
		tags: ['TypeScript', '工具库', 'JavaScript'],
		links: [
			{
				label: 'GitHub',
				href: 'https://github.com/ddzy/ts-utility-plugins',
			},
		],
	},
];
