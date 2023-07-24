import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '834d2e391f5a4985afd9e69c7092072b',
	},
})
