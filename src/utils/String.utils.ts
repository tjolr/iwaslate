export const StringUtils = {
  firstCharUpperCase: (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1),
  rewardToPlural: (reward: string) => {
    // Bad quickfix i know (-:
    if (reward.trim() === 'film') {
      return 'filmer';
    } else if (reward.trim() === 'frisbee') {
      return `frisbee's`;
    }
  },
};
