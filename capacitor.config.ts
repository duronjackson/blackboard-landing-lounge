
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.4a81060db00f4320a191edfbbe505458',
  appName: 'blackboard-landing-lounge',
  webDir: 'dist',
  server: {
    url: 'https://4a81060d-b00f-4320-a191-edfbbe505458.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;
