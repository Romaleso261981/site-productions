export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export enum MessagesType {
  NOTIFICATION = 'notification',
  MESSAGES = 'messages'
}

export enum DataBasePath {
  JOBS = 'jobs',
  EXPENSES = 'expenses'
}

export enum RoutersPaths {
  MAIN = '/',
  ABOUT = '/about',
  CARDDETAIL = '/:id',
  ADMIN = '/admin',
  LOGIN = '/login',
  NOFOUND = '*'
}
