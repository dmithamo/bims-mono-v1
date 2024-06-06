export enum AppIcon {
  home = 'home',
  list = 'list',
  book = 'book',
  settings = 'settings',
  favorite = 'favorite',
  search = 'search',
  notifications = 'notifications',
  ellipsis = 'ellipsis',
  info = 'info',
  close = 'close',
  apps = 'apps',
  menu = 'menu',
  avatar = 'account_circle',
  bug = 'bug',
  send = 'send',
  file = 'file_open',
  folder = 'folder_supervised',
  experience = 'work_history',
  face = 'mood',
}

export enum AppIconSize {
  large = 'large',
  default = 'default',
  small = 'small',
}

export interface TPeriodWithLabel {
  amount: string;
  label: string;
}

export interface TPeriodBtnDates {
  years: TPeriodWithLabel;
  months: TPeriodWithLabel;
  days: TPeriodWithLabel;
  hours: TPeriodWithLabel;
  minutes: TPeriodWithLabel;
  seconds: TPeriodWithLabel;
}

export enum TClockSize {
  small,
  medium,
  large,
}
