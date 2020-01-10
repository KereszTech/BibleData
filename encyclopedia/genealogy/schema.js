{
	id: 1,
	name: {
		default: '',
		modern: '',
		original: '',
		strong: '',
		sources: ['1 Mózes 1,1'],
	},
	altNames: [{
		default: '',
		modern: '',
		original: '',
		strong: '',
		sources: ['1 Mózes 1,1'],
	}],
	sex: 'male|female',
	age: {
		years: 100,
		sources: ['1 Mózes 1,1'],
	},
	father: {
		id: 1,
		sources: ['1 Mózes 1,1'],
	},
	mother: {
		id: 1,
		sources: ['1 Mózes 1,1'],
	},
	relationships: [{ // Sexual and family relationships
		id: 1,
		type: 'marriage|concubine|fornication|adultery|rape|brother(?)',
		isRaper: true, // Marks that the person is the committer. Only for type:rape
		sources: ['1 Mózes 1,1'],
	}],
	connections: [{
		id: 1,
		type: 'ally|friend|servant|master',
		sources: ['1 Mózes 1,1'],
	}],
	origin: {
		value: '',
		type: 'country|region|nation',
		sources: ['1 Mózes 16,3'],
	},
	birth: {
		place: '',
		sources: ['1 Mózes 1,1'],
	},
	death: {
		place: '',
		region: '',
		cause: '',
		sources: ['1 Mózes 1,1'],
	},
	placeOfBurial: {
		value: '',
		place: '',
		region: '',
		sources: ['1 Mózes 1,1'],
	},
	note: '',
}