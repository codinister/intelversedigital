import { apiEndpoints } from './envConfigs';

const getUrl = (url: string) => {
  return apiEndpoints() + url;
};

export default getUrl;
