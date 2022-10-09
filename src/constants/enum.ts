export const API_ERROR_CODE = {
  SUCCESS: '00000',
  INCORRECT_PERMISSIONS: '40014',
  ACCOUNT_NOT_COPY_TRADER: '40017',
  ACCOUNT_NOT_BROKER: '40029',
  FUTURES_ORDER_GET_NOT_FOUND: '40109',
  FUTURES_ORDER_CANCEL_NOT_FOUND: '40768',
  PLAN_ORDER_NOT_FOUND: '43025',
  QTY_LESS_THAN_MINIMUM: '43006',
  ORDER_NOT_FOUND: '43001',
  /** Parameter verification exception margin mode == FIXED */
  PARAMETER_EXCEPTION: '40808',
  INSUFFICIENT_BALANCE: '40754',
  SERVICE_RETURNED_ERROR: '40725',
  FUTURES_POSITION_DIRECTION_EMPTY: '40017',
  FUTURES_ORDER_TPSL_NOT_FOUND: '43020',
} as const;
