import { FetchService } from '../../services';

export async function userLogin(fnId, username, password) {
  const url = `/x?fnid=${fnId}&u=${username}&p=${password}`;
  return FetchService.get(url);
}

export async function getUser(username) {
  const url = `/user?id=${username}`;
  return FetchService.get(url);
}
