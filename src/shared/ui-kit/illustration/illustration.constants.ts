export const illustrationSrcMap = {
  Chat: "/aminations/Chat.lottie",
  DataError: "/aminations/Data_error.lottie",
  EmptyListAdd: "/aminations/Empty_list_add.lottie",
  EmptyListNoAdd: "/aminations/Empty_list_no_add.lottie",
  EmptySearch: "/aminations/Empty_search.lottie",
  MaintenanceWork: "/aminations/Maintenance_work.lottie",
  NoDataAnalytics: "/aminations/No_data_analytics.lottie",
  NoPermissions: "/aminations/No_permissions.lottie",
  NoResponse: "/aminations/No_response.lottie",
  Notifications: "/aminations/Notifications.lottie",
  PermissionsGet: "/aminations/Permissions_get.lottie",
  RootError: "/aminations/Root_error.lottie",
  SmthngWrong: "/aminations/Smthng_wrong.lottie",
  StartSearch: "/aminations/Start_search.lottie",
  TenantCreate: "/aminations/Tenant_create.lottie",
  UpdateApp: "/aminations/Update_app.lottie",
  UserLimit: "/aminations/User_limit.lottie",
} as const;

export type IllustrationName = keyof typeof illustrationSrcMap;
