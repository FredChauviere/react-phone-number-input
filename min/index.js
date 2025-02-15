import metadata from 'libphonenumber-js/metadata.min.json'

export { parseRFC3966, formatRFC3966 } from '../core/index'

import {
	parsePhoneNumber as _parsePhoneNumber,
	formatPhoneNumber as _formatPhoneNumber,
	formatPhoneNumberIntl as _formatPhoneNumberIntl,
	isValidPhoneNumber as _isValidPhoneNumber
} from '../core/index'

import { createPhoneInput } from '../modules/PhoneInputNativeDefaults'

function call(func, _arguments) {
	var args = Array.prototype.slice.call(_arguments)
	args.push(metadata)
	return func.apply(this, args)
}

export default createPhoneInput(metadata)

export function parsePhoneNumber() {
	return call(_parsePhoneNumber, arguments)
}

export function formatPhoneNumber() {
	return call(_formatPhoneNumber, arguments)
}

export function formatPhoneNumberIntl() {
	return call(_formatPhoneNumberIntl, arguments)
}

export function isValidPhoneNumber() {
	return call(_isValidPhoneNumber, arguments)
}