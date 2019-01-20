import moment from 'moment';

export const itemInfoString = (item) => {
  const { score, time, by } = item;

  let infoString = '';

  if (score) {
    const pts = score === 1 ? 'point' : 'points';
    infoString += `${score} ${pts} `;
  }

  if (by) {
    infoString += `by ${by} `;
  }

  if (time) {
    const timeAgo = moment.unix(time).fromNow();
    infoString += `${timeAgo}`;
  }

  return infoString;
};

export const truncateString = (str, maxChars) => {
  if (str && typeof str === 'string') {
    if (str.length > maxChars) {
      const slice = str.substring(0, maxChars).trim();
      return `${slice}...`;
    }

    return str;
  }

  return '';
};
