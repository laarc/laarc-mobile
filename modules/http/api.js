import { FetchService } from '../../services';

export async function getPage(url) {
  return FetchService.get(url);
}
