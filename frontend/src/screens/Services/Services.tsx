import React from 'react'
import { useParams } from 'react-router-dom'
import ITManagement from './Pages/ITManagement'
import InformationSecurity from './Pages/InformationSecurity'
import NetworkEngineering from './Pages/NetworkEngineering'
import ServicesLayout from './ServicesLayout'

const Services = () => {
	const comparison = new Map<string, React.ReactNode>([
		['information_security_management', <InformationSecurity/>],
		['it_infrastructure_management', <ITManagement/>],
		['communication_network_engineering', <NetworkEngineering/>],
]	)

	const { serviceName } = useParams()

	return (
		<ServicesLayout>
			{comparison.get(serviceName as string)}
		</ServicesLayout>
	)
}

export default Services