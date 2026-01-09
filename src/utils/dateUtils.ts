export const dateUtils = {
  getTimeUntilDue: (dueDate: Date): number => {
    return dueDate.getTime() - new Date().getTime();
  },

  isDueSoon: (dueDate: Date): boolean => {
    const hoursUntilDue = dateUtils.getTimeUntilDue(dueDate) / (1000 * 60 * 60);
    return hoursUntilDue > 0 && hoursUntilDue <= 24;
  },

  isOverdue: (dueDate: Date): boolean => {
    return dateUtils.getTimeUntilDue(dueDate) < 0;
  },

  formatDueDate: (dueDate: Date): string => {
    const now = new Date();
    const diffMs = dueDate.getTime() - now.getTime();
    const diffHours = diffMs / (1000 * 60 * 60);
    const diffDays = diffMs / (1000 * 60 * 60 * 24);

    if (diffMs < 0) {
      return '期限切れ';
    } else if (diffHours < 1) {
      return '1時間以内';
    } else if (diffHours < 24) {
      return `${Math.floor(diffHours)}時間後`;
    } else if (diffDays < 7) {
      return `${Math.floor(diffDays)}日後`;
    } else {
      return dueDate.toLocaleDateString('ja-JP');
    }
  },
};
