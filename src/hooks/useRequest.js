// request hook, which create load state and generate error
import { useState } from 'react'

export const useRequest = (tryCallback, finallyCallback, isLoading = false) => {
	const [load, setLoad] = useState(isLoading)
	const [error, setError] = useState(false)

	const request = async () => {
		try {
			setLoad(true)
			await tryCallback()
		}
		catch (e) { setError(e.message) }
		finally {
			finallyCallback()
			setLoad(false)
			setError(false)
		}
	}

	return [request, load, error]
}