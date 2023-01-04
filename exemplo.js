export function isValidPhone(phone) {
  const BRAZIL__COUNTRY_CODE = '+55'

  const phoneNumber = (() => {
    let _phoneNumber = phone

    if (_phoneNumber.startsWith(BRAZIL__COUNTRY_CODE)) {
      _phoneNumber = _phoneNumber.replace(BRAZIL__COUNTRY_CODE, '')
    }

    return _phoneNumber.replace(/\D/g, '')
  })()

  const isLandline = phoneNumber.length === 10
  const isCell = phoneNumber.length === 11
  const validInitialNumbersOfLandline = [2, 3, 4, 5, 7]

  if (!(isCell || isLandline)) return false

  if (isCell && Number(phoneNumber.substring(2, 3)) !== 9) return false

  if (/^(\d)\1{9,10}/g.test(phoneNumber)) return false

  const dddCodes = [
    11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35,
    37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 64, 63,
    65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88,
    89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
  ]

  if (!dddCodes.includes(Number(phoneNumber.substring(0, 2)))) return false

  if (
    isLandline &&
    !validInitialNumbersOfLandline.includes(Number(phoneNumber.substring(2, 3)))
  )
    return false

  return true
}
