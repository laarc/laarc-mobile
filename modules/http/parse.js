const getStringBetween = (str, startChars, endChars) => {
  const rightSplit = str.split(startChars);

  if (rightSplit.length > 1) {
    const right = rightSplit[1];
    const leftSplit = right.split(endChars);

    if (leftSplit.length >= 1) {
      return leftSplit[0];
    }
  }

  return null;
};

export const extractLoginLinkFnId = (htmlString) => {
  const strStart = 'href="/x?';
  const strEnd = '">';
  return getStringBetween(htmlString, strStart, strEnd);
};

export const extractAuthFnId = (htmlString) => {
  const strStart = 'name="fnid" value="';
  const strEnd = '">';
  return getStringBetween(htmlString, strStart, strEnd);
};

export const extractCookie = (respString) => {
  const strStart = 'Set-Cookie: ';
  const strEnd = '; ';
  return getStringBetween(respString, strStart, strEnd);
};

/* eslint-disable prefer-destructuring */
export const extractUserData = (htmlString) => {
  const userData = {
    created: '',
    karma: 0,
    about: '',
    email: '',
    notify: false,
    showdead: false,
    noprocrast: false,
    maxvisit: 0,
    minaway: 0,
    delay: 0,
  };

  const rowEnd = '</td></tr>';

  try {
    const strStart = 'created:</td><td>';
    userData.created = getStringBetween(htmlString, strStart, rowEnd);
  } catch (err) {
    console.log('error getting created', err);
  }

  try {
    const strStart = 'karma:</td><td>';
    const karma = getStringBetween(htmlString, strStart, rowEnd);
    if (karma) userData.karma = parseInt(karma, 10);
  } catch (err) {
    console.log('error getting karma', err);
  }

  try {
    const strStart = 'about:</td><td>';
    userData.about = getStringBetween(htmlString, strStart, rowEnd);
  } catch (err) {
    console.log('error getting about', err);
  }

  return userData;
};
/* eslint-enable prefer-destructuring */
