import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jaky.speedo',
  appName: 'speedo',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
