export const illustrationSrcMap = {
  Chat: "/animations/Chat.lottie",
  DataError: "/animations/Data_error.lottie",
  EmptyListAdd: "/animations/Empty_list_add.lottie",
  EmptyListNoAdd: "/animations/Empty_list_no_add.lottie",
  EmptySearch: "/animations/Empty_search.lottie",
  MaintenanceWork: "/animations/Maintenance_work.lottie",
  NoDataAnalytics: "/animations/No_data_analytics.lottie",
  NoPermissions: "/animations/No_permissions.lottie",
  NoResponse: "/animations/No_response.lottie",
  Notifications: "/animations/Notifications.lottie",
  PermissionsGet: "/animations/Permissions_get.lottie",
  RootError: "/animations/Root_error.lottie",
  SmthngWrong: "/animations/Smthng_wrong.lottie",
  StartSearch: "/animations/Start_search.lottie",
  TenantCreate: "/animations/Tenant_create.lottie",
  UpdateApp: "/animations/Update_app.lottie",
  UserLimit: "/animations/User_limit.lottie",
} as const;

export type IllustrationName = keyof typeof illustrationSrcMap;
