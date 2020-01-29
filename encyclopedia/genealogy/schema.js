{
	id: 1,
	name: {
		default: '',
		modern: '',
		original: '',
		strong: '',
		sources: ['GEN 1,1'],
	},
	altNames: [{
		default: '',
		modern: '',
		original: '',
		strong: '',
		sources: ['GEN 1,1'],
	}],
	sex: 'male|female',
	age: {
		years: 100,
		sources: ['GEN 1,1'],
	},
	father: {
		id: 1,
		sources: ['GEN 1,1'],
	},
	mother: {
		id: 1,
		sources: ['GEN 1,1'],
	},
	relationships: [{ // Sexual and family relationships
		id: 1,
		type: 'marriage|concubine|fornication|adultery|rape|brother(?)',
		isRaper: true, // Marks that the person is the committer. Only for type:rape
		sources: ['GEN 1,1'],
	}],
	connections: [{
		id: 1,
		type: 'ally|friend|servant|master',
		sources: ['GEN 1,1'],
	}],
	origin: {
		place: '',
		country: '',
		region: '',
		nation: '',
		sources: ['GEN 16,3'],
	},
	birth: {
		place: '',
		country: '',
		region: '',
		nation: '',
		sources: ['GEN 1,1'],
	},
	death: {
		place: '',
		country: '',
		region: '',
		nation: '',
		cause: '',
		sources: ['GEN 1,1'],
	},
	placeOfBurial: {
		value: '',
		place: '',
		region: '',
		sources: ['GEN 1,1'],
	},
	groups: [{
		id: 'edomite',
		sources: ['GEN 36,9'],
	}],
	occupations: [{
		id: 'duke|king',
		sources: ['GEN 1,1'],
	}],
	note: '',
}