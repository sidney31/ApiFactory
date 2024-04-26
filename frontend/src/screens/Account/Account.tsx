import Aos from 'aos'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AccountHelp from './AccountHelp'
import AccountLayout from './AccountLayout/AccountLayout'
import AccountManagement from './AccountManagement'
import AccountPayments from './AccountPayments'
import AccountServices from './AccountServices'

const Account = () => {
	const { tabName } = useParams();
	const [slug, setSlug] = useState('')

	useEffect(() => {
		Aos.init({ duration: 1000, delay: 100 })
		setSlug(tabName as string)
	}, [tabName])

	return (
		<AccountLayout>
			{(!slug || slug === 'services') &&
				<AccountServices/>
			}
			{slug === 'management' &&
				<AccountManagement/>
			}
			{slug === 'payments' &&
				<AccountPayments/>
			}
			{slug === 'help' &&
				<AccountHelp/>
			}
		</AccountLayout>
	)
}

export default Account
