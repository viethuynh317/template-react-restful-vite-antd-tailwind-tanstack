export const form = {
	en: {
		requiredMark: true,
		validateMessages: {
			pattern: {
				mismatch: '${label} is not valid!',
			},
			required: 'Please enter ${label}!',
			string: {
				max: '${label} must be maximum ${max} characters.',
				min: '${label} must be minimum ${min} characters.',
			},
			types: {
				number: '${label} must be number.',
			},
			whitespace: ' ${label} cannot be empty!',
		},
	},
	vi: {
		requiredMark: true,
		validateMessages: {
			pattern: {
				mismatch: '${label} không hợp lệ!',
			},
			required: 'Vui lòng nhập ${label}!',
			string: {
				max: '${label} tối đa ${max} ký tự.',
				min: '${label} tối thiểu ${min} ký tự.',
			},
			types: {
				number: '${label} phải là số.',
			},
			whitespace: ' ${label} không được để trống!',
		},
	},
};
