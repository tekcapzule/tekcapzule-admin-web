export const Constants = {
  None: 'none',
  NotAvailable: 'N/A',
  AdminUserGroup: 'admin_users_group',
  DefaultApiCacheExpiryHours: 12,
  DefaultSubscriptionTopics: ['AI', 'CLD', 'SWD'],
  DashboardCard: { uniqueId: 'dashboard', navUrl: '', displayName: 'Dashboard' },
  Cards: [
    { uniqueId: 'user', navUrl: 'admin/users', displayName: 'Users', icon: 'user-icon' },
    { uniqueId: 'subscription', navUrl: 'admin/subscription', displayName: 'Subscriptions', icon: 'subscribe-icon' },
    { uniqueId: 'feedback', navUrl: 'admin/feedback', displayName: 'Feedback', icon: 'feedback-icon' },
    { uniqueId: 'capsule', navUrl: 'admin/capsule', displayName: 'Capsule', icon: 'capsule-icon' },
    { uniqueId: 'course', navUrl: 'admin/course', displayName: 'Courses', icon: 'courses-icon' },
    { uniqueId: 'tekbyte', navUrl: 'admin/tekbyte', displayName: 'TekByte', icon: 'tekbytes-icon' },
    { uniqueId: 'product', navUrl: 'admin/product', displayName: 'Products (Mkt Place)', icon: 'product-icon' },
    { uniqueId: 'digest', navUrl: 'admin/digest', displayName: 'Digests', icon: 'digest-icon' },
  ],
  Pages: [
    { uniqueId: 'createcapsule', navUrl: 'admin/capsule/createcapsule', displayName: 'Create Capsule' },
    { uniqueId: 'editcapsule', navUrl: 'admin/capsule/editcapsule', displayName: 'Edit Capsule' },
    { uniqueId: 'createtekByte', navUrl: 'admin/tekbyte/createtekbyte', displayName: 'Create TekByte' },
    { uniqueId: 'edittekByte', navUrl: 'admin/tekbyte/edittekbyte', displayName: 'Edit TekByte' },    
  ]
};

Object.freeze(Constants);
