type AlertType = 'fail' | 'info' | 'success';

type TAlert = {
	type: AlertType;
	children: React.ReactNode
	lifeTime?: number
}
