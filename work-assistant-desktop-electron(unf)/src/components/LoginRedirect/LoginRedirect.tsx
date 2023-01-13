import React from 'react';

export interface ILoginConfig {
  authSceme?: string;
  clientId?: string;
  disableHttpsCheck?: boolean;
  display?: string;
  redirectUri?: string;
  responseMode: string;
}

/* eslint-disable no-alert, no-console */
const LoginRedirect = (config: ILoginConfig): JSX.Element | undefined => {
  console.log(config);
  return <div>Loading...</div>;
};

export default LoginRedirect;
