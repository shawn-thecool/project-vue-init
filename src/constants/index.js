const POPUP_SPEC = {
  id: 'string', // popup-id-uuid4()
  type: 'string', // alert, popup
  content: 'object',
  onOK: () => null,
  onCancel: () => null,
  onClose: () => null
}

export const POPUP = {
  HELLO: { id: 'popup-test-1', type: 'popup' },
  WELCOME: { id: 'popup-test-2', type: 'alert' }
}
