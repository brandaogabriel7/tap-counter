const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
  {
    serverUrl: 'https://sonarcloud.io',
    token: process.env.SONAR_TOKEN,
    options: {
      'sonar.organization': process.env.SONAR_ORGANIZATION,
      'sonar.projectKey': process.env.SONAR_PROJECT_KEY,
      'sonar.sources': './src',
      'sonar.exclusions':
        '**/__tests__/**,./src/index.tsx,./src/reportWebVitals.ts',
      'sonar.tests': './src',
      'sonar.test.inclusions':
        './src/**/__tests__/**/*.spec.tsx,./src/**/__tests__/**/*.spec.ts',
      'sonar.typescript.lcov.reportPaths': './coverage/lcov.info',
      'sonar.testExecutionReportPaths': './test-report.xml'
    }
  },
  () => {}
);
