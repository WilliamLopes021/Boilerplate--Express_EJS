export const checkCsrfError = (err, req, res, next) => {
  if(err && err.code === 'EBADCSRFTOKEN') res.send('BAD CSRF TOKEN');
}

export const setCsrfToken = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
}