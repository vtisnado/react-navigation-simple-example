# react-navigation-simple-example
This is a very simple example in how to use **React Navigation**.

## How to run
1. Clone this repo `git clone https://github.com/vtisnado/react-navigation-simple-example`
2. run `npm install` to install all the packages or manually install React Navigation with `npm i -S react-navigation` and `npm i -S react-native-gesture-handler`.

No additional steps are required for iOS.

To finalise installation of react-native-gesture-handler for Android, be sure to make the necessary modifications to **MainActivity.java**:

```javascript
package com.reactnavigation.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```

Always check the latest changes in the official documentation: https://reactnavigation.org/docs/en/getting-started.html

[Alt text](/react-navigation-example-1.png?raw=true "React Navigation Home")
[Alt text](/react-navigation-example-2.png?raw=true "React Navigation Second Screen")