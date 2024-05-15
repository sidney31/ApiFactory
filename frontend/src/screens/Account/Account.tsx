import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AccountHelp from './AccountHelp/AccountHelp'
import AccountLayout from './AccountLayout/AccountLayout'
import AccountManagement from './AccountManagement/AccountManagement'
import AccountPayments from './AccountPayments/AccountPayments'
import AccountServices from './AccountServices/AccountServices'

const comparison = new Map<string, React.ReactNode>([
		['services', <AccountServices/>],
		['management', <AccountManagement/>],
		['payments', <AccountPayments/>],
		['help', <AccountHelp/>],
])

const Account = () => {
	const { tabName } = useParams();
	const [slug, setSlug] = useState('')

	useEffect(() => {
		setSlug(tabName as string || 'services')
	}, [tabName])

	return (
		<AccountLayout>
			{comparison.get(slug) || 
				<h2>Здесь ничего нет</h2>
			}
		</AccountLayout>
	)
}

export default Account
