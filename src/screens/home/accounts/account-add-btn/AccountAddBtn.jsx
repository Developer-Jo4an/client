import React from 'react'

import AddBtn from '../../../../UI/buttons/add-btn/AddBtn'

import { useHomeContext } from '../../general/HomeProvider'

const AccountAddBtn = () => {

	const { newAccountVisible } = useHomeContext()
	const [_, setVisible] = newAccountVisible

	return <AddBtn callback={ () => setVisible(true) } />
}

export default AccountAddBtn