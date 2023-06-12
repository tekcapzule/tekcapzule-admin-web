export const Constants = {
  None: 'none',
  NotAvailable: 'N/A',
  AdminUserGroup: 'admin_users_group',
  DefaultApiCacheExpiryHours: 12,
  DefaultSubscriptionTopics: ['AI', 'CLD', 'SWD'],
  DashboardCard: { uniqueId: 'dashboard', navUrl: '', displayName: 'Dashboard' },
  Cards: [
    { uniqueId: 'user', navUrl: 'admin/users', displayName: 'Users' },
    { uniqueId: 'subscription', navUrl: 'admin/subscription', displayName: 'Subscriptions' },
    { uniqueId: 'feedback', navUrl: 'admin/feedback', displayName: 'Feedback' },
    { uniqueId: 'capsule', navUrl: 'admin/capsule', displayName: 'Capsule' },
    { uniqueId: 'course', navUrl: 'admin/course', displayName: 'Courses' },
    { uniqueId: 'tekbyte', navUrl: 'admin/tekbyte', displayName: 'TekByte' },
    { uniqueId: 'product', navUrl: 'admin/product', displayName: 'Products (Mkt Place)' },
    { uniqueId: 'digest', navUrl: 'admin/digest', displayName: 'Digests' },
  ],
  Pages: [
    { uniqueId: 'createcapsule', navUrl: 'admin/capsule/createcapsule', displayName: 'Create Capsule' },
    { uniqueId: 'editcapsule', navUrl: 'admin/capsule/editcapsule', displayName: 'Edit Capsule' },
    { uniqueId: 'createtekByte', navUrl: 'admin/tekbyte/createtekbyte', displayName: 'Create TekByte' },
    { uniqueId: 'edittekByte', navUrl: 'admin/tekbyte/edittekbyte', displayName: 'Edit TekByte' },    
  ]
};

Object.freeze(Constants);
