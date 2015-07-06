# Aurelia + Cordova

This project intends to serve as a starter repo for those wanting to use Aurelia with Cordova.  

## Platform Support

This library can be used in any Cordova supported platform or in the broswer of your choice.

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.

2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Execute [jspm](http://jspm.io/) to install additional packages included from jspm.  To do so issue the following command:

  ```shell
  jspm install -y
  ```
4. Ensure that [gulp-shell](https://www.npmjs.com/package/gulp-shell) is installed. If you need to install it, use the following command:

  ```shell
  npm install gulp-shell
  ```
5. Ensure that [cordova](https://cordova.apache.org/docs/en/4.0.0/guide_cli_index.md.html) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g cordova
  ```

6. You can choose to install the following platforms for use:
  
  ### Cordova Supported Platforms
  * amazon-fireos
  * android
  * blackberry10
  * browser
  * firefoxos 
  * ios
  
  Issue the following command to add the supported platform of your choice.
  ```shell
  cordova platform add [SupportedPlatform eg: android]
  ```

7. Issue the following commands run and build the application.
  ```shell
  gulp build
  cordova run [SupportedPlatform eg: android] [Optional: --device]
  ```
  
  
  
  
  
