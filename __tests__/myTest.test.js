/* eslint-disable prettier/prettier */
import wd from 'wd';
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
// const PORT = 4723;
// const config = {
//   platformName: 'Android',
//   deviceName: 'Android Emulator',
//   app: 'C:/Users/Carlo/Documents/1.Projects/React Native/CICDTestApp/android/app/build/outputs/apk/debug/app-debug.apk',
// };

// const driver = wd.promiseChainRemote('localhost', PORT);


userName = process.env.BROWSERSTACK_USERNAME
accessKey = process.env.BROWSERSTACK_ACCESS_KEY
app = process.env.BROWSERSTACK_APP_ID

var capabilities = {
    "browserstack.user" : userName,
    "browserstack.key" : accessKey,
    "app" : app,
    "device" : "Samsung Galaxy S8",
    "build" : "MyBuild"
}

driver = wd.promiseRemote("https://hub-cloud.browserstack.com/wd/hub");

beforeAll(async () => {
  await driver.init(capabilities);
  await driver.sleep(3000);
}); // Sometime for the app to load

test('Correct Input', async () => {
  const element = await driver.elementByAccessibilityId('nameInput');
  await element.sendKeys("Carlo");
  await driver.elementByAccessibilityId('saveName').click();
});

test('Wrong Input', async () => {
  const element = await driver.elementByAccessibilityId('nameInput');
  await element.sendKeys("Carlo123");
  await driver.elementByAccessibilityId('saveName').click();
});

test('Empty Input', async () => {
  const element = await driver.elementByAccessibilityId('nameInput');
  await element.sendKeys("");
  await driver.elementByAccessibilityId('saveName').click();
  driver.fin(function() { return driver.quit(); }).done();
});

