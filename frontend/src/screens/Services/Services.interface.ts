export interface ServiceProps {
	serviceName: string
}

interface IServicePage {
	hero_title: string,
	section_title: string,
	section_subtitle: string,
	section_text: string,
	section_imagePath: string,
}

export interface IDictionary {
	[key: string]: IServicePage
}