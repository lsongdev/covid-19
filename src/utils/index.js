
export const formatResponse = res => {
  if (res.code === 'success' && res.successAndNotNull)
    return res.data;
  const err = new Error(res.message)
  err.code = res.code;
  err.response = res;
  throw err;
}
